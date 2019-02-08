{{eval "Handlebars.registerHelper('toUpperCase', function(str) { try{ return str.toUpperCase(); } catch(err) { return err; } });" }}

{{eval "Handlebars.registerHelper('last', function(array) { return array[array.length - 1]; });" }}
