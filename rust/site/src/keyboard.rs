use crate::window::window::WindowOp;
use std::collections::HashMap;

pub struct KeyboardShortcuts {
    shortcuts: HashMap<String, WindowOp>,
}

impl KeyboardShortcuts {
    pub fn new() -> Self {
        let mut shortcuts = HashMap::new();

        // Define keyboard shortcuts
        shortcuts.insert("n".to_string(), WindowOp::New);
        shortcuts.insert("d".to_string(), WindowOp::Delete);

        Self { shortcuts }
    }

    pub fn get_operation(&self, key: &str) -> Option<WindowOp> {
        self.shortcuts.get(key).cloned()
    }

    pub fn get_shortcuts_help(&self) -> Vec<(String, String)> {
        vec![
            ("n".to_string(), "Create new window".to_string()),
            ("d".to_string(), "Delete current window".to_string()),
        ]
    }
}

impl Default for KeyboardShortcuts {
    fn default() -> Self {
        Self::new()
    }
}
