{{eval "Handlebars.registerHelper('toUpperCase', function(str) { try{ return str.toUpperCase(); } catch(err) { return err; } });" }}

{{eval "Handlebars.registerHelper('last', function(array) { return array[array.length - 1]; });" }}

{{eval "Handlebars.registerHelper('first', function(array) { return array[0]; });" }}

{{eval "Handlebars.registerHelper('toLowerCase', function(str) { try{ return str.toLowerCase(); } catch(err) { return err; } });" }}
