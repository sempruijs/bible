use std::collections::HashMap;
use uuid::Uuid;

struct Point {
    x: i32,
    y: i32,
}

struct Windows {
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
            zoom: 0,
            selected: w_id,
            windows: windows,
        }
    }
}

impl Windows {
    fn exec(&mut self, op: WindowOp) {
        match op {
            WindowOp::New => self.new_window(),
            WindowOp::Delete => todo!(),
        }
    }

    fn current_window(&self) -> Window {
        self.windows.get(&self.selected)
    }

    fn new_window(&mut self) {
        let current_w = self.current_window();
        let w = Window { pos: current_w.pos };
        self.windows.insert(WindowID::new(), w);
    }
}

impl WindowID {
    pub fn new() -> Self {
        Self(Uuid::new_v4())
    }
}

enum WindowOp {
    New,
    Delete,
}

#[derive(Hash, PartialEq, Eq, Debug, Clone)]
struct WindowID(Uuid);

struct Window {
    pos: Point,
}
