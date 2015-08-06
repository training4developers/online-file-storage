this["templates"] = this["templates"] || {};

this["templates"]["file-listing"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row\"><div class=\"col-md-3\">"
    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "</div><div class=\"col-md-3\">"
    + alias3(((helper = (helper = helpers.fileSize || (depth0 != null ? depth0.fileSize : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileSize","hash":{},"data":data}) : helper)))
    + "</div><div class=\"col-md-3\">"
    + alias3(((helper = (helper = helpers.modifiedDate || (depth0 != null ? depth0.modifiedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"modifiedDate","hash":{},"data":data}) : helper)))
    + "</div><div class=\"col-md-3\"><select><option>Select One...</option><option>Rename</option><option>Delete</option><option>Download</option></select></div></div>";
},"3":function(depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"col-md-12\">No Files</div></div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\"><div class=\"col-md-3\">File Name</div><div class=\"col-md-3\">Size</div><div class=\"col-md-3\">Date Modified</div><div class=\"col-md-3\">Action</div></div>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.files : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["templates"]["file_listing"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row\"><div class=\"col-md-3\">"
    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "</div><div class=\"col-md-3\">"
    + alias3(((helper = (helper = helpers.fileSize || (depth0 != null ? depth0.fileSize : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileSize","hash":{},"data":data}) : helper)))
    + "</div><div class=\"col-md-3\">"
    + alias3(((helper = (helper = helpers.modifiedDate || (depth0 != null ? depth0.modifiedDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"modifiedDate","hash":{},"data":data}) : helper)))
    + "</div><div class=\"col-md-3\"><select><option>Select One...</option><option>Rename</option><option>Delete</option><option>Download</option></select></div></div>";
},"3":function(depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"col-md-12\">No Files</div></div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\"><div class=\"col-md-3\">File Name</div><div class=\"col-md-3\">Size</div><div class=\"col-md-3\">Date Modified</div><div class=\"col-md-3\">Action</div></div>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.files : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});