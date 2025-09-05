use std::collections::HashMap;
use uuid::Uuid;

#[derive(Clone)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

#[derive(Clone)]
pub struct Windows {
    zoom: f32,
    selected: WindowID,
    windows: HashMap<WindowID, Window>,
}

impl Default for Point {
    fn default() -> Self {
        Self { x: 0, y: 0 }
    }
}

impl Default for Windows {
    fn default() -> Self {
        let w_id = WindowID::new();
        let w = Window {
            pos: Point::default(),
        };
        let mut windows = HashMap::new();
        windows.insert(w_id, w);
        Self {
            zoom: 0.0,
            selected: w_id,
            windows: windows,
        }
    }
}

impl Windows {
    pub fn exec(&mut self, op: WindowOp) {
        match op {
            WindowOp::New => self.new_window(),
            WindowOp::Delete => self.delete_current_window(),
        }
    }

    fn current_window(&self) -> Window {
        self.windows.get(&self.selected).unwrap().clone()
    }

    fn new_window(&mut self) {
        let current_w = self.current_window();
        let p = Point {
            x: current_w.pos.x + 1,
            y: current_w.pos.y,
        };
        let w = Window { pos: p };
        let new_id = WindowID::new();
        self.selected = new_id;
        self.windows.insert(new_id, w);
    }
    
    fn delete_current_window(&mut self) {
        // Don't delete if it's the last window
        if self.windows.len() <= 1 {
            return;
        }
        
        let current_id = self.selected;
        self.windows.remove(&current_id);
        
        // Select another window (just pick the first one)
        if let Some(&id) = self.windows.keys().next() {
            self.selected = id;
        }
    }

    pub fn iter(&self) -> impl Iterator<Item = (&WindowID, &Window)> {
        self.windows.iter()
    }

    pub fn windows(&self) -> Vec<Window> {
        self.windows.values().cloned().collect()
    }
}

impl WindowID {
    pub fn new() -> Self {
        Self(Uuid::new_v4())
    }
}

#[derive(Clone, Copy, Debug)]
pub enum WindowOp {
    New,
    Delete,
}

#[derive(Hash, PartialEq, Eq, Debug, Clone, Copy)]
pub struct WindowID(Uuid);

#[derive(Clone)]
pub struct Window {
    pub pos: Point,
}
