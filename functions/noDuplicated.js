const noDuplicated = (arr) => arr.filter((item, pos, self) => self.indexOf(item) === pos);
