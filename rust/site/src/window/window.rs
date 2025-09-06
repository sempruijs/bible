use crate::app::App;

#[derive(Clone)]
pub struct Windows {
    zoom: f32,
    x: usize, // Current x position (column index)
    y: usize, // Current y position (row index)
    windows: Vec<Vec<Window>>,
}

impl Default for Windows {
    fn default() -> Self {
        // Start with one window at position (0, 0)
        let default_window = Window {
            app: Some(App::Bible),
        };
        let windows = vec![vec![default_window]];

        Self {
            zoom: 1.0,
            x: 0,
            y: 0,
            windows,
        }
    }
}

#[derive(Debug, Clone)]
pub enum WindowError {
    WindowNotFound,
    LastWindow,
    FirstWindow,
    PreviousWindow,
    OnlyWindow,
}

impl Windows {
    pub fn exec(&mut self, op: WindowOp) -> Result<(), WindowError> {
        match op {
            WindowOp::New => {
                self.new();
                Ok(())
            }
            WindowOp::Delete => self.delete(),
            WindowOp::Next => self.next(),
            WindowOp::Previous => self.previous(),
            WindowOp::Up => self.up(),
            WindowOp::Down => self.down(),
            WindowOp::NewRow => {
                self.new_row();
                Ok(())
            }
        }
    }

    fn new(&mut self) {
        // Add a new window to the right of the current position
        let new_window = Window { app: None };

        // Get the current row
        if let Some(row) = self.windows.get_mut(self.y) {
            // Insert the new window to the right of current position
            row.insert(self.x + 1, new_window);
            // Move to the new window
            self.x += 1;
        }
    }

    fn delete(&mut self) -> Result<(), WindowError> {
        // Don't delete if it's the only window
        let total_windows: usize = self.windows.iter().map(|row| row.len()).sum();
        if total_windows <= 1 {
            return Err(WindowError::OnlyWindow);
        }

        if let Some(row) = self.windows.get_mut(self.y) {
            if row.len() > 1 {
                // Remove current window
                row.remove(self.x);

                // Adjust x position if needed
                if self.x >= row.len() && self.x > 0 {
                    self.x = row.len() - 1;
                }
            } else if row.len() == 1 {
                // If this is the only window in the row, remove the entire row
                if self.windows.len() > 1 {
                    self.windows.remove(self.y);

                    // Adjust y position if needed
                    if self.y >= self.windows.len() && self.y > 0 {
                        self.y = self.windows.len() - 1;
                    }

                    // Reset x to 0 for the new row
                    self.x = 0;
                } else {
                    return Err(WindowError::OnlyWindow);
                }
            }
        }

        Ok(())
    }

    fn next(&mut self) -> Result<(), WindowError> {
        if let Some(row) = self.windows.get(self.y) {
            if self.x + 1 < row.len() {
                self.x += 1;
                Ok(())
            } else {
                Err(WindowError::LastWindow)
            }
        } else {
            Err(WindowError::WindowNotFound)
        }
    }

    fn previous(&mut self) -> Result<(), WindowError> {
        if self.x > 0 {
            self.x -= 1;
            Ok(())
        } else {
            Err(WindowError::FirstWindow)
        }
    }

    fn up(&mut self) -> Result<(), WindowError> {
        if self.y > 0 {
            self.y -= 1;
            // Adjust x if the new row has fewer windows
            if let Some(row) = self.windows.get(self.y) {
                if self.x >= row.len() {
                    self.x = row.len().saturating_sub(1);
                }
            }
            Ok(())
        } else {
            Err(WindowError::FirstWindow)
        }
    }

    fn down(&mut self) -> Result<(), WindowError> {
        if self.y + 1 < self.windows.len() {
            self.y += 1;
            // Adjust x if the new row has fewer windows
            if let Some(row) = self.windows.get(self.y) {
                if self.x >= row.len() {
                    self.x = row.len().saturating_sub(1);
                }
            }
            Ok(())
        } else {
            Err(WindowError::LastWindow)
        }
    }

    fn new_row(&mut self) {
        // Add a new row below the current one with a single window
        let new_window = Window { app: None };
        self.windows.insert(self.y + 1, vec![new_window]);
        // Move to the new row
        self.y += 1;
        self.x = 0;
    }

    pub fn current_position(&self) -> (usize, usize) {
        (self.x, self.y)
    }

    pub fn windows_with_positions(&self) -> Vec<((usize, usize), Window, bool)> {
        let mut result = Vec::new();

        for (y, row) in self.windows.iter().enumerate() {
            for (x, window) in row.iter().enumerate() {
                let is_selected = x == self.x && y == self.y;
                result.push(((x, y), window.clone(), is_selected));
            }
        }

        result
    }

    pub fn window_count(&self) -> usize {
        self.windows.iter().map(|row| row.len()).sum()
    }

    pub fn set_current_window_app(&mut self, app: App) {
        if let Some(row) = self.windows.get_mut(self.y) {
            if let Some(window) = row.get_mut(self.x) {
                window.app = Some(app);
            }
        }
    }
}

#[derive(Clone, Copy, Debug)]
pub enum WindowOp {
    New,
    Delete,
    Next,
    Previous,
    Up,
    Down,
    NewRow,
}

#[derive(Clone)]
pub struct Window {
    pub app: Option<App>,
}
