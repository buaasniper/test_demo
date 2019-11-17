script = document.createElement('script');


var code = '(' + function() {

var vetexID;
//计算矩阵的库
var my_m4 = {
  
    projection: function(width, height, depth) {
      // Note: This matrix flips the Y axis so 0 is at the top.
      return [
      2 / width, 0, 0, 0,
      0, -2 / height, 0, 0,
      0, 0, 2 / depth, 0,
      -1, 1, 0, 1,
      ];
    },
    
    vec_max_mul: function(a,b){
      var result = [];
      // 这个系数是我确定的，这个之后再确认
      var number = 0.1 * 1.5;
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      //console.log(b00,b01,b02);
      for (var i = 0; i < a.length; i += 3){
        var w = a[i] * b30 + a[i+1] * b31 + a[i+2] * b32 + b33;
        result = result.concat((a[i] * b00 + a[i+1] * b01 + a[i+2] * b02 + b03) / w);
        result = result.concat((a[i] * b10 + a[i+1] * b11 + a[i+2] * b12 + b13) / w);
        result = result.concat((a[i] * b20 + a[i+1] * b21 + a[i+2] * b22 + b23) / w);
      }
      //console.log("result", result);
      return result;
    
    },
    
    multiply: function(a, b) {
      var a00 = a[0 * 4 + 0];
      var a01 = a[0 * 4 + 1];
      var a02 = a[0 * 4 + 2];
      var a03 = a[0 * 4 + 3];
      var a10 = a[1 * 4 + 0];
      var a11 = a[1 * 4 + 1];
      var a12 = a[1 * 4 + 2];
      var a13 = a[1 * 4 + 3];
      var a20 = a[2 * 4 + 0];
      var a21 = a[2 * 4 + 1];
      var a22 = a[2 * 4 + 2];
      var a23 = a[2 * 4 + 3];
      var a30 = a[3 * 4 + 0];
      var a31 = a[3 * 4 + 1];
      var a32 = a[3 * 4 + 2];
      var a33 = a[3 * 4 + 3];
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      return [
      b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
      b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
      b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
      b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
      b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
      b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
      b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
      b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
      b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
      b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
      b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
      b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
      b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
      b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
      b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
      b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
      ];
    }
    };
  

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GLSL = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    /**
     * Transform glsl to js.
     *
     * @module  glsl-js
     */
    
    var GLSL = require('./lib');
    
    //static bindings
    GLSL.compile =
    GLSL.string = function (str, opt) {
        return GLSL(opt).compile(str);
    };
    
    GLSL.stream = require('./stream');
    
    module.exports = GLSL;
    },{"./lib":4,"./stream":26}],2:[function(require,module,exports){
    /**
     * A collection of builtins with types
     */
    
    exports.gl_NumWorkGroups = 'uvec3';
    exports.gl_WorkGroupSize = 'uvec3';
    exports.gl_WorkGroupID = 'uvec3';
    exports.gl_LocalInvocationID = 'uvec3';
    exports.gl_GlobalInvocationID = 'uvec3';
    exports.gl_LocalInvocationIndex = 'uint';
    exports.gl_VertexID = 'int';
    exports.gl_InstanceID = 'int';
    exports.gl_Position = 'vec4';
    exports.gl_PointSize = 'float';
    exports.gl_ClipDistance = 'float';
    exports.gl_FragCoord = 'vec4';
    exports.gl_FragColor = 'vec4';
    exports.gl_FrontFacing = 'bool';
    exports.gl_PointCoord = 'vec2';
    exports.gl_PrimitiveID = 'int';
    exports.gl_SampleID = 'int';
    exports.gl_SamplePosition = 'vec2';
    exports.gl_SampleMaskIn = 'int';
    exports.gl_Layer = 'int';
    exports.gl_ViewportIndex = 'int';
    exports.gl_FragDepth = 'float';
    exports.gl_SampleMask = 'int';
    
    },{}],3:[function(require,module,exports){
    /**
     * Descriptor of a node.
     *
     * @module  glsl-js/lib/descriptor
     */
    var extend = require('xtend/mutable');
    var types = require('./types');
    
    
    /**
     * Constructor of descriptor - a result of mapping a glsl node to js.
     *
     * @param {string} str Result of rendering, complex version (unoptimized)
     * @param {object} options Object with options:
     *
     * @param {array} options.components List of per-component descriptors, eg for vec2 it is descriptor as if each value was rendered separately
     * @param {string} options.type Output type of descriptor
     * @param {string} options.visible Whether component should be visible in output
     * @param {number} options.complexity Empiric difficulty of calculation of the main descriptor string. Each component contains its own complexity metric.
     * @param {string|array} options.include List of stdlib methods to include for a node, if complex version is applied
     * @param {bool} options.optimize Whether to try to optimize the result.
     */
    function Descriptor (str, options) {
        //strings which are rendered to something
        if (str != null) {
            var descriptor = new String((str+'').trim());
            descriptor.visible = true;
        }
        //strings which are rendered to nothing, like preprocessors etc
        else {
            var descriptor = new String();
            descriptor.visible = false;
        }
    
        //take over existing info
        if (str instanceof String) {
            extend(descriptor, str);
        }
    
        //take over options
        if (options) {
            descriptor.type = options.type;
            descriptor.components = options.components;
            descriptor.visible = options.visible;
            descriptor.complexity = options.complexity;
            descriptor.include = options.include;
            descriptor.optimize = options.optimize;
        }
    
        //in case of undefined complexity we should opt out for average value
        //suppose that user will set desired max complexity in custom cases
        if (descriptor.complexity == null || isNaN(descriptor.complexity)) {
            descriptor.complexity = Math.max(50, descriptor.length);
        }
    
        //set type based on number of components.
        if (descriptor.type == null) {
            if (!(descriptor+'')) {
                descriptor.type = 'void';
                descriptor.components = [];
            }
            else if (descriptor.components == null) {
                descriptor.type = 'float';
                descriptor.components = [descriptor];
            }
            else {
                var l = descriptor.components.length;
                if (l === 1) descriptor.type = 'float';
                else if (l <= 4) descriptor.type = 'vec' + l;
                else descriptor.type = 'mat' + Math.sqrt(l)|0;
            }
        }
        //type != null, components == null → set components as item-access
        else if (descriptor.components == null) {
            descriptor.components = [];
            var l = types[descriptor.type].length;
            if (/mat/.test(descriptor.type)) l *= types[types[descriptor.type].type].length;
            if (l === 1) {
                descriptor.components = [descriptor];
            }
            else {
                for (var i = 0; i < l; i++) {
                    descriptor.components[i] = Descriptor(`${descriptor}[${i}]`, {
                        complexity: 1 + descriptor.complexity
                    });
                }
            }
        }
    
        //set optimize flag if all children are optimizable
        if (descriptor.optimize == null) {
            descriptor.optimize = descriptor.components.every(function (comp) {
                return !!comp && comp.optimize !== false;
            });
        }
    
        return descriptor;
    }
    
    module.exports = Descriptor;
    
    },{"./types":8,"xtend/mutable":25}],4:[function(require,module,exports){
    /**
     * Transform glsl to js.
     *
     * Dev notes.
     * glsl-parser often creates identifiers/other nodes by inheriting them from definition.
     * So by writing som additional info into nodes, note that it will be accessible everywhere below, where initial id is referred by.
     *
     * @module  glsl-js/lib/index
     */
    var fflag = 0;
    var ffflag = 0;
    var lock = 0;
    var fl = 0;
    var fll = 0
    var Emitter = require('events');
    var inherits = require('inherits');
    var assert = require('assert');
    var parse = require('./parse');
    var extend = require('xtend/mutable');
    var builtins = require('./builtins');
    var types = require('./types');
    var operators = require('./operators');
    var stdlib = require('./stdlib');
    var flatten = require('array-flatten');
    var Descriptor = require('./descriptor');
    var prepr = require('prepr');
    
    var floatRE = /^-?[0-9]*(?:.[0-9]+)?(?:e-?[0-9]+)?$/i;
    
    
    /**
     * Create GLSL codegen instance
     *
     * @constructor
     */
    function GLSL (options) {
        if (!(this instanceof GLSL)) return new GLSL(options);
    
        extend(this, options);
    
        this.reset();
    
        //return function compiler for convenience
        var compile = this.compile.bind(this);
        compile.compiler = this;
        compile.compile = compile;
    
        return compile;
    };
    
    inherits(GLSL, Emitter);
    
    
    /**
     * Basic rendering settings
     */
    GLSL.prototype.optimize = true;
    GLSL.prototype.preprocess = prepr;
    GLSL.prototype.debug = false;
    
    
    /**
     * Operator names
     */
    GLSL.prototype.operators = operators.operators;
    
    
    /**
     * Type constructors
     */
    GLSL.prototype.types = types;
    
    
    /**
     * Map of builtins with their types
     */
    GLSL.prototype.builtins = builtins;
    
    
    /**
     * Parse string arg, return ast.
     */
    GLSL.prototype.parse = parse;
    
    
    /**
     * Stdlib functions
     */
    GLSL.prototype.stdlib = stdlib;
    
    
    /**
     * Initialize analysing scopes/vars/types
     */
    GLSL.prototype.reset = function () {
        if (this.descriptors) this.descriptors.clear();
    
        //cache of descriptors associated with nodes
        else this.descriptors = new Map();
    
        //scopes analysed. Each scope is named after the function they are contained in
        this.scopes = {
        global: {
            __name: 'global',
            __parentScope: null
        }
        };
    
        //hash of registered structures
        this.structs = {
    
        };
    
        //collected uniforms
        this.uniforms = {
    
        };
    
        //collected varying-s
        this.varyings = {
    
        };
    
        //collected attributes
        this.attributes = {
    
        };
    
        //collected functions, with output types
        this.functions = {
    
        };
    
        //collected stdlib functions need to be included
        this.includes = {
    
        };
    
        //current scope of the node processed
        this.currentScope = 'global';
    };
    
    
    /**
     * Compile whether string or tree to js
     */
    GLSL.prototype.compile = function compile (arg, ff) {
        if (ff == 0)
        {
        //apply preprocessor
        if (this.preprocess) {
        if (this.preprocess instanceof Function) {
            arg = this.preprocess(arg);
        }
        else {
            arg = prepr(arg);
        }
        }
    
        arg = this.parse(arg);
    
        var result = this.process(arg);
    
        result = this.stringifyStdlib(this.includes) + '\n' + result;
        var res = result.split("\n");
        for (var i = 0 ; i < res.length ;++ i)
        {
        //   if(res[i].indexOf("[0, 1, 2].map") != -1)
        //   {
        //     res[i] = `tt = my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));
        //     fragNormal[bigI] = [tt[0],tt[1],tt[2]];`;
        //   }
        if(res[i].indexOf("main") != -1)
        {
            res[i] = `function eval_main(){`;
        }
        }
        result = res.join("\n");
        return result;
        }
        else
        {
        fl = 1;
        
        if (this.preprocess) {
            if (this.preprocess instanceof Function) {
            arg = this.preprocess(arg);
            }
            else {
            arg = prepr(arg);
            }
        }
        
        arg = this.parse(arg);
        
        var result = this.process(arg);
        
        // result = this.stringifyStdlib(this.includes) + '\n' + result;
        var res = result.split("\n");
        for (var i = 0 ; i < res.length ;++ i)
        {
            res[i] = res[i].split(";")[0] + ";";
            if (res[i].indexOf("vPosition") != -1)
            {
            res[i] = ``;
            }
            if(res[i].indexOf("main") != -1)
            {
            res[i] = `function eval_main(){
                matrixCalculator.loadMatrix(0, vertPosition);
                matrixCalculator.loadMatrix(1, vertTexCoord);
                matrixCalculator.loadMatrix(2, vertNormal);`;
            }
        
        }
        result = res.join("\n");
        return result;
        
        }
        
    };
    
    
    /**
     * Process glsl AST node so that it returns descriptor for a node
     * which by default casts to a string
     * but contains additional info:
     * `component` values, if node operates on array
     * `type` which is returned from the node
     * `complexity` of the node
     */
    GLSL.prototype.process = function (node, arg) {
        //we don’t process descriptors
    
        if (node instanceof String) {
        return node;
        }
    
        //return cached descriptor, if already was processed
        if (this.descriptors.has(node)) {
        return this.descriptors.get(node);
        }
    
        //cache simple things as easy descriptors
        if (node == null ||
            typeof node === 'number' ||
            typeof node === 'string' ||
            typeof node === 'boolean') {
        return this.cache(node, Descriptor(node, {complexity: 0}));
        }
    
    
        //in some cases glsl-parser returns node object inherited from other node
        //which properties exist only in prototype.
        //Insofar structures take it’s definition type, so should be ignored.
        //See #Structures test for example.
        if (!node.hasOwnProperty('type')) return this.cache(node, Descriptor(null));
    
        var t = this.transforms[node.type];
    
        var startCall = false;
    
        //wrap unknown node
        if (t === undefined) {
        console.warn(`Unknown node type '${node.type}'`);
        return this.cache(node, null);
        }
    
        if (!t) {
        return this.cache(node, null);
        }
    
        if (typeof t !== 'function') {
        return this.cache(node, t);
        }
    
        //do start routines on the first call
        if (!this.started) {
        this.emit('start', node);
        this.started = true;
        startCall = true;
        }
    
        //apply node serialization
        var result = t.call(this, node, arg);
    
        if (this.optimize) {
        result = this.optimizeDescriptor(result);
        }
    
        this.cache(result);
    
        this.addInclude(result.include);
    
    
        //invoke end
        if (startCall) {
        this.started = false;
        this.emit('end', node);
        }
    
        return result;
    }
    
    
    /**
     * Try to optimize descriptor -
     * whether expanding components is more profitable than keeping complex version
     */
    GLSL.prototype.optimizeDescriptor = function (descriptor) {
        //try to optimize
    
        if (this.optimize && descriptor.optimize !== false) {
        var complexity = descriptor.components.reduce(function (prev, curr) {
            return prev + curr.complexity||0;
        }, 0);
    
        if (complexity < descriptor.complexity) {
            //expand array, if complexity is ok
            if (descriptor.components && descriptor.components.length > 1) {
            var include = descriptor.components.map(function (c) { return c.include;}, this).filter(Boolean);
            // if it's mat, splice it into 2d array
            if (/mat/.test(descriptor.type)) {
                // get the dim of mat
                var cur_dim = parseInt(descriptor.type[3]);
                var newArr = [];
                var arr = descriptor.components;
                while(arr.length) newArr.push(arr.splice(0,cur_dim));
                descriptor.components = newArr;
    
                for (var id in descriptor.components) {
                descriptor.components[id] = descriptor.components[id].map(e => parseFloat(e));
                }
    
                return Descriptor(JSON.stringify(descriptor.components), {});
            }
            return Descriptor(`[${descriptor.components.join(', ')}]`, extend(descriptor, {
                include: include,
                complexity: complexity
            }));
            }
        }
        }
    
        return descriptor;
    }
    
    
    /**
     * Cache descriptor, return it
     */
    GLSL.prototype.cache = function (node, value) {
        if (this.descriptors.has(node)) return this.descriptors.get(node);
    
        //force descriptor on save
        if (!(value instanceof String)) value = Descriptor(value);
    
        this.descriptors.set(node, value);
    
        return this.descriptors.get(node);
    }
    
    
    
    /**
     * List of transforms for various token types
     */
    GLSL.prototype.transforms = {
        stmtlist: function (node) {
        if (!node.children.length) return Descriptor(null);
    
        var result = node.children.map(this.process, this).join('\n');
    
        return Descriptor(result);
        },
    
        stmt: function (node) {
        var result = node.children.map(this.process, this).join('');
        if (result) result += ';';
    
        return Descriptor(result);
        },
    
        struct: function (node) {
        var structName = node.children[0].data;
    
        //get args nodes
        var args = node.children.slice(1);
        var argTypes = [];
    
        //arg names
        var argsList = flatten(args.map(function (arg) {
            assert.equal(arg.type, 'decl', 'Struct statements should be declarations.')
    
            var decllist = arg.children[arg.children.length - 1];
    
            assert.equal(decllist.type, 'decllist', 'Struct statement declaration has wrong structure.');
    
            return decllist.children.map(function (ident) {
            assert.equal(ident.type, 'ident', 'Struct statement contains something other than just identifiers.');
            return ident.data;
            });
        }));
    
        var argTypes = flatten(args.map(function (arg) {
            var type = arg.children[4].token.data;
            var decllist = arg.children[arg.children.length - 1];
            return decllist.children.map(function () {
            return type;
            });
        }));
    
        var struct = function struct () {
            var args = arguments;
    
            var includes = [];
    
            var fields = argsList.map(function (argName, i) {
            if (args[i]) {
                var initValue = this.process(args[i]);
            }
            else {
                var initValue = this.types[argTypes[i]].call(this, args[i]);
            }
            initValue = this.optimizeDescriptor(initValue);
            includes = includes.concat(initValue.include);
            return Descriptor(`${argName}: ${initValue}`, {
                type: argTypes[i],
                optimize: false,
                components: initValue.components
            });
            }, this);
    
            return Descriptor(`{\n${fields.join(',\n')}\n}`, {
            type: structName,
            optimize: false,
            include: includes.filter(Boolean),
            components: fields
            });
        }.bind(this);
    
        //we should set length to be a compatible type constructor
        Object.defineProperty(struct, 'length', {value: argTypes.length});
    
        //register struct constructor, in a fashion of type constructors
        this.structs[structName] =
            this.types[structName] = struct;
    
        return Descriptor(null);
        },
    
        function: function (node) {
        var result = '';
    
        //if function has no body, that means it is interface for it. We can ignore it.
        if (node.children.length < 3) return Descriptor(null);
    
        //add function name - just render ident node
        assert.equal(node.children[0].type, 'ident', 'Function should have an identifier.');
        var name = this.process(node.children[0]);
    
        //add args
        assert.equal(node.children[1].type, 'functionargs', 'Function should have arguments.');
        var args = this.process(node.children[1]);
    
        //get out type of the function in declaration
        var outType = node.parent.children[4].token.data;
    
    
        //add argument types suffix to a fn
        var argTypesSfx = args.components.map(function (arg) {
            return `${arg.type}`;
        }).join('_');
    
        //if main name is registered - provide type-scoped name of function
        if (this.functions[name] && argTypesSfx) {
            name = `${name}_${argTypesSfx}`;
        }
    
        //add body
        assert.equal(node.children[2].type, 'stmtlist', 'Function should have a body.');
    
        var addForLoop = "";
        var bigLength = 1;
        for (var attrKey in this.attributes){
            bigLength = attrKey + '.length';
            break;
        }
    
        
        if (name == 'main') {
            if (fl == 0)
            {
            addForLoop = `for (var bigI = 0;bigI < ll ;++ bigI) { \n`;
            result += `function ${name} (${args}) {\n`;
            result += addForLoop;
            result += this.process(node.children[2]);
            result = result.replace(/\n/g, '\n\t');
            result += '\n}\n}';
            }
            else
            {
            if (fll == 1)
            {
    
                addForLoop = `var resLength = matrixCalculator.doMatMul (2, mWorld);`;
                result += `function ${name} (${args}) {\n`;
                result += addForLoop;
                result += this.process(node.children[2]);
                result = result.replace(/\n/g, '\n\t');
                result += '\n}';
            }
            else{
                fll = 1;
                addForLoop = `fragTexCoord = vertTexCoord;`;
                result += `function ${name} (${args}) {\n`;
                result += addForLoop;
                result += this.process(node.children[2]);
                result = result.replace(/\n/g, '\n\t');
                result += '\n}';
            }
            
            }
            
        } 
        //create function body
    
    
        //get scope back to the global after fn ended
        this.currentScope = this.scopes[this.currentScope].__parentScope.__name;
    
        //create descriptor
        result = Descriptor(result, {
            type: outType,
            complexity: 999
        });
    
        //register function descriptor
        this.functions[name] = result;
        
        return result;
        },
    
        //function arguments are just shown as a list of ids
        functionargs: function (node) {
        //create new scope - func args are the unique token stream-style detecting a function entry
        var lastScope = this.currentScope;
        var scopeName = (node.parent && node.parent.children[0].data) || 'global';
        this.currentScope = scopeName;
    
        if (!this.scopes[scopeName]) {
            this.scopes[scopeName] = {
            __parentScope: this.scopes[lastScope],
            __name: scopeName
            };
        }
    
        var comps = node.children.map(this.process, this);
    
        return Descriptor(comps.join(', '), {
            components: comps
        });
        },
    
        //declarations are mapped to var a = n, b = m;
        //decl defines it’s inner placeholders rigidly
        decl: function (node) {
        var result;
    
        var typeNode = node.children[4];
        var decllist = node.children[5];
    
        //register structure
        if (node.token.data === 'struct') {
            this.process(typeNode);
            if (!decllist) return Descriptor(null);
        }
    
    
        assert(
            decllist.type === 'decllist' ||
            decllist.type === 'function' ||
            decllist.type === 'struct',
            'Decl structure is malicious');
    
    
        //declare function as hoisting one
        if (decllist.type === 'function') {
            return this.process(decllist);
        }
    
        //case of function args - drop var
        if (node.parent.type === 'functionargs') {
            result = this.process(decllist);
            return result;
        }
        //default type, like variable decl etc
        else {
            result = this.process(decllist);
        }
    
        //prevent empty var declaration
        if (!result || !result.trim()) return Descriptor(null, {
            type: result.type,
            components: result.components,
            optimize: false
        })
    
        return Descriptor(``, {
            type: result.type,
            components: result.components,
            optimize: false
        });
        },
    
    
        //decl list is the same as in js, so just merge identifiers, that's it
        decllist: function (node) {
        var ids = [];
        var lastId = 0;
    
        //get datatype - it is the 4th children of a decl
        var dataType = node.parent.children[4].token.data;
    
        //unwrap anonymous structure type
        if (dataType === 'struct') {
            dataType = node.parent.children[4].children[0].data;
        }
    
        //attribute, uniform, varying etc
        var bindingType = node.parent.children[1].token.data;
    
        //get dimensions - it is from 5th to the len-1 nodes of a decl
        //that’s in case if dimensions are defined first-class like `float[3] c = 1;`
        //result is [] or [3] or [1, 2] or [4, 5, 5], etc.
        //that is OpenGL 3.0 feature
        var dimensions = [];
        for (var i = 5, l = node.parent.children.length - 1; i < l; i++) {
            dimensions.push(parseInt(node.parent.children[i].children[0].children[0].data));
        }
    
        for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i];
    
            if (child.type === 'ident') {
            var ident = this.process(child);
            ident.type = dataType;
            lastId = ids.push(ident);
    
            //save identifier to the scope
            this.variable(ident, {
                type: dataType,
                binding: bindingType,
                node: child,
                dimensions: []
            });
            }
            else if (child.type === 'quantifier') {
            //with non-first-class array like `const float c[3]`
            //dimensions might be undefined, so we have to specify them here
            var dimensions = this.variable(ids[lastId - 1]).dimensions;
            dimensions.push(parseInt(child.children[0].children[0].data));
            this.variable(ids[lastId - 1], {dimensions: dimensions});
            }
            else if (child.type === 'expr') {
            var ident = ids[lastId - 1];
    
            //ignore wrapping literals
            var value = this.process(child);
    
            //save identifier initial value
            this.variable(ident, {value: value});
            }
            else {
            throw Error('Undefined type in decllist: ' + child.type);
            }
        }
    
        var functionargs = node.parent.parent.type === 'functionargs';
    
        //get binding type fn
        var replace = this[bindingType];
    
        var comps = ids.map(function (ident, i) {
            if (functionargs) return ident;
    
            var result = this.variable(ident).value;
    
            //emptyfier, like false or null value
            if (replace !== undefined && !replace) {
            return '';
            }
            //function replacer
            else if (replace instanceof Function) {
            var callResult = replace(ident, this.variable(ident));
    
            //if call result is something sensible - use it
            if (callResult != null) {
                result = callResult;
            }
            }
    
            //if result is false/null/empty string - ignore variable definition
            if (!(result+'') && result !== 0) return ident;
    
            return `${ident} = ${result}`;
        }, this).filter(Boolean);
    
        var res = Descriptor(comps.join(', '), {
            type: dataType
        });
    
        return res;
        },
    
        //placeholders are empty objects - ignore them
        placeholder: function (node) {
        return node.token.data;
        },
    
        //i++, --i etc
        suffix: function (node) {
        var str = this.process(node.children[0]);
        return Descriptor(str + node.data, {type: str.type});
        },
    
        //loops are the same as in js
        forloop: function (node) {
        var init = this.process(node.children[0]);
        var cond = this.process(node.children[1]);
        var iter = this.process(node.children[2]);
        var body = this.process(node.children[3]);
    
        return Descriptor(`for (${init}; ${cond}; ${iter}) {\n${body}\n}`, {
    
        });
        },
    
        whileloop: function (node) {
        var cond = this.process(node.children[0]);
        var body = this.process(node.children[1]);
    
        return Descriptor(`while (${cond}) {\n${body}\n}`, {
        });
        },
    
        operator: function (node) {
        //access operators - expand to arrays
        if (node.data === '.') {
            var identNode = node.children[0];
            var ident = this.process(identNode);
            var type = ident.type;
            var prop = node.children[1].data;
    
            //ab.xyz for example
            if (/^[xyzwstpdrgba]{1,4}$/.test(prop)) {
            return this.unswizzle(node);
            }
    
            return Descriptor(`${ident}.${prop}`, {
            type: type
            });
        }
    
        throw Error('Unknown operator ' + node.data);
    
        return Descriptor(null);
        },
    
        expr: function (node) {
        var result = node.children.map(this.process, this).join('');
    
        return Descriptor(result);
        },
    
        precision: function () {
        return Descriptor(null);
        },
    
        //FIXME: it never creates comments
        comment: function (node) {
        return Descriptor(null)
        },
    
        preprocessor: function (node) {
        return Descriptor('/* ' + node.token.data + ' */')
        },
    
        keyword: function (node) {
        if (node.data === 'true' || node.data === 'false') type = 'bool';
        //FIXME: guess every other keyword is a type, isn’t it?
        else type = node.data;
        return Descriptor(node.data, {
            type: type,
            complexity: 0,
            optimize: false
        });
        },
    
        ident: function (node) {
        //get type of registered var, if possible to find it
        var id = node.token.data;
        var scope = this.scopes[this.currentScope];
    
        //find the closest scope with the id
        while (scope[id] == null) {
            scope = scope.__parentScope;
            if (!scope) {
            // console.warn(`'${id}' is not defined`);
            break;
            }
        }
    
        var str = node.data;
        var flag = 0;
    
        if (this.attributes[str] || this.varyings[str] || str == 'gl_Position'){
            // if 
            if (fl == 0)
            {
            if (str == 'fragNormal')
            {
                if (ffflag == 0)
                {
                if (flag == 0)
                {
                    // flag = 1;
                    // lock = 1;
                    fflag = 1;
                    str = "tt";
                    flag = 1;
                    ffflag  = 1;
                } 
                else{
                    flag = 0;
                }
                }
                }
        
            if (flag == 0)
            {
                ffflag = 0;
                str = str + '[bigI]';
            }
            }
            
    
            
        } 
        if (scope) {
            var type = scope[id].type;
            var res = Descriptor(str, {
            type: type,
            complexity: 0
            });
    
            return res;
        }
    
    
    
        //FIXME: guess type more accurately here
        return Descriptor(str, {
            complexity: 0
        });
        },
    
        return: function (node) {
        var expr = this.process(node.children[0]);
        return Descriptor('return' + (expr.visible ? ' ' + expr : ''), {type: expr.type});
        },
    
        continue: function () {return Descriptor('continue')},
    
        break: function () {return Descriptor('break')},
    
        discard:  function () {return Descriptor('discard()')},
    
        'do-while': function (node) {
        var exprs = this.process(node.children[0]);
        var cond = this.process(node.children[1]);
        return Descriptor(`do {\n${exprs}\n} while (${cond})`, {
        });
        },
    
        binary: function (node) {
        var result = '';
    
        var leftNode = node.children[0];
        var rightNode = node.children[1];
        var left = this.process(leftNode);
        var right = this.process(rightNode);
        var leftType = left.type;
        var rightType = right.type;
        var operator = node.data;
    
        //data access operator
        if (node.data === '[') {
            //for case of glsl array access like float[3]
            if (this.types[node.type]) {
            return Descriptor(`${leftType}[${right}]`, {
                type: this.types[leftType].type,
                complexity: left.complexity + right.complexity + 1
            });
            }
    
            //matrix/etc double access a[1][2]
            if (leftNode.type === 'binary') {
            var matNode = leftNode.children[0];
            var matDesc = this.process(matNode);
            var vecSize = this.types[leftType].length;
            var matType = matDesc.type;
            var matSize = this.types[matType].length;
            var outerRight = this.process(leftNode.children[1]);
    
            var idx = parseFloat(outerRight)|0;
            var offset = parseFloat(right)|0;
    
            //if number - try to access component
            if (!isNaN(idx) && !isNaN(offset)) {
                return Descriptor(matDesc.components[vecSize*idx + offset], {
                type: 'float',
                complexity: matDesc.complexity + right.complexity + 1
                })
            }
    
            //if calc - do slice
            else {
                return Descriptor(`${matDesc}[${outerRight} * ${vecSize} + ${right}]`, {
                type: 'float',
                complexity: matDesc.complexity + outerRight.complexity + right.complexity + 2
                });
            }
            }
    
            //matrix single access a[0] → vec
            if (/mat/.test(leftType)) {
            var size = this.types[leftType].length;
            var start = this.processOperation(right, Descriptor(size), '*');
            var end = this.processOperation(start, Descriptor(size), '+');
            var comps = floatRE.test(start) && floatRE.test(end) ? left.components.slice(start, end) : undefined;
            var res = Descriptor(`${left}.slice(${start}, ${end})`, {
                type: this.types[leftType].type,
                complexity: left.complexity + size,
                components: comps
            });
            res = this.optimizeDescriptor(res);
            return res;
            }
    
            //detect array access
            //FIXME: double array access here will fail
            var leftVar = this.variable(left);
            var type = leftVar && leftVar.dimensions && leftVar.dimensions.length ? leftType : this.types[leftType].type;
    
            //something[N] return as is
            return Descriptor(`${left}[${right}]`, {
            type: type,
            complexity: left.complexity + right.complexity + 1
            });
        }
    
        //default binary operators a × b
        return this.processOperation(left, right, operator);
        },
    
        assign: function (node) {
        var result = '';
        var operator = node.data;
    
        var right = this.process(node.children[1]);
        if (node.children[0].type === 'identifier') {
            var left = Descriptor(node.children[0].data, {
            type: right.type,
            optimize: false,
            complexity: 0
            });
        }
        else {
            var left = this.process(node.children[0]);
        }
    
        var target = left;
        var isSwizzle = node.children[0].type === 'operator' && /^[xyzwstpdrgba]{1,4}$/.test(node.children[0].children[1].data);
    
        //a *= b.x
        if (!isSwizzle && this.types[right.type].length == 1 && this.types[target.type].length == 1) {
            return Descriptor(`${target} ${operator} ${right}`, {
            type: right.type,
            complexity: target.complexity + 1 + right.complexity
            });
        }
    
        //FIXME: left can be a structure property set a.prop
    
        //in cases of setting swizzle - we gotta drop left unswizzle to the right
        if (isSwizzle) {
            var positions = this.swizzlePositions(node.children[0].children[1].data);
            var len = this.types[this.process(node.children[0].children[0]).type].length;
            var ids = Array(len).fill('null');
    
            for (var i = 0; i < positions.length; i++) {
            ids[positions[i]] = i;
            }
    
            target = Descriptor(node.children[0].children[0].data, {
            type: right.type,
            optimize: false
            });
    
            //a.wy *= a.zx →
            //a = [null, 1, null, 0].map(function (idx, i) {
            //	return idx == null ? gl_position[i] : this[idx];
            //}, a.wy * a.zx)
            if (positions.length > 1) {
            //*=
            if (operator.length > 1) {
                var subOperator = operator.slice(0, -1);
                right = this.processOperation(this.unswizzle(node.children[0]), right, subOperator);
                right = this.optimizeDescriptor(right);
            }
    
            var comps = Array(len);
            for (var i = 0; i < len; i++) {
                comps[i] = Descriptor(`${target}[${i}]`, {
                type: 'float',
                complexity: 1
                });
            }
            for (var i = 0; i < positions.length; i++) {
                comps[positions[i]] = right.components[i];
            }
    
            right = Descriptor(
                `[${ids.join(', ')}].map(function (idx, i) { return idx == null ? ${target}[i] : this[idx]; }, ${right})`, {
                    type: right.type,
                    complexity: len*4 + right.complexity,
                    include: right.include,
                    components: comps
                });
            right = this.optimizeDescriptor(right);
    
            return Descriptor(`${target} = ${right}`, {
                type: right.type,
                optimize: false,
                include: right.include
            });
            }
            //a.x *= b → a[0] *= b
            else {
            return Descriptor(`${target}[${positions[0]}] ${operator} ${right}`, {
                type: right.type,
                optimize: false
            });
            }
        }
    
        //`a *= x` → `a = a * x`
        else if (operator.length > 1) {
            var subOperator = operator.slice(0, -1);
            right = this.processOperation(left, right, subOperator);
            right = this.optimizeDescriptor(right);
        }
        //simple assign, =
        if (fflag == 1)
        {
            if (fl == 0)
            {
            if((`${target}`.indexOf("fragTexCoord[bigI]") == -1) && (`${target}`.indexOf("vPosition[bigI]") == -1))
            {
                fflag = 0;
                
                // console.log(`${target}`);
                return Descriptor(`${target} = my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));
                fragNormal[bigI] = [tt[0],tt[1],tt[2]]`, {
                type: right.type,
                complexity: 1
                });
            }
            else{
                return Descriptor(`${target} = ${right}`, {
                type: right.type,
                complexity: 1
                });
            }
            }
            else
            {
            if((`${target}`.indexOf("fragTexCoord") == -1) && (`${target}`.indexOf("vPosition") == -1))
            {
            fflag = 0;
            // console.log(`${target}`);
            return Descriptor(`var resLength = matrixCalculator.doMatMul (2, mWorld);\n
            fragNormal = matrixCalculator.res`, {
                type: right.type,
                complexity: 1
            });
            }
            else{
            return Descriptor(`${target} = ${right}`, {
                type: right.type,
                complexity: 1
            });
            }
            }
    
    
        }
        return Descriptor(`${target} = ${right}`, {
            type: right.type,
            complexity: 1
        });
        // //simple assign, =
        // if (fflag == 1)
        // {
        //   fflag = 0;
        //   return Descriptor(`${target} = my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));
        //   fragNormal[bigI] = [tt[0],tt[1],tt[2]]`, {
        //     type: right.type,
        //     complexity: 1
        //   });
        // }
        // return Descriptor(`${target} = ${right}`, {
        //   type: right.type,
        //   complexity: 1
        // });
        },
    
        ternary: function (node) {
        var cond = this.process(node.children[0]);
        var a = this.process(node.children[1]);
        var b = this.process(node.children[2]);
    
        return Descriptor(`${cond} ? ${a} : ${b}`, {type: a.type});
        },
    
        unary: function (node) {
        var str = this.process(node.children[0]);
    
        var complexity = str.complexity + 1;
    
        //ignore + operator, we dont need to cast data
        if (node.data === '+') {
            //++x
            if (node.children[0].type === 'unary') {
            return Descriptor(node.data + str, {type: str.type, complexity: complexity});
            }
            else if (node.children[0].parent.type === 'unary') {
            return Descriptor(node.data + str, {type: str.type, complexity: complexity});
            }
    
            //+x
            return Descriptor(str);
        }
        return Descriptor(node.data + str, {type: str.type, complexity: complexity});
        },
    
        //gl_Position, gl_FragColor, gl_FragPosition etc
        builtin: function (node) {
        var str = node.data;
        if (fl == 0)
        {
            if (str == 'gl_Position') {
            str = str + '[bigI]';
            }
        }
        else{
            if (str == 'gl_Position') {
            if (str.indexOf("fragTexCoord = vertTexCoord;") != -1)
            {
                // fll = 1;
                str = `fragTexCoord = vertTexCoord; \n  var resLength = matrixCalculator.doMatMul (0, my_multiple( my_multiple( my_multiple( mProj, mView ), mWorld ));\n` + str + ` = matrixCalculator.res;`
            }
            else{
            
            str = `var resLength = matrixCalculator.doMatMul (0, my_multiple( my_multiple( my_multiple( mProj, mView ), mWorld ));\n` + str + ` = matrixCalculator.res;`
            }
        }
        }
        return Descriptor(str, {
            type: this.builtins[node.data],
            complexity: 0
        });
        },
    
        call: function (node) {
        var args = node.children.slice(1);
        var argValues = args.map(this.process, this);
        var argTypes = argValues.map(function (arg) {
            return arg.type
        }, this);
    
        //if first node is an access, like a.b() - treat special access-call case
        if (node.children[0].data === '.') {
            var methodNode = node.children[0].children[1];
            var holderNode = node.children[0].children[0];
            var methodName = this.process(methodNode);
            var holderName = this.process(holderNode);
            var type = holderName.type;
    
            //if length call - return length of a vector
            //vecN.length → N
            if (methodName == 'length' && this.types[type].length > 1) {
            return Descriptor(this.types[type].length, {
                type: 'int',
                complexity: 0
            });
            }
    
            var callName = Descriptor(`${holderName}.${methodName}`, {
            type: methodName.type,
            complexity: holderName.complexity + methodName.complexity
            });
        }
    
        //first node is caller: float(), float[2](), vec4[1][3][4]() etc.
        else {
            var callName = this.process(node.children[0]);
        }
    
        //if first child of the call is array call - expand array
        //FIXME: in cases of anonymously created arrays of arrays, outside of declarations, there might be an issue: `vec4[3][3](0,1)`
        if (node.children[0].data === '[') {
            var dimensions = [];
            var keywordNode = node.children[0];
            while (keywordNode.type != 'keyword') {
            dimensions.push(parseInt(keywordNode.children[1].data));
            keywordNode = keywordNode.children[0];
            }
    
            //if nested type is primitive - expand literals without wrapping
            var value = '';
            if (this.types[callName]) {
            value += args.map(this.process, this).join(', ');
            } else {
            value += callName + '(';
            value += args.map(this.process, this).join(', ');
            value += ')';
            }
    
            //wrap array init expression
            return Descriptor(this.wrapDimensions(argValues, dimensions.reverse()), {
            type: callName.type,
            complexity: 999
            });
        }
    
        //else treat as function/constructor call
        else {
            if (this.debug) {
            if (callName == 'print') {
                var args = argValues.map(function (a) {
                return a+':'+a.type;
                });
                console.log.apply(console, args);
                return Descriptor(null);
            }
    
            if (callName == 'show') {
                console.log.apply(console, argValues.map(function (a) {
                return a;
                }));
                return Descriptor(null);
            }
            }
    
            //struct(), vec2(), float()
            if (this.types[callName]) {
            return this.types[callName].apply(this, args);
            }
    
            //someFn()
            else {
            var type, optimize = true;
    
            //registered fn()
            if (this.functions[callName]) {
                var sfx = argTypes.join('_');
                if (sfx && this.functions[`${callName}_${sfx}`]) {
                type = this.functions[`${callName}_${sfx}`].type;
                callName = Descriptor(`${callName}_${sfx}`, {
                    complexity: callName.complexity
                });
                }
                else if (this.functions[callName]) {
                type = this.functions[callName].type;
                }
            }
    
            //stdlib()
            else if (this.stdlib[callName]) {
                this.addInclude(callName);
    
                //if callname is other than included name - redirect call name
                if (this.stdlib[callName].name) {
                callName = this.stdlib[callName].name;
                }
    
                //add other includes if any
                this.addInclude(this.stdlib[callName].include);
    
                type = this.stdlib[callName].type;
                if (type instanceof Function) type = type.call(this, node);
            }
    
            if (!type) {
                //Unable to guess the type of '${callName}' as it is undefined. Guess it returns the type of the first argument.
                type = this.process(node.children[1]).type;
                optimize = false;
            }
            var res = Descriptor(`${callName}(${argValues.join(', ')})`, {
                type: type || callName.type,
                complexity: 999 /* argValues.reduce(function (prev, curr) {
                                    return curr.complexity+prev;
                                    }, callName.complexity||999) */,
                optimize: optimize
            });
    
            return res;
            }
        }
        },
    
        literal: function (node) {
        //convert 023 → 0o23
        if (/^0[0-9]+/.test(node.data)) {
            node.data = '0o' + node.data.slice(1);
        }
    
        //if special format - parse it as int, else - return unchanged
        var result = /^[0-9][xob]/.test(node.data) ? Number(node.data) : node.data;
    
        //guess type - as far in js any number tends to be a float, give priority to it
        //in order to avoid unnecessary types alignment
        var type;
        if (/true|false/i.test(node.data)) type = 'bool';
        else if (/^[0-9]+$/.test(node.data) > 0) type = 'int';
        else if (floatRE.test(node.data)) type = 'float';
        return Descriptor(result, {type: type, complexity: 0});
        },
    
        //ifs are the same as js
        if: function (node) {
        var cond = this.process(node.children[0]);
        var ifBody = this.process(node.children[1]);
    
        var result = `if (${cond}) {\n${ifBody}\n}`;
    
        if (node.children.length > 1) {
            var elseBody = this.process(node.children[2]);
            if (elseBody.visible) result += ` else {\n${elseBody}\n}`;
        }
    
        return Descriptor(result, {
            type: 'float'
        });
        },
    
        //grouped expression like a = (a - 1);
        group: function (node) {
        //children are like (1, 2, 3) - does not make a big sense
        //the last one is always taken as a result
        var children = node.children.map(this.process, this);
    
        var result = '(' + children.join(', ') + ')';
        var last = children[children.length - 1];
    
        //each component therefore should be wrapped to group as well
        //FIXME: single-multiplocation ops like (x*34.) + 1. are possible to be unwrapped, providing that they are of the most precedence.
        last.components = last.components.map(function (comp) {
            //if component contains no operations (we not smartly guess that each op adds to complexity) - keep component as is.
            if (comp.complexity === 1) return comp;
    
            //otherwise wrap it, as it may contain precedences etc.
            return Descriptor('(' + comp + ')', comp);
        });
    
        return Descriptor(result, {
            type: last.type,
            components: last.components,
            complexity: children.reduce(function (prev, curr) {return prev+curr.complexity||0}, 0)
        });
        }
    
        // switch: function () {
        //FIXME: not implemented in glsl-parser
        // }
    }
    
    /**
     * Return list if ids for swizzle letters
     */
    GLSL.prototype.swizzlePositions = function (prop) {
        var swizzles = 'xyzwstpdrgba';
        var positions = [];
        for (var i = 0, l = prop.length; i < l; i++) {
        var letter = prop[i];
        var position = swizzles.indexOf(letter) % 4;
        positions.push(position);
        }
        return positions;
    };
    
    /**
     * Transform access node to a swizzle construct
     * ab.xyz → [ab[0], ab[1], ab[2]]
     */
    GLSL.prototype.unswizzle = function (node) {
        var identNode = node.children[0];
    
        var ident = this.process(identNode);
        var type = ident.type;
        var prop = node.children[1].data;
    
        var positions = this.swizzlePositions(prop),
        args = positions.map(function (position) {
        //[0, 1].yx → [0, 1]
        // a.yx → [a[1], a[0]]
        return ident.components[position];
        });
        //a.x → a[0]
        if (args.length === 1) {
        if (args[0] == null) console.warn(`Cannot unswizzle '${ident.type}(${ident}).${prop}': ${prop} is outside the type range.`);
        var result = Descriptor(args[0]||'undefined', {
            type: 'float',
            complexity: 1
        });
        return result;
        }
    
        //vec2 a.xy → a
        if (args.length === this.types[type].length && positions.every(function (position, i) { return position === i})) {
        return ident;
        }
    
        var complexity = args.length * ident.complexity;
    
        //a.yz → [1, 2].map(function(x) { return this[x]; }, a)
        if (fl == 0)
        {
        var result = Descriptor(`[${positions.join(', ')}].map(function (x, i) { return this[x]}, ${ident})`, {
            complexity: args.length*2,
            type: `vec${args.length}`,
            components: args
        });
        }
        else
        {
        var result = Descriptor(`matrixCalculator.res`, {
            complexity: args.length*2,
            type: `vec${args.length}`,
            components: args
        });
        }
    
    
    
        result = this.optimizeDescriptor(result);
        // result = "my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));".split("");
        // var aaa = "ab";
        
        return result;
    }
    
    
    /**
     * Get/set variable from/to a [current] scope
     */
    GLSL.prototype.variable = function (ident, data, scope) {
        if (!scope) scope = this.currentScope;
    
        //set/update variable
        if (data) {
        //create variable
        if (!this.scopes[scope][ident]) {
            this.scopes[scope][ident] = {};
        }
    
    
        var variable = extend(this.scopes[scope][ident], data);
    
        //preset default value for a variable, if undefined
        if (data.value == null) {
            if (this.types[variable.type]) {
            //for sampler types pass name as arg
            if (/sampler|image/.test(variable.type)) {
                variable.value = this.types[variable.type].call(this, ident);
            }
            else {
                variable.value = this.types[variable.type].call(this);
            }
            }
    
            //some unknown types
            else {
            variable.value = variable.type + `()`;
            }
    
            variable.value = this.optimizeDescriptor(variable.value);
    
            variable.value = this.wrapDimensions(variable.value, variable.dimensions);
        }
        //if value is passed - we guess that variable knows how to init itself
        //usually it is `call` node rendered
        // else {
        // }
    
    
        //just set an id
        if (variable.id == null) variable.id = ident;
    
        //save scope
        if (variable.scope == null) variable.scope = this.scopes[scope];
    
        //save variable to the collections
        if (variable.binding === 'uniform') {
            this.uniforms[ident] = variable;
        }
        if (variable.binding === 'attribute') {
            this.attributes[ident] = variable;
        }
        if (variable.binding === 'varying') {
            this.varyings[ident] = variable;
        }
    
        return variable;
        }
    
        //get varialbe
        return this.scopes[scope][ident];
    };
    
    
    /**
     * Return value wrapped to the proper number of dimensions
     */
    GLSL.prototype.wrapDimensions = function (value, dimensions) {
        //wrap value to dimensions
        if (dimensions.length) {
        if (!Array.isArray(value)) value = [value];
    
        value = dimensions.reduceRight(function (value, curr) {
            var result = [];
    
            //for each dimension number - wrap result n times
            var prevVal, val;
            for (var i = 0; i < curr; i++) {
            val = value[i] == null ? prevVal : value[i];
            prevVal = val;
            result.push(val);
            }
            return `[${result.join(', ')}]`;
        }, value);
        }
    
        return value;
    };
    
    
    /**
     * Operator renderer
     */
    GLSL.prototype.processOperation = operators;
    
    
    /**
     * Add include, pass optional prop object
     */
    GLSL.prototype.addInclude = function (name, prop) {
        if (!name) return;
    
        if (Array.isArray(name)) {
        return name.forEach(function (i) {
            this.addInclude(i)
        }, this);
        }
    
        if (!(name instanceof String) && typeof name === 'object') {
        for (var subName in name) {
            this.addInclude(subName, name[subName]);
        }
        return;
        }
    
        if (!prop) {
        if (!this.includes[name]) this.includes[name] = true;
        }
        else {
        if (!this.includes[name] || this.includes[name] === true) this.includes[name] = {};
        this.includes[name][prop] = true;
        }
    }
    
    
    /**
     * Get stdlib source for includes
     */
    GLSL.prototype.stringifyStdlib = function (includes) {
        if (!includes) includes = this.includes;
        var methods = [];
    
        for (var meth in includes) {
        //eg vecN
        var result = this.stdlib[meth].toString();
        methods.push(result);
    
        //eg vecN.operation
        if (includes[meth]) {
            for (var prop in includes[meth]) {
            if (!this.stdlib[meth][prop]) {
                console.warn(`Cannot find '${meth}.${prop}' in stdlib`);
                continue;
            }
            methods.push(`${meth}.${prop} = ${this.stdlib[meth][prop].toString()}`);
            }
        }
        }
    
        return methods.join('\n');
    };
    
    
    module.exports = GLSL;
    
    },{"./builtins":2,"./descriptor":3,"./operators":5,"./parse":6,"./stdlib":7,"./types":8,"array-flatten":9,"assert":27,"events":32,"inherits":22,"prepr":24,"xtend/mutable":25}],5:[function(require,module,exports){
    /**
     * Just names for operators
     *
     * @module  glsl-js/lib/operators
     */
    
    var Descriptor = require('./descriptor');
    
    var floatRE = /^-?[0-9]*(?:.[0-9]+)?(?:e-?[0-9]+)?$/i;
    
    var operators = processOperation.operators = {
        '*': 'multiply',
        '+': 'add',
        '-': 'subtract',
        '/': 'divide',
        '%': 'mod',
        '<<': 'lshift',
        '>>': 'rshift',
        '==':'equal',
        '<': 'less',
        '>': 'greater',
    
        //https://gcc.gnu.org/onlinedocs/cpp/C_002b_002b-Named-Operators.html#C_002b_002b-Named-Operators
        '&&': 'and',
        '&=': 'and_eq',
        '&': 'bitand',
        '|': 'bitor',
        // '~': 'compl',
        // '!': 'not',
        '!=': 'not_eq',
        '||': 'or',
        '|=': 'or_eq',
        '^': 'xor',
        '^=': 'xor_eq'
    };
    
    var opsRE = /\*|\+|\-|\/|\%|\<|\=|\>|\&|\||\!|\^|\~/;
    
    
    /**
     * Return rendered operation
     */
    function processOperation (left, right, operator) {
        var self = this;
        var leftType = left.type;
        var rightType = right.type;
        var operatorName = operators[operator];
        switch (operator) {
        case '*':
            // console.log(left,right)
            if ((right)[0] == "[")
            {
            return Descriptor(`my_multiple( ${left}, new Float32Array(${right} ))`,{});
            }
            else{
            return Descriptor(`my_multiple( ${left}, ${right} )`,{});
            }
    
        case '+':
            return Descriptor(`my_add( ${left}, ${right} )`,{});
        case '-':
            return Descriptor(`my_subtract( ${left}, ${right} )`,{});
        case '/':
            return Descriptor(`my_divide( ${left}, ${right} )`,{});
        }
        //1. scalar vs scalar
        if (this.types[leftType].length == 1 && this.types[rightType].length == 1) {
            var a = left, b = right;
    
            var res = Descriptor(calculate(a, b, operator), {
                components: [calculate(a, b, operator)],
                type: leftType,
                complexity: a.complexity + b.complexity + 1
            });
            return res;
        }
    
        //2. scalar vs vec/mat → apply scalar to each component
        if (this.types[leftType].length == 1 || this.types[rightType].length == 1) {
            var outType = this.types[leftType].length == 1 ? rightType : leftType;
            var vec = this.types[leftType].length == 1 ? right : left;
            var scalar = this.types[leftType].length == 1 ? left : right;
            var l = this.types[outType].length;
            if (/mat/.test(outType)) l *= this.types[this.types[outType].type].length;
            var operands = [];
            for (var i = 0; i < l; i++) {
                if (this.types[rightType].length == 1) {
                    var rightOp = right, leftOp = left.components[i];
                }
                else {
                    var rightOp = right.components[i], leftOp = left;
                }
                operands.push(calculate(leftOp, rightOp, operator));
            }
    
            if (scalar.optimize) {
                var calcStr = this.types[rightType].length == 1 ? calculate('_', scalar, operator) :  calculate(scalar, '_', operator);
                return Descriptor(
                    `${vec}.map(function (_) {return ${calcStr};})`, {
                    components: operands,
                    type: outType,
                    complexity: vec.complexity + l * (scalar.complexity + 2) + 1
                });
            }
            else {
                var calcStr = this.types[rightType].length == 1 ? calculate('_', 'this', operator) :  calculate('this', '_', operator);
                return Descriptor(
                    `${vec}.map(function (_) {return ${calcStr};}, ${scalar})`, {
                    components: operands,
                    type: outType,
                    complexity: vec.complexity + l * (scalar.complexity + 2) + 1
                });
            }
        }
    
        //3. vecN vs vecN → component-wise
        if (/vec/.test(leftType) && /vec/.test(rightType)) {
            var outType = this.types[leftType].length == 1 ? rightType : leftType;
            var l = this.types[outType].length;
            var operands = [];
            for (var i = 0; i < l; i++) {
                var leftOp = left.components[i], rightOp = right.components[i];
                operands.push(calculate(leftOp, rightOp, operator));
            }
    
            var include = {};
            include[leftType] = operatorName;
            var res = Descriptor(
                `${leftType}.${operatorName}([], ${left}, ${right})`, {
                components: operands,
                type: outType,
                complexity: left.complexity + right.complexity + l*3 + 1,
                include: include
            });
            return res;
        }
    
        //4. matN +-/ matN → component-wise
        if (/mat/.test(leftType) && /mat/.test(rightType) && operator !== '*') {
            var outType = this.types[leftType].length == 1 ? rightType : leftType;
            var l = this.types[outType].length * this.types[this.types[outType].type].length;
            var operands = [];
            for (var i = 0; i < l; i++) {
                var leftOp = left.components[i], rightOp = right.components[i];
                operands.push(calculate(leftOp, rightOp, operator));
            }
    
            var res = Descriptor(
                `${left}.map(function (x, i, m){ return x ${operator} this[i];}, ${right})`, {
                components: operands,
                complexity: left.complexity + right.complexity + l*3,
                type: outType
            });
            return res;
        }
    
        //5. matNxM * matNxM/vecM → matNxM linear multiplication
        if ((/mat/.test(leftType) || /mat/.test(rightType)) && operator === '*') {
            //vec * mat
            if (/vec/.test(leftType)) {
                var outType = leftType;
                var l = this.types[outType].length;
                var operands = [];
                var leftOp = left;
                var dotComponents = [];
                for (var i = 0; i < l; i++) {
                    var start = l * i;
                    var end = l * i + l;
                    var rightOp = Descriptor(`${right}.slice(${start}, ${end})`, {
                        type: this.types[leftType].type,
                        complexity: right.complexity + l,
                        components: right.components.slice(start, end)
                    });
                    rightOp = this.optimizeDescriptor(rightOp);
    
                    operands.push(`dot(${leftOp}, ${rightOp})`);
                    dotComponents.push(calculate(`this[${calculate('o', i, '+')}]`, `v[${i}]`, '*'))
                }
                this.addInclude('dot');
                var res = Descriptor(
                    `${leftOp}.map(function (x, i, v) { var o = i * ${l}; return ${dotComponents.join(' + ')};}, ${right})`, {
                    components: operands,
                    complexity: left.complexity + right.complexity + l*(l + 3),
                    type: outType
                });
                return res;
            }
    
            //mat * vec
            if (/vec/.test(rightType)) {
                var outType = leftType;
    
                var vec = right;
                var mat = left;
                var l = this.types[outType].length;
    
                var comps = [];
                for (var i = 0; i < l; i++) {
                    var sum = [];
                    for (var j = 0; j < l; j++) {
                        var mc = mat.components[j*l + i];
                        var vc = vec.components[j];
                        sum.push(calculate(mc, vc, '*'));
                    }
                    comps.push(sum.join(' + '));
                }
    
                var res = Descriptor(
                    `${vec}.map(function (x, i, v) { var sum = 0; for (var j = 0; j < ${l}; j++) {sum += ${calculate('this[j*' + l + '+i]', 'v[j]' ,'*')}} return sum; }, ${mat})`,
                    {
                        components: comps,
                        type: outType,
                        complexity: vec.complexity + mat.complexity + l*l*3
                });
                return res;
            }
    
            //mat * mat
            var outType = leftType;
    
            var l = left;
            var r = right;
            var len = this.types[this.types[outType].type].length;
    
            var comps = [];
    
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < len; j++) {
                    var sum = [];
                    for (var o = 0; o < len; o++) {
                        var mc = left.components[len*o + i],
                            nc = right.components[j*len + o];
                        sum.push(calculate(mc, nc, '*'));
                    }
                    comps[j*len + i] = sum.join(' + ');
                }
            }
    
            var res = Descriptor(
                `matrixMult(${l}, ${r})`, {
                components: comps,
                type: outType,
                include: 'matrixMult'
            });
            return res;
        }
    
        throw Error(`Impossible to render ${leftType} ${operator} ${rightType}.`);
    
    
        /**
         * Try to evaluate operation
         *
         * @param {string} left Left operand, stringified js value
         * @param {string} right Right operand, stringified js value
         * @param {string} operator operator to eval
         *
         * @return {string} shorten pre-evaled operator
         */
        function calculate (left, right, operator) {
            var opResult = undefined;
    
            //float op float case
            if (floatRE.test(left) && floatRE.test(right)) {
                opResult = eval(`${left} ${operator} ${right}`);
            }
    
            //handle ridiculous math cases like x + 0, x * 0, x + 1
            if (operator == '+' || operator == '-') {
                //0 + x
                if (left == 0) opResult = right;
    
                //x + 0
                if (right == 0) opResult = left;
            }
    
            else if (operator == '*') {
                //0 * x
                if (left == 0 || right == 0) opResult = 0;
    
                //1 * x
                else if (parseFloat(left) === 1) opResult = right;
    
                //x * 1
                else if (parseFloat(right) === 1) opResult = left;
            }
    
            //FIXME: in case if left or right components contain operations symbols we have to group them. That is groups issue.
    
            if (opResult == null) {
                opResult = `${left} ${operator} ${right}`;
            }
    
            opResult = Descriptor(opResult, {
                complexity: 1 + left.complexity||0 + right.complexity||0,
                optimize: left.optimize !== false && right.optimize !== false
            });
    
            return opResult;
        }
    }
    
    
    module.exports = processOperation;
    
    },{"./descriptor":3}],6:[function(require,module,exports){
    /**
     * A wrapper for glsl-parser
     *
     * @module  glsl-js/lib/parse
     */
    
    var glslParse = require('glsl-parser/direct');
    var tokenize = require('glsl-tokenizer/string');
    
    function parse(arg) {
        //ready AST
        if (typeof arg === 'object' && arg.children) return arg;
    
        //convert string to tokens
        if (typeof arg === 'string') {
            arg = tokenize(arg);
        }
    
        //convert tokens to ast
        if (Array.isArray(arg)) {
            arg = glslParse(arg)
        }
    
        return arg;
    }
    
    module.exports = parse;
    },{"glsl-parser/direct":11,"glsl-tokenizer/string":21}],7:[function(require,module,exports){
    /**
     * OpenGL/WebGL environment methods.
     *
     * @module  glsl-js/lib/stdlib
     */
    
    var operators = require('./operators').operators;
    
    
    /**
     * Types stubs
     */
    function bool (val) {
        return !!val;
    }
    
    function int (val) {
        return val|0;
    }
    
    function float (val) {
        return +val;
    }
    
    function vec2 (x, y) {
        if (x == null) x = 0;
        if (y == null) y = x;
        return [x, y]
    }
    
    function vec3 (x, y, z) {
        if (x == null) x = 0;
        if (y == null) y = x;
        if (z == null) z = y;
        return [x, y, z]
    }
    
    function vec4 (x, y, z, w) {
        if (x == null) x = 0;
        if (y == null) y = x;
        if (z == null) z = y;
        if (w == null) w = z;
        return [x, y, z, w]
    }
    
    function mat2 (x) {
        if (x == null) x = 1;
        if (x.length === 4) return x;
        if (x.length === 2) return [x[0], 0, 0, x[1]];
        return [x, 0, 0, x]
    }
    
    function mat3 (x) {
        if (x == null) x = 1;
        if (x.length === 9) return x;
        if (x.length === 3) return [x[0], 0, 0, 0, x[1], 0, 0, 0, x[2]];
        return [x, 0, 0, 0, x, 0, 0, 0, x]
    }
    
    function mat4 (x) {
        if (x == null) x = 1;
        if (x.length === 16) return x;
        if (x.length === 4) return [x[0], 0, 0, 0, 0, x[1], 0, 0, 0, 0, x[2], 0, 0, 0, 0, x[3]];
        return [x, 0, 0, 0, 0, x, 0, 0, 0, 0, x, 0, 0, 0, 0, x]
    }
    
    
    /**
     * Types operations.
     */
    createOperations(vec2, 2);
    createOperations(vec3, 3);
    createOperations(vec4, 4);
    createOperations(mat2, 4);
    
    function createOperations(obj, len) {
        for (var operator in operators) {
            var comps = [];
            for (var i = 0; i < len; i++) {
                comps.push(`out[${i}] = a[${i}] ${operator} b[${i}]`);
            }
    
            obj[operators[operator]] = new Function ('out', 'a', 'b',
                `${comps.join(';\n')}\nreturn out;`
            );
        }
    }
    
    
    /**
     * Math
     */
    function radians (degrees) {
        if (degrees.length) return degrees.map(radians);
        return degrees * 0.017453292519943295;
    }
    
    function degrees (radians) {
        if (radians.length) return radians.map(degrees);
        return radians * 57.29577951308232;
    }
    
    function sin (angle) {
        if (angle.length) return angle.map(sin);
        return Math.sin(angle);
    }
    
    function cos (angle) {
        if (angle.length) return angle.map(cos);
        return Math.cos(angle);
    }
    
    function tan (angle) {
        if (angle.length) return angle.map(tan);
        return Math.tan(angle);
    }
    
    function asin (x) {
        if (x.length) return x.map(asin);
        return Math.asin(x);
    }
    
    function acos (x) {
        if (x.length) return x.map(acos);
        return Math.acos(x);
    }
    
    function atan (y, x) {
        if (arguments.length > 1) {
            if (y.length) return y.map(function (y, i) {
                return Math.atan2(y, x[i]);
            });
    
            return Math.atan2(y, x);
        }
    
        if (y.length) return y.map(function (y, i) {
            return Math.atan(y)
        });
    
        return Math.atan(y);
    }
    
    function pow (x, y) {
        if (x.length) return x.map(function (x, i) {
            return Math.pow(x, y[i]);
        });
        return Math.pow(x, y);
    }
    
    function exp (x) {
        if (x.length) return x.map(exp);
        return Math.exp(x);
    }
    
    function log (x) {
        if (x.length) return x.map(log);
        return Math.log(x);
    }
    
    var log2 = Math.log2 ? function log2 (x) {
            if (x.length) return x.map(log2);
            return Math.log2(x);
        } : function log2 (x) {
            if (x.length) return x.map(log2);
            return Math.log(x) / Math.LN2;
        };
    
    function exp2 (x) {
        if (x.length) return x.map(exp2);
        return Math.pow(2, x);
    }
    
    function sqrt (x) {
        if (x.length) return x.map(sqrt);
        return Math.sqrt(x);
    }
    
    function inversesqrt (x) {
        if (x.length) return x.map(inversesqrt);
        return 1 / Math.sqrt(x);
    }
    
    function abs (x) {
        if (x.length) return x.map(abs);
        return Math.abs(x);
    }
    
    function floor (x) {
        if (x.length) return x.map(floor);
        return Math.floor(x);
    }
    
    function ceil (x) {
        if (x.length) return x.map(ceil);
        return Math.ceil(x);
    }
    
    var sign = Math.sign ? function sign (x) {
        if (x.length) return x.map(sign);
        return Math.sign(x);
    } : function sign (x) {
        if (x.length) return x.map(sign);
    
        x = +x; // convert to a number
    
        if (x === 0 || isNaN(x)) {
            return x;
        }
    
        return x > 0 ? 1 : -1;
    };
    
    function fract (x) {
        if (x.length) return x.map(fract);
        return x - Math.floor(x);
    }
    
    function mod (x, y) {
        if (x.length) {
            if (y.length) return x.map(function (x, i) {
                return x % y[i];
            });
            return x.map(function (x, i) {
                return x % y;
            });
        }
        return x % y;
    }
    
    function min (x, y) {
        if (x.length) {
            if (y.length) return x.map(function (x, i) {
                return Math.min(x, y[i]);
            });
            return x.map(function (x, i) {
                return Math.min(x, y);
            });
        }
        return Math.min(x, y);
    }
    
    function max (x, y) {
        if (x.length) {
            if (y.length) return x.map(function (x, i) {
                return Math.max(x, y[i]);
            });
            return x.map(function (x, i) {
                return Math.max(x, y);
            });
        }
        return Math.max(x, y);
    }
    
    function clamp (x, min, max) {
        if (x.length) {
            if (min.length) return x.map(function (x, i) {
                return Math.min(Math.max(x, min[i]), max[i]);
            });
            return x.map(function (x, i) {
                return Math.min(Math.max(x, min), max);
            });
        }
    
        return Math.min(Math.max(x, min), max);
    }
    
    function mix (x, y, a) {
        if (x.length) {
            if (a.length) return x.map(function (x, i) {
                return mix(x, y[i], a[i]);
            });
            return x.map(function (x, i) {
                return mix(x, y[i], a);
            });
        }
    
        return x * (1.0 - a) + y * a;
    }
    
    function step (edge, x) {
        if (x.length) {
            if (edge.length) return x.map(function (x, i) {
                return step(edge[i], x);
            });
            return x.map(function (x, i) {
                return step(edge, x);
            });
        }
    
        return x < edge ? 0.0 : 1.0;
    }
    step.type = function (node) {
        return this.process(node.children[1]).type;
    }
    
    function smoothstep (edge0, edge1, x) {
        if (x.length) {
            if (edge0.length) return x.map(function (x, i) {
                return smoothstep(edge0[i], edge1[i], x);
            });
            return x.map(function (x, i) {
                return smoothstep(edge0, edge1, x);
            });
        }
    
        var t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0.0), 1.0);
        return t * t * (3.0 - 2.0 * t);
    }
    
    function length (x) {
        var sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i]*x[i];
        }
        return Math.sqrt(sum);
    }
    length.type = 'float';
    
    function distance(x, y) {
        var sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += (x[i]-y[i])*(x[i]-y[i]);
        }
        return Math.sqrt(sum);
    }
    distance.type = 'float';
    
    function dot (x, y) {
        var sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i]*y[i];
        }
        return sum;
    }
    dot.type = 'float';
    
    function cross (x, y) {
        var x0 = x[0], x1 = x[1], x2 = x[2],
        y0 = y[0], y1 = y[1], y2 = y[2];
        var out = [0, 0, 0];
        out[0] = x1 * y2 - x2 * y1;
        out[1] = x2 * y0 - x0 * y2;
        out[2] = x0 * y1 - x1 * y0;
        return out;
    }
    cross.type = 'vec3';
    
    function normalize (x) {
        var len = 0;
        for (var i = 0; i < x.length; i++) {
            len += x[i]*x[i];
        }
    
        var out = Array(x.length).fill(0);
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] * len;
            }
        }
        return out;
    }
    
    function faceforward (N, I, Nref) {
        if (Nref == null) Nref = N;
    
        var dot = 0;
        for (var i = 0; i < N.length; i++) {
            dot += Nref[i]*I[i];
        }
    
        return dot > 0 ? N.map(function (x) { return -x;}) : N;
    }
    
    function reflect (I, N) {
        var dot = 0;
        for (var i = 0; i < N.length; i++) {
            dot += N[i]*I[i];
        }
    
        var out = Array(N.length);
        for (var i = 0; i < N.length; i++) {
            out[i] = I[i] - 2 * dot * N[i];
        }
    
        return out;
    }
    
    function refract (I, N, eta) {
        var dot = 0;
        for (var i = 0; i < N.length; i++) {
            dot += N[i]*I[i];
        }
    
        var k = 1 - eta*eta*(1 - dot*dot);
    
        var out = Array(N.length).fill(0);
    
        if (k > 0) {
            for (var i = 0; i < N.length; i++) {
                out[i] = eta*I[i] - (eta*dot + Math.sqrt(k)) * N[i];
            }
        }
    
        return out;
    }
    
    
    /**
     * Vector relational functions
     */
    function lessThan (x, y) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] < y[i];
            }
            return out;
        }
        return x < y;
    }
    
    function lessThanEqual (x, y) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] <= y[i];
            }
            return out;
        }
        return x <= y;
    }
    
    function greaterThan (x, y) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] > y[i];
            }
            return out;
        }
        return x > y;
    }
    
    function greaterThanEqual (x, y) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] >= y[i];
            }
            return out;
        }
        return x >= y;
    }
    
    function equal (x, y) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] == y[i];
            }
            return out;
        }
        return x == y;
    }
    
    function notEqual (x, y) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = x[i] != y[i];
            }
            return out;
        }
        return x != y;
    }
    
    function any(x) {
        return x.some(function (x) {return x;});
    }
    
    function all(x) {
        return x.every(function (x) {return x;});
    }
    
    function not (x) {
        if (x.length) {
            var out = Array(x.length);
            for (var i = 0; i < x.length; i++) {
                out[i] = !x[i];
            }
            return out;
        }
        return !x
    }
    
    
    /**
     * Matrices
     */
    function matrixCompMult (x, y) {
        var out = Array(x.length);
        for (var i = 0; i < x.length; i++) {
            out[i] = x[i]*y[i];
        }
        return out;
    }
    
    function outerProduct (c, r) {
        var out = [];
        var l = c.length;
        for (var i = 0; i < c.length; i++) {
            for (var j = 0; j < r.length; j++) {
                out[i*l + j] = c[i]*r[j];
            }
        }
        return out;
    }
    outerProduct.type = function (node) {
        var child1Type = this.process(node.children[1]).type;
        var child2Type = this.process(node.children[2]).type;
        var dim1 = child1Type.slice(-1);
        var dim2 = child2Type.slice(-1);
        return `mat${dim1}x${dim2}`;
    };
    
    function transpose (m) {
        var l = m.length === 16 ? 4 : m.length === 9 ? 3 : 2;
        var out = Array(m.length);
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < l; j++) {
                out[j*l + i] = m[i*l + j];
            }
        }
        return out;
    }
    
    function determinant (m) {
        if (m.length === 4) {
            return m[0]*m[3] - m[1]*m[2];
        }
    
        if (m.length === 9) {
            var a00 = m[0], a01 = m[1], a02 = m[2], a10 = m[3], a11 = m[4], a12 = m[5], a20 = m[6], a21 = m[7], a22 = m[8];
    
            return a00*a11*a22 + a01*a12*a20 + a02*a10*a21 - a02*a11*a20 - a01*a10*a22 - a00*a12*a21;
        }
    
        var a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3],
            a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7],
            a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11],
            a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15],
    
            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32;
    
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    determinant.type = 'float';
    
    //FIXME: optimize the method inclusion, per-matrix
    //FIXME: inverse the dimensions of the input matrix: mat2x3 → mat3x2
    function inverse (a) {
        var l = a.length;
        var out = Array(l);
    
        if (l === 4) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
    
            det = a0 * a3 - a2 * a1;
    
            if (!det) {
                return out;
            }
            det = 1.0 / det;
    
            out[0] =  a3 * det;
            out[1] = -a1 * det;
            out[2] = -a2 * det;
            out[3] =  a0 * det;
    
            return out;
        }
    
        if (l === 9) {
            var a00 = a[0], a01 = a[1], a02 = a[2],
            a10 = a[3], a11 = a[4], a12 = a[5],
            a20 = a[6], a21 = a[7], a22 = a[8],
    
            b01 = a22 * a11 - a12 * a21,
            b11 = -a22 * a10 + a12 * a20,
            b21 = a21 * a10 - a11 * a20,
    
            det = a00 * b01 + a01 * b11 + a02 * b21;
    
            if (!det) {
                return out;
            }
            det = 1.0 / det;
    
            out[0] = b01 * det;
            out[1] = (-a22 * a01 + a02 * a21) * det;
            out[2] = (a12 * a01 - a02 * a11) * det;
            out[3] = b11 * det;
            out[4] = (a22 * a00 - a02 * a20) * det;
            out[5] = (-a12 * a00 + a02 * a10) * det;
            out[6] = b21 * det;
            out[7] = (-a21 * a00 + a01 * a20) * det;
            out[8] = (a11 * a00 - a01 * a10) * det;
            return out;
        }
    
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
    
            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,
    
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    
        if (!det) {
            return out;
        }
        det = 1.0 / det;
    
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    
        return out;
    }
    
    /**
     * mat * mat
     */
    function matrixMult (m, n) {
        var l = m.length === 16 ? 4 : m.length === 9 ? 3 : 2;
        var out = Array(m.length);
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < l; j++) {
                var sum = 0;
                for (var o = 0; o < l; o++) {
                    sum += m[l*o + i] * n[j*l + o];
                }
                out[j*l + i] = sum;
            }
        }
        return out;
    }
    
    
    /**
     * Get texture value.
     * It has the output type of first arg.
     */
    function texture (sampler, coord, bias) {
        var size = textureSize(sampler);
        var x = ((coord[0] % 1) * size[0])|0;
        var y = ((coord[1] % 1) * size[1])|0;
        var idx = y * 4 * size[0] + x * 4;
        if (sampler.data) {
            return sampler.data.slice(idx, idx + 4);
        }
        return sampler.slice(idx, idx + 4);
    }
    texture.include = ['textureSize'];
    texture.type = function (node) {
        var samplerType = this.process(node.children[1]).type;
        return this.types[samplerType].type;
    };
    
    function textureSize (sampler, lod) {
        if (sampler.shape) return [sampler.shape[0], sampler.shape[1]];
        return [sampler.width, sampler.height];
    };
    texture.type = function (node) {
        var samplerType = this.process(node.children[1]).type;
        if (/1D/.test(samplerType)) return 'int';
        if (/2D|Cube/.test(samplerType)) return 'ivec2';
        return 'ivec3';
    };
    
    
    exports.bool = bool;
    exports.int = int;
    exports.uint = int;
    exports.float = float;
    exports.double = float;
    exports.vec2 = vec2;
    exports.vec3 = vec3;
    exports.vec4 = vec4;
    exports.dvec2 = vec2;
    exports.dvec3 = vec3;
    exports.dvec4 = vec4;
    exports.ivec2 = vec2;
    exports.ivec3 = vec3;
    exports.ivec4 = vec4;
    exports.uvec2 = vec2;
    exports.uvec3 = vec3;
    exports.uvec4 = vec4;
    exports.mat2 = mat2;
    exports.mat3 = mat3;
    exports.mat4 = mat4;
    exports.mat3x3 = mat3;
    exports.mat4x4 = mat4;
    
    exports.radians = radians;
    exports.degrees = degrees;
    exports.sin = sin;
    exports.cos = cos;
    exports.tan = tan;
    exports.asin = asin;
    exports.acos = acos;
    exports.atan = atan;
    exports.pow = pow;
    exports.exp = exp;
    exports.log = log;
    exports.log2 = log2;
    exports.exp2 = exp2;
    exports.sqrt = sqrt;
    exports.inversesqrt = inversesqrt;
    exports.abs = abs;
    exports.sign = sign;
    exports.floor = floor;
    exports.ceil = ceil;
    exports.fract = fract;
    exports.mod = mod;
    exports.min = min;
    exports.max = max;
    exports.clamp = clamp;
    exports.mix = mix;
    exports.step = step;
    exports.smoothstep = smoothstep;
    exports.length = length;
    exports.distance = distance;
    exports.dot = dot;
    exports.cross = cross;
    exports.faceforward = faceforward;
    exports.normalize = normalize;
    exports.reflect = reflect;
    exports.refract = refract;
    exports.lessThan = lessThan;
    exports.lessThanEqual = lessThanEqual;
    exports.greaterThan = greaterThan;
    exports.greaterThanEqual = greaterThanEqual;
    exports.equal = equal;
    exports.notEqual = notEqual;
    exports.any = any;
    exports.all = all;
    exports.not = not;
    exports.matrixCompMult = matrixCompMult;
    exports.matrixMult = matrixMult;
    exports.outerProduct = outerProduct;
    exports.transpose = transpose;
    exports.determinant = determinant;
    exports.inverse = inverse;
    
    exports.texture1D =
    exports.texture2D =
    exports.texture3D =
    exports.textureCube =
    exports.shadow1D =
    exports.shadow2D =
    exports.shadow3D =
    exports.texture = texture;
    exports.textureSize = textureSize;
    },{"./operators":5}],8:[function(require,module,exports){
    /**
     * Type constructors.
     *
     * If type is detected in the code, like `float[2](1, 2, 3)` or `vec3(vec2(), 1)`,
     * the according function will be called and type is stringified as return.
     *
     * The arguments are nodes, so that we can detect the type of the args
     * to do like mat2(vec2, vec2) etc.
     *
     * Also types save components access, in optimisation purposes.
     * So after you can call `getComponent(node, idx)` for getting shorten stringified version of a node’s component.
     *
     * OpenGL types @ref https://www.opengl.org/registry/doc/GLSLangSpec.4.40.pdf
     *
     * @module  glsl-js/lib/types
     */
    
    
    var Descriptor = require('./descriptor');
    
    
    var floatRE = /^-?[0-9]*(?:.[0-9]+)?(?:e-?[0-9]+)?$/i;
    
    exports.void = function () {
        return '';
    }
    
    
    function bool (node) {
        if (node == null) return Descriptor(false, {type: 'bool', complexity: 0});
    
        var result;
    
        //node passed
        if (node instanceof String) {
            result = node.components[0];
        }
        else if (typeof node === 'object') {
            result = this.process(node).components[0];
        }
        //string/value passed
        else {
            result = node;
        }
    
        //bool?
        if (result == 'true' || result === true) return Descriptor(true, {type: 'bool', complexity: 0});
        if (result == 'false' || result === false) return Descriptor(false, {type: 'bool', complexity: 0});
    
        //number/string?
        var num = floatRE.exec(result);
    
        //it was string - preserve complex argument
        if (num == null) {
            return Descriptor('!!' + result, {type: 'bool', complexity: result.complexity + 1});
        }
    
        //cast number to bool
        return Descriptor(!!parseFloat(num), {type: 'bool', complexity: 0});
    }
    bool.type = 'bool';
    
    exports.bool = bool;
    
    
    function int (node) {
        if (node == null) return Descriptor(0, {type: 'int', complexity: 0});
    
        if (typeof node !== 'object') return Descriptor(+node|0, {type: 'int', complexity: 0});
    
        var result;
    
        //node?
        if (node instanceof String) {
            result = node.components[0];
        }
        else if (typeof node === 'object') {
            result = this.process(node).components[0];
        }
        //number/string/descriptor?
        else {
            result = node;
        }
    
        //bool?
        if (result == 'true' || result === true) return Descriptor(1, {type: 'int', complexity: 0});
        if (result == 'false' || result === false) return Descriptor(0, {type: 'int', complexity: 0});
    
        var num = floatRE.exec(result);
    
        //it was number
        if (num != null) {
            return Descriptor(+parseFloat(num)|0, {type: 'int', complexity: 0});
        }
    
        //it was string
        return Descriptor(result + '|0', {type: 'int', complexity: result.complexity});
    }
    int.type = 'int';
    
    exports.int =
    exports.uint =
    exports.byte =
    exports.short = int;
    
    
    function float (node) {
        if (node == null) return Descriptor(0, {type: 'float', complexity: 0});
    
        var result;
    
        if (node instanceof String) {
            result = node.components[0];
        }
        else if (typeof node === 'object') {
            result = this.process(node).components[0];
        }
        else {
            result = node;
        }
    
        //bool?
        if (result == 'true' || result === true) return Descriptor(1.0, {type: 'float', complexity: 0});
        if (result == 'false' || result === false) return Descriptor(0.0, {type: 'float', complexity: 0});
    
        var num = floatRE.exec(result);
    
        //it was number
        if (num != null) {
            return Descriptor(+parseFloat(num), {type: 'float', complexity: 0});
        }
        //it was string
        else {
            if (result.type === 'int' || result.type === 'float') {
                return Descriptor(result, {type: 'float', complexity: result.complexity});
            } else {
                return Descriptor('+' + result, {type: 'float', complexity: result.complexity + 1});
            }
        }
    }
    float.type = 'float';
    
    exports.float =
    exports.double = float;
    
    function createVec2 (type, vecType) {
        vec2.type = type;
        function vec2 (x, y) {
            //vec2(*) → vec2(*, *)
            if (x == null) x = 0;
            if (y == null) y = x;
    
            var x = this.process(x);
            var y = this.process(y);
    
            var components = [], map = ``, include;
    
            //map type, if input args are of diff type (unlikely required)
            if (!subType(x.components[0].type, type) || !subType(y.components[0].type, type)) {
                map = `.map(${type})`;
                include = type;
            }
    
            //vec2(vec2) → vec2
            if (this.types[x.type].length === 2) {
                return x;
            }
    
            //vec2(vec3) → vec3.slice(0, 2)
            if (this.types[x.type].length > 2) {
                return Descriptor(`${x}.slice(0, 2)${map}`, {
                    components: x.components.slice(0, 2).map(this.types[type], this),
                    type: vecType,
                    complexity: x.complexity + 2,
                    include: include
                });
            };
    
            //vec2(float) → [0, 0].fill(float)
            if (x === y) {
                return Descriptor(`[0, 0].fill(${x})${map}`, {
                    complexity: x.complexity + 2,
                    components: [x, y].map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            //vec2(simple, simple) → [simple, simple]
            return Descriptor(`[${[x,y].join(', ')}]${map}`, {
                components: [x, y].map(this.types[type], this),
                type: vecType,
                complexity: x.complexity + y.complexity,
                include: include
            });
        }
        return vec2;
    };
    
    function createVec3 (type, vecType) {
        vec3.type = type;
        function vec3 (x, y, z) {
            //vec3(*) → vec3(*, *, *)
            if (x == null) x = 0;
            if (y == null) y = x;
            if (z == null) z = y;
    
            x = this.process(x);
            y = this.process(y);
            z = this.process(z);
    
            var components = [], map = ``, include;
    
            //map type, if input args are of diff type (unlikely required)
            if (!subType(x.components[0].type, type)  || !subType(y.components[0].type, type)  || !subType(z.components[0].type, type) ) {
                map = `.map(${type})`;
                include = type;
            }
    
            //vec3(vec3) → vec3
            if (this.types[x.type].length === 3) {
                return x;
            }
    
            //vec3(vecN) → vecN.slice(0, 3)
            if (this.types[x.type].length > 3) {
                return Descriptor(`${x}.slice(0, 3)${map}`, {
                    components: x.components.slice(0, 3).map(this.types[type], this),
                    type: vecType,
                    complexity: x.complexity + 3 + 3,
                    include: include
                });
            }
    
            //vec3(vec2, *) → vec2.concat(*)
            if (this.types[x.type].length === 2) {
                return Descriptor(`${x}.concat(${this.types.float.call(this, y)})${map}`, {
                    components: x.components.concat(y.components[0]).map(this.types[type], this),
                    type: vecType,
                    complexity: x.complexity + y.complexity + 3,
                    include: include
                });
            }
    
            //vec3(float, vecN) → [float].concat(vecN.slice(0,2));
            if (this.types[y.type].length > 1) {
                return Descriptor(`[${x}].concat(${this.types.vec2.call(this, y, z)})${map}`, {
                    components: [x].concat(y.components.slice(0, 2)).map(this.types[type], this),
                    type: vecType,
                    complexity: x.complexity + y.complexity + z.complexity + 3,
                    include: include
                });
            }
    
            return Descriptor(`[${[x,y,z].join(', ')}]${map}`, {
                components: [x, y, z].map(this.types[type], this),
                type: vecType,
                complexity: x.complexity + y.complexity + z.complexity + 3,
                include: include
            });
        }
        return vec3;
    };
    
    function createVec4 (type, vecType) {
        vec4.type = type;
        function vec4 (x, y, z, w) {
            if (x == null) x = 0;
            if (y == null) y = x;
            if (z == null) z = y;
            if (w == null) w = z;
    
            var x = this.process(x);
            var y = this.process(y);
            var z = this.process(z);
            var w = this.process(w);
    
            var components = [], map = ``, include;
    
            //map type, if input args are of diff type (unlikely required)
            if (!subType(x.components[0].type, type)  || !subType(y.components[0].type, type)  || !subType(z.components[0].type, type)  || !subType(w.components[0].type, type) ) {
                map = `.map(${type})`;
                include = type;
            }
    
            //vec4(matN)
            if (/mat/.test(x.type)) {
                return Descriptor(x, {
                    components: x.components.map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            //vec4(vecN) → vecN.slice(0, 4)
            if (this.types[x.type].length > 4) {
                return Descriptor(`${x}.slice(0, 4)${map}`, {
                    components: x.components.slice(0, 4).map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            //vec4(vec4) → vec4
            if (this.types[x.type].length === 4) {
                return x;
            }
    
            //vec4(vec3, *) → vec3.concat(*)
            if (this.types[x.type].length === 3) {
                return Descriptor(`${x}.concat(${this.types.float.call(this, y)})${map}`, {
                    components: x.components.concat(y.components[0]).map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            //vec4(vec2, *) → vec2.concat(*)
            if (this.types[x.type].length === 2) {
                //vec4(vec2, vecN)
                if (this.types[y.type].length > 1) {
                    return Descriptor(`${x}.concat(${this.types.vec2.call(this, y)})${map}`, {
                        components: x.components.concat(y.components.slice(0, 2)).map(this.types[type], this),
                        type: vecType,
                        include: include
                    });
                }
    
                //vec4(vec2, float, float)
                var res = Descriptor(
                    `${x}.concat(${this.types.vec2.call(this, y, z)})${map}`, {
                        components: x.components.concat(y.components[0], z.components[0]).map(this.types[type], this),
                        type: vecType,
                        include: include
                    });
                return res;
            }
    
            //vec4(float, vec2, *)
            if (this.types[y.type].length === 2) {
                return Descriptor(`[${x}].concat(${this.types.vec2.call(this, y)}, ${this.types.float.call(this, z)})${map}`, {
                    components: x.components.concat(y.components, z.components[0]).map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            //vec4(float, vecN)
            if (this.types[y.type].length > 2) {
                return Descriptor(`[${x}].concat(${this.types.vec3.call(this, y, z, w)})${map}`, {
                    components: x.components.concat(y.components.slice(0, 3)).map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            //vec4(float, float, vecN)
            if (this.types[z.type].length > 1) {
                return Descriptor(`[${x}].concat(${y}, ${this.types.vec2.call(this, z)})${map}`, {
                    components: x.components.concat(y.components[0], z.components.slice(0, 2)).map(this.types[type], this),
                    type: vecType,
                    include: include
                });
            }
    
            return Descriptor(`[${[x,y,z,w].join(', ')}]${map}`, {
                components: [x, y, z, w].map(this.types[type], this),
                type: vecType,
                include: include
            });
        }
        return vec4;
    }
    
    exports.ivec2 = createVec2('int', 'ivec2');
    exports.uvec2 = createVec2('uint', 'uvec2');
    exports.bvec2 = createVec2('bool', 'bvec2');
    exports.dvec2 = createVec2('double', 'dvec2');
    exports.vec2 = createVec2('float', 'vec2');
    
    exports.ivec3 = createVec3('int', 'ivec3');
    exports.uvec3 = createVec3('uint', 'uvec3');
    exports.bvec3 = createVec3('bool', 'bvec3');
    exports.dvec3 = createVec3('double', 'dvec3');
    exports.vec3 = createVec3('float', 'vec3');
    
    exports.ivec4 = createVec4('int', 'ivec4');
    exports.uvec4 = createVec4('uint', 'uvec4');
    exports.bvec4 = createVec4('bool', 'bvec4');
    exports.dvec4 = createVec4('double', 'dvec4');
    exports.vec4 = createVec4('float', 'vec4');
    
    
    /**
     * Matrices are arrays of arrays (vectors)
     */
    function mat2 (v0, v1) {
        //mat2(x0, y0, x1, y1)
        if (arguments.length >= 4) {
            var x0 = this.process(arguments[0]);
            var y0 = this.process(arguments[1]);
            var x1 = this.process(arguments[2]);
            var y1 = this.process(arguments[3]);
            var comps = [x0, y0, x1, y1];
            return Descriptor(
                `[${comps.join(', ')}]`, {
                components: comps,
                type: 'mat2',
                complexity: cmpl(comps)
            });
        };
    
        //ensure at least identity matrix
        if (v0 == null) v0 = 1;
    
        var v0 = this.process(v0);
        var v1 = this.process(v1);
    
        //mat2(float) → identity matrix
        if (this.types[v0.type].length === 1) {
            var res = Descriptor(
                `mat2(${v0})`, {
                components: [
                    v0, 0,
                    0, v0
                ].map(float, this),
                type: 'mat2',
                complexity: v0.complexity * 2 + 2,
                include: 'mat2'
            });
            return res;
        }
    
        //mat2(mat2)
        if (v0.type === 'mat2') {
            return v0;
        }
    
        //mat(vec, vec)
        var comps = v0.components.slice(0,2).concat(v1.components.slice(0,2));
        return Descriptor(`${this.types.vec2.call(this, v0)}.concat(${this.types.vec2.call(this, v1)})`, {
            components: comps.map(float, this),
            complexity: cmpl(comps),
            type: 'mat2'
        });
    }
    mat2.type = 'vec2';
    
    function mat3 (v0, v1, v2) {
        //mat2(x0, y0, z0, x1, y1, z1, x2, y2, z2)
        if (arguments.length >= 9) {
            var x0 = this.process(arguments[0]);
            var y0 = this.process(arguments[1]);
            var z0 = this.process(arguments[2]);
            var x1 = this.process(arguments[3]);
            var y1 = this.process(arguments[4]);
            var z1 = this.process(arguments[5]);
            var x2 = this.process(arguments[6]);
            var y2 = this.process(arguments[7]);
            var z2 = this.process(arguments[8]);
            var comps = [x0, y0, z0, x1, y1, z1, x2, y2, z2];
            return Descriptor(
                `[${comps.join(', ')}]`, {
                components: comps,
                type: 'mat3',
                complexity: cmpl(comps)
            });
        };
    
        //ensure at least identity matrix
        if (v0 == null) v0 = 1;
    
        var v0 = this.process(v0);
        var v1 = this.process(v1);
        var v2 = this.process(v2);
    
        //mat3(float) → identity matrix
        if (this.types[v0.type].length === 1) {
            var res = Descriptor(
                `mat3(${v0})`, {
                components: [
                    v0, 0, 0,
                    0, v0, 0,
                    0, 0, v0
                ].map(float, this),
                type: 'mat3',
                include: 'mat3',
                complexity: v0.complexity * 3 + 6
            });
            return res;
        }
    
        //mat3(mat2)
        if (v0.type === 'mat2') {
            return Descriptor(`[0,1,null, 2,3,null, null,null,-1].map(function (i) {return i == null ? 0 : i < 0 ? -i : this[i]}, ${v0})`, {
                components: [
                    v0.components[0], v0.components[1], 0,
                    v0.components[2], v0.components[3], 0,
                    0, 0, 1
                ].map(float, this),
                type: 'mat3',
                complexity: 9 * 3 + v0.complexity
            });
        }
    
        //mat3(mat3)
        if (v0.type === 'mat3') {
            return v0;
        }
    
        //mat3(mat4)
        if (v0.type === 'mat4') {
            var components = v0.components;
            return Descriptor(`${v0}.filter(function (x, i) { return i % 4 !== 3 && i < 12; })`, {
                components: components.slice(0, 3).concat(components.slice(4, 7), components.slice(8, 11)).map(float, this),
                type: 'mat3',
                complexity: 16 * 3 + v0.complexity
            });
        }
    
        //mat(vec, vec, vec)
        var comps = v0.components.slice(0,3).concat(v1.components.slice(0,3), v2.components.slice(0,3));
        var res = Descriptor(`${this.types.vec3.call(this, v0)}.concat(${this.types.vec3.call(this, v1)}, ${this.types.vec3.call(this, v2)})`, {
            components: comps.map(float, this),
            type: 'mat3',
            complexity: cmpl(comps)
        });
        return res;
    }
    mat3.type = 'vec3';
    
    function mat4 (v0, v1, v2, v3) {
        //mat2(x0, y0, z0, w0, x1, y1, z1, w1, x2, y2, z2, w2, x3, y3, z3, w3)
        if (arguments.length >= 16) {
            var x0 = this.process(arguments[0]);
            var y0 = this.process(arguments[1]);
            var z0 = this.process(arguments[2]);
            var w0 = this.process(arguments[3]);
            var x1 = this.process(arguments[4]);
            var y1 = this.process(arguments[5]);
            var z1 = this.process(arguments[6]);
            var w1 = this.process(arguments[7]);
            var x2 = this.process(arguments[8]);
            var y2 = this.process(arguments[9]);
            var z2 = this.process(arguments[10]);
            var w2 = this.process(arguments[11]);
            var x3 = this.process(arguments[12]);
            var y3 = this.process(arguments[13]);
            var z3 = this.process(arguments[14]);
            var w3 = this.process(arguments[15]);
            var comps = [x0, y0, z0, w0, x1, y1, z1, w1, x2, y2, z2, w2, x3, y3, z3, w3];
    
            return Descriptor(
                `[${comps.join(', ')}]`, {
                components: comps,
                type: 'mat4',
                complexity: cmpl(comps)
            });
        };
    
        //ensure at least identity matrix
        if (v0 == null) v0 = 1;
    
        var v0 = this.process(v0);
        var v1 = this.process(v1);
        var v2 = this.process(v2);
        var v3 = this.process(v3);
    
        //mat(float) → identity matrix
        if (this.types[v0.type].length === 1) {
            var res = Descriptor(
                `mat4(${v0})`, {
                components: [
                    v0, 0, 0, 0,
                    0, v0, 0, 0,
                    0, 0, v0, 0,
                    0, 0, 0, v0
                ].map(float, this),
                type: 'mat4',
                include: 'mat4',
                complexity: v0.complexity * 4 + 12
            });
            return res;
        }
    
        //mat4(mat2)
        if (v0.type === 'mat2') {
            return Descriptor(
                `[0,1,null,null, 2,3,null,null, null,null,-1,null, null,null,null,-1].map(function (i) {return i == null ? 0 : i < 0 ? -i : this[i]}, ${v0})`, {
                components: [
                v0.components[0], v0.components[1], 0, 0,
                v0.components[2], v0.components[3], 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
                ].map(float, this),
                type: 'mat4',
                complexity: 16 * 3 + v0.complexity
            });
        }
    
        //mat4(mat3)
        if (v0.type === 'mat3') {
            var components = v0.components;
            return Descriptor(
                `[0,1,2,null,3,4,5,null,6,7,8,null,null,null,null,-1].map(function (i) {return i == null ? 0 : i < 0 ? -i : this[i]}, ${v0})`, {
                components: components.slice(0, 3).concat(0, components.slice(3, 6), 0, components.slice(6, 9), 0, 0, 0, 0, 1).map(float, this),
                type: 'mat4',
                complexity: 16 * 3 + v0.complexity
            });
        }
    
        //mat(vec, vec, vec, vec)
        var comps = v0.components.slice(0, 4).concat(v1.components.slice(0, 4), v2.components.slice(0, 4), v3.components.slice(0,4));
        return Descriptor(`${this.types.vec4.call(this, v0)}.concat(${this.types.vec4.call(this, v1)}, ${this.types.vec4.call(this, v2)}, ${this.types.vec4.call(this, v3)})`, {
            components: comps.map(float, this),
            type: 'mat4',
            complexity: cmpl(comps)
        });
    }
    mat4.type = 'vec4';
    
    
    //helper to calc complexity of a list of components
    function cmpl (comps) {
        if (Array.isArray(comps)) {
            var sum = 0;
            for (var i = 0; i < comps.length; i++) {
                sum += comps[i].complexity || 0;
            }
            return sum;
        }
        else return comps.complexity;
    }
    
    //helper to calc simple types priority
    //@ref 4.1.10 Implicit Conversions in https://www.opengl.org/registry/doc/GLSLangSpec.4.40.pdf
    function subType (subType, genType) {
        subType += '';
        genType += '';
        if (subType === genType) return true;
        var typePriority = ['double', 'float', 'int', 'uint'];
        var subIdx = typePriority.indexOf(subType);
        var genIdx = typePriority.indexOf(genType);
        if (subIdx >= 0 && genIdx >= 0 && subIdx >= genIdx) return true;
        return false;
    }
    
    
    exports.mat2 = mat2;
    exports.mat3 = mat3;
    exports.mat4 = mat4;
    exports.mat2x2 = mat2;
    exports.mat3x3 = mat3;
    exports.mat4x4 = mat4;
    // exports.mat2x3 = mat2x3;
    // exports.mat2x4 = mat2x4;
    // exports.mat3x2 = mat3x2;
    // exports.mat3x4 = mat3x4;
    // exports.mat4x2 = mat4x2;
    // exports.mat4x3 = mat4x3;
    exports.dmat2 = mat2;
    exports.dmat3 = mat3;
    exports.dmat4 = mat4;
    exports.dmat2x2 = mat2;
    exports.dmat3x3 = mat3;
    exports.dmat4x4 = mat4;
    // exports.dmat2x3 = mat2x3;
    // exports.dmat2x4 = mat2x4;
    // exports.dmat3x2 = mat3x2;
    // exports.dmat3x4 = mat3x4;
    // exports.dmat4x2 = mat4x2;
    // exports.dmat4x3 = mat4x3;
    
    
    
    function createSampler (type, samplerType) {
        sampler.type = type;
        function sampler () {
            var name = arguments[0];
            return Descriptor(null, {
                type: samplerType,
                include: 'texture2D',
                complexity: 999
            });
        }
        return sampler;
    }
    
    
    
    exports.sampler1D = createSampler('vec4', 'sampler1D');
    exports.image1D = createSampler('vec4', 'image1D');
    exports.sampler2D = createSampler('vec4', 'sampler2D');
    exports.image2D = createSampler('vec4', 'image2D');
    exports.sampler3D = createSampler('vec4', 'sampler3D');
    exports.image3D = createSampler('vec4', 'image3D');
    exports.samplerCube = createSampler('vec4', 'samplerCube');
    exports.imageCube = createSampler('vec4', 'imageCube');
    exports.sampler2DRect = createSampler('vec4', 'sampler2DRect');
    exports.image2DRect = createSampler('vec4', 'image2DRect');
    exports.sampler1DArray = createSampler('vec4', 'sampler1DArray');
    exports.image1DArray = createSampler('vec4', 'image1DArray');
    exports.sampler2DArray = createSampler('vec4', 'sampler2DArray');
    exports.image2DArray = createSampler('vec4', 'image2DArray');
    // exports.samplerBuffer =
    // exports.imageBuffer =
    // exports.sampler2DMS =
    // exports.image2DMS =
    // exports.sampler2DMSArray =
    // exports.image2DMSArray =
    // exports.samplerCubeArray =
    // exports.imageCubeArray =
    exports.sampler1DShadow = createSampler('float', 'sampler1DShadow');
    exports.sampler2DShadow = createSampler('float', 'sampler2DShadow');
    exports.sampler2DRectShadow = createSampler('float', 'sampler2DRectShadow');
    exports.sampler1DArrayShadow = createSampler('float', 'sampler1DArrayShadow');
    exports.sampler2DArrayShadow = createSampler('float', 'sampler2DArrayShadow');
    exports.samplerCubeShadow = createSampler('float', 'samplerCubeShadow');
    exports.samplerCubeArrayShadow = createSampler('float', 'samplerCubeArrayShadow');
    exports.isampler1D = createSampler('ivec4', 'isampler1D');
    exports.iimage1D = createSampler('ivec4', 'iimage1D');
    exports.isampler2D = createSampler('ivec4', 'isampler2D');
    exports.iimage2D = createSampler('ivec4', 'iimage2D');
    exports.isampler3D = createSampler('ivec4', 'isampler3D');
    exports.iimage3D = createSampler('ivec4', 'iimage3D');
    exports.isamplerCube = createSampler('ivec4', 'isamplerCube');
    exports.iimageCube = createSampler('ivec4', 'iimageCube');
    // exports.isampler2DRect =
    // exports.iimage2DRect =
    // exports.isampler1DArray =
    // exports.iimage1DArray =
    // exports.isampler2DArray =
    // exports.iimage2DArray =
    // exports.isamplerBuffer =
    // exports.iimageBuffer =
    // exports.isampler2DMS =
    // exports.iimage2DMS =
    // exports.isampler2DMSArray =
    // exports.iimage2DMSArray =
    // exports.isamplerCubeArray =
    // exports.iimageCubeArray =
    // exports.usampler1D = createSampler('uvec4', 'usampler1D');
    // exports.uimage1D = createSampler('uvec4', 'uimage1D');
    // exports.usampler2D = createSampler('uvec4', 'usampler2D');
    // exports.uimage2D = createSampler('uvec4', 'uimage2D');
    // exports.usampler3D = createSampler('uvec4', 'usampler3D');
    // exports.uimage3D = createSampler('uvec4', 'uimage3D');
    // exports.usamplerCube = createSampler('uvec4', 'usamplerCube');
    // exports.uimageCube = createSampler('uvec4', 'uimageCube');
    // exports.usampler2DRect =
    // exports.uimage2DRect =
    // exports.usampler1DArray =
    // exports.uimage1DArray =
    // exports.usampler2DArray =
    // exports.uimage2DArray =
    // exports.usamplerBuffer =
    // exports.uimageBuffer =
    // exports.usampler2DMS =
    // exports.uimage2DMS =
    // exports.usampler2DMSArray =
    // exports.uimage2DMSArray =
    // exports.usamplerCubeArray =
    // exports.uimageCubeArray = sampler;
    // exports.atomic_uint =
    
    },{"./descriptor":3}],9:[function(require,module,exports){
    'use strict'
    
    /**
     * Expose `arrayFlatten`.
     */
    module.exports = flatten
    module.exports.from = flattenFrom
    module.exports.depth = flattenDepth
    module.exports.fromDepth = flattenFromDepth
    
    /**
     * Flatten an array.
     *
     * @param  {Array} array
     * @return {Array}
     */
    function flatten (array) {
        if (!Array.isArray(array)) {
        throw new TypeError('Expected value to be an array')
        }
    
        return flattenFrom(array)
    }
    
    /**
     * Flatten an array-like structure.
     *
     * @param  {Array} array
     * @return {Array}
     */
    function flattenFrom (array) {
        return flattenDown(array, [])
    }
    
    /**
     * Flatten an array-like structure with depth.
     *
     * @param  {Array}  array
     * @param  {number} depth
     * @return {Array}
     */
    function flattenDepth (array, depth) {
        if (!Array.isArray(array)) {
        throw new TypeError('Expected value to be an array')
        }
    
        return flattenFromDepth(array, depth)
    }
    
    /**
     * Flatten an array-like structure with depth.
     *
     * @param  {Array}  array
     * @param  {number} depth
     * @return {Array}
     */
    function flattenFromDepth (array, depth) {
        if (typeof depth !== 'number') {
        throw new TypeError('Expected the depth to be a number')
        }
    
        return flattenDownDepth(array, [], depth)
    }
    
    /**
     * Flatten an array indefinitely.
     *
     * @param  {Array} array
     * @param  {Array} result
     * @return {Array}
     */
    function flattenDown (array, result) {
        for (var i = 0; i < array.length; i++) {
        var value = array[i]
    
        if (Array.isArray(value)) {
            flattenDown(value, result)
        } else {
            result.push(value)
        }
        }
    
        return result
    }
    
    /**
     * Flatten an array with depth.
     *
     * @param  {Array}  array
     * @param  {Array}  result
     * @param  {number} depth
     * @return {Array}
     */
    function flattenDownDepth (array, result, depth) {
        depth--
    
        for (var i = 0; i < array.length; i++) {
        var value = array[i]
    
        if (depth > -1 && Array.isArray(value)) {
            flattenDownDepth(value, result, depth)
        } else {
            result.push(value)
        }
        }
    
        return result
    }
    
    },{}],10:[function(require,module,exports){
    module.exports = balanced;
    function balanced(a, b, str) {
        var r = range(a, b, str);
    
        return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
        };
    }
    
    balanced.range = range;
    function range(a, b, str) {
        var begs, beg, left, right, result;
        var ai = str.indexOf(a);
        var bi = str.indexOf(b, ai + 1);
        var i = ai;
    
        if (ai >= 0 && bi > 0) {
        begs = [];
        left = str.length;
    
        while (i < str.length && i >= 0 && ! result) {
            if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
            result = [ begs.pop(), bi ];
            } else {
            beg = begs.pop();
            if (beg < left) {
                left = beg;
                right = bi;
            }
    
            bi = str.indexOf(b, i + 1);
            }
    
            i = ai < bi && ai >= 0 ? ai : bi;
        }
    
        if (begs.length) {
            result = [ left, right ];
        }
        }
    
        return result;
    }
    
    },{}],11:[function(require,module,exports){
    var parse = require('./lib/index')
    
    module.exports = parseArray
    
    function parseArray(tokens) {
        var parser = parse()
    
        for (var i = 0; i < tokens.length; i++) {
        parser(tokens[i])
        }
    
        return parser(null)
    }
    
    },{"./lib/index":13}],12:[function(require,module,exports){
    var state
        , token
        , tokens
        , idx
    
    var original_symbol = {
        nud: function() { return this.children && this.children.length ? this : fail('unexpected')() }
        , led: fail('missing operator')
    }
    
    var symbol_table = {}
    
    function itself() {
        return this
    }
    
    symbol('(ident)').nud = itself
    symbol('(keyword)').nud = itself
    symbol('(builtin)').nud = itself
    symbol('(literal)').nud = itself
    symbol('(end)')
    
    symbol(':')
    symbol(';')
    symbol(',')
    symbol(')')
    symbol(']')
    symbol('}')
    
    infixr('&&', 30)
    infixr('||', 30)
    infix('|', 43)
    infix('^', 44)
    infix('&', 45)
    infix('==', 46)
    infix('!=', 46)
    infix('<', 47)
    infix('<=', 47)
    infix('>', 47)
    infix('>=', 47)
    infix('>>', 48)
    infix('<<', 48)
    infix('+', 50)
    infix('-', 50)
    infix('*', 60)
    infix('/', 60)
    infix('%', 60)
    infix('?', 20, function(left) {
        this.children = [left, expression(0), (advance(':'), expression(0))]
        this.type = 'ternary'
        return this
    })
    infix('.', 80, function(left) {
        token.type = 'literal'
        state.fake(token)
        this.children = [left, token]
        advance()
        return this
    })
    infix('[', 80, function(left) {
        this.children = [left, expression(0)]
        this.type = 'binary'
        advance(']')
        return this
    })
    infix('(', 80, function(left) {
        this.children = [left]
        this.type = 'call'
    
        if(token.data !== ')') while(1) {
        this.children.push(expression(0))
        if(token.data !== ',') break
        advance(',')
        }
        advance(')')
        return this
    })
    
    prefix('-')
    prefix('+')
    prefix('!')
    prefix('~')
    prefix('defined')
    prefix('(', function() {
        this.type = 'group'
        this.children = [expression(0)]
        advance(')')
        return this 
    })
    prefix('++')
    prefix('--')
    suffix('++')
    suffix('--')
    
    assignment('=')
    assignment('+=')
    assignment('-=')
    assignment('*=')
    assignment('/=')
    assignment('%=')
    assignment('&=')
    assignment('|=')
    assignment('^=')
    assignment('>>=')
    assignment('<<=')
    
    module.exports = function(incoming_state, incoming_tokens) {
        state = incoming_state
        tokens = incoming_tokens
        idx = 0
        var result
    
        if(!tokens.length) return
    
        advance()
        result = expression(0)
        result.parent = state[0]
        emit(result)
    
        if(idx < tokens.length) {
        throw new Error('did not use all tokens')
        }
    
        result.parent.children = [result]
    
        function emit(node) {
        state.unshift(node, false)
        for(var i = 0, len = node.children.length; i < len; ++i) {
            emit(node.children[i])
        }
        state.shift()
        }
    
    }
    
    function symbol(id, binding_power) {
        var sym = symbol_table[id]
        binding_power = binding_power || 0
        if(sym) {
        if(binding_power > sym.lbp) {
            sym.lbp = binding_power
        }
        } else {
        sym = Object.create(original_symbol)
        sym.id = id 
        sym.lbp = binding_power
        symbol_table[id] = sym
        }
        return sym
    }
    
    function expression(rbp) {
        var left, t = token
        advance()
    
        left = t.nud()
        while(rbp < token.lbp) {
        t = token
        advance()
        left = t.led(left)
        }
        return left
    }
    
    function infix(id, bp, led) {
        var sym = symbol(id, bp)
        sym.led = led || function(left) {
        this.children = [left, expression(bp)]
        this.type = 'binary'
        return this
        }
    }
    
    function infixr(id, bp, led) {
        var sym = symbol(id, bp)
        sym.led = led || function(left) {
        this.children = [left, expression(bp - 1)]
        this.type = 'binary'
        return this
        }
        return sym
    }
    
    function prefix(id, nud) {
        var sym = symbol(id)
        sym.nud = nud || function() {
        this.children = [expression(70)]
        this.type = 'unary'
        return this
        }
        return sym
    }
    
    function suffix(id) {
        var sym = symbol(id, 150)
        sym.led = function(left) {
        this.children = [left]
        this.type = 'suffix'
        return this
        }
    }
    
    function assignment(id) {
        return infixr(id, 10, function(left) {
        this.children = [left, expression(9)]
        this.assignment = true
        this.type = 'assign'
        return this
        })
    }
    
    function advance(id) {
        var next
        , value
        , type
        , output
    
        if(id && token.data !== id) {
        return state.unexpected('expected `'+ id + '`, got `'+token.data+'`')
        }
    
        if(idx >= tokens.length) {
        token = symbol_table['(end)']
        return
        }
    
        next = tokens[idx++]
        value = next.data
        type = next.type
    
        if(type === 'ident') {
        output = state.scope.find(value) || state.create_node()
        type = output.type
        } else if(type === 'builtin') {
        output = symbol_table['(builtin)']
        } else if(type === 'keyword') {
        output = symbol_table['(keyword)']
        } else if(type === 'operator') {
        output = symbol_table[value]
        if(!output) {
            return state.unexpected('unknown operator `'+value+'`')
        }
        } else if(type === 'float' || type === 'integer') {
        type = 'literal'
        output = symbol_table['(literal)']
        } else {
        return state.unexpected('unexpected token.')
        }
    
        if(output) {
        if(!output.nud) { output.nud = itself }
        if(!output.children) { output.children = [] }
        }
    
        output = Object.create(output)
        output.token = next
        output.type = type
        if(!output.data) output.data = value
    
        return token = output
    }
    
    function fail(message) {
        return function() { return state.unexpected(message) }
    }
    
    },{}],13:[function(require,module,exports){
    module.exports = parser
    
    var full_parse_expr = require('./expr')
        , Scope = require('./scope')
    
    // singleton!
    var Advance = new Object
    
    var DEBUG = false
    
    var _ = 0
        , IDENT = _++
        , STMT = _++
        , STMTLIST = _++
        , STRUCT = _++
        , FUNCTION = _++
        , FUNCTIONARGS = _++
        , DECL = _++
        , DECLLIST = _++
        , FORLOOP = _++
        , WHILELOOP = _++
        , IF = _++
        , EXPR = _++
        , PRECISION = _++
        , COMMENT = _++
        , PREPROCESSOR = _++
        , KEYWORD = _++
        , KEYWORD_OR_IDENT = _++
        , RETURN = _++
        , BREAK = _++
        , CONTINUE = _++
        , DISCARD = _++
        , DOWHILELOOP = _++
        , PLACEHOLDER = _++
        , QUANTIFIER = _++
    
    var DECL_ALLOW_ASSIGN = 0x1
        , DECL_ALLOW_COMMA = 0x2
        , DECL_REQUIRE_NAME = 0x4
        , DECL_ALLOW_INVARIANT = 0x8
        , DECL_ALLOW_STORAGE = 0x10
        , DECL_NO_INOUT = 0x20
        , DECL_ALLOW_STRUCT = 0x40
        , DECL_STATEMENT = 0xFF
        , DECL_FUNCTION = DECL_STATEMENT & ~(DECL_ALLOW_ASSIGN | DECL_ALLOW_COMMA | DECL_NO_INOUT | DECL_ALLOW_INVARIANT | DECL_REQUIRE_NAME)
        , DECL_STRUCT = DECL_STATEMENT & ~(DECL_ALLOW_ASSIGN | DECL_ALLOW_INVARIANT | DECL_ALLOW_STORAGE | DECL_ALLOW_STRUCT)
    
    var QUALIFIERS = ['const', 'attribute', 'uniform', 'varying']
    
    var NO_ASSIGN_ALLOWED = false
        , NO_COMMA_ALLOWED = false
    
    // map of tokens to stmt types
    var token_map = {
        'block-comment': COMMENT
        , 'line-comment': COMMENT
        , 'preprocessor': PREPROCESSOR
    }
    
    // map of stmt types to human
    var stmt_type = _ = [
        'ident'
        , 'stmt'
        , 'stmtlist'
        , 'struct'
        , 'function'
        , 'functionargs'
        , 'decl'
        , 'decllist'
        , 'forloop'
        , 'whileloop'
        , 'if'
        , 'expr'
        , 'precision'
        , 'comment'
        , 'preprocessor'
        , 'keyword'
        , 'keyword_or_ident'
        , 'return'
        , 'break'
        , 'continue'
        , 'discard'
        , 'do-while'
        , 'placeholder'
        , 'quantifier'
    ]
    
    function parser() {
        var stmtlist = n(STMTLIST)
        , stmt = n(STMT)
        , decllist = n(DECLLIST)
        , precision = n(PRECISION)
        , ident = n(IDENT)
        , keyword_or_ident = n(KEYWORD_OR_IDENT)
        , fn = n(FUNCTION)
        , fnargs = n(FUNCTIONARGS)
        , forstmt = n(FORLOOP)
        , ifstmt = n(IF)
        , whilestmt = n(WHILELOOP)
        , returnstmt = n(RETURN)
        , dowhilestmt = n(DOWHILELOOP)
        , quantifier = n(QUANTIFIER)
    
        var parse_struct
        , parse_precision
        , parse_quantifier
        , parse_forloop
        , parse_if
        , parse_return
        , parse_whileloop
        , parse_dowhileloop
        , parse_function
        , parse_function_args
    
        var check = arguments.length ? [].slice.call(arguments) : []
        , complete = false
        , ended = false
        , depth = 0
        , state = []
        , nodes = []
        , tokens = []
        , whitespace = []
        , errored = false
        , program
        , token
        , node
    
        // setup state
        state.shift = special_shift
        state.unshift = special_unshift
        state.fake = special_fake
        state.unexpected = unexpected
        state.scope = new Scope(state)
        state.create_node = function() {
        var n = mknode(IDENT, token)
        n.parent = reader.program
        return n
        }
    
        setup_stative_parsers()
    
        // setup root node
        node = stmtlist()
        node.expecting = '(eof)'
        node.mode = STMTLIST
        node.token = {type: '(program)', data: '(program)'}
        program = node
    
        reader.program = program
        reader.scope = function(scope) {
        if(arguments.length === 1) {
            state.scope = scope
        }
        return state.scope
        }
    
        state.unshift(node)
        return reader
    
        function reader(data) {
        if (data === null) {
            return end(), program
        }
    
        nodes = []
        write(data)
        return nodes
        }
    
        // stream functions ---------------------------------------------
    
        function write(input) {
        if(input.type === 'whitespace' || input.type === 'line-comment' || input.type === 'block-comment') {
    
            whitespace.push(input)
            return
        }
        tokens.push(input)
        token = token || tokens[0]
    
        if(token && whitespace.length) {
            token.preceding = token.preceding || []
            token.preceding = token.preceding.concat(whitespace)
            whitespace = []
        }
    
        while(take()) switch(state[0].mode) {
            case STMT: parse_stmt(); break
            case STMTLIST: parse_stmtlist(); break
            case DECL: parse_decl(); break
            case DECLLIST: parse_decllist(); break
            case EXPR: parse_expr(); break
            case STRUCT: parse_struct(true, true); break
            case PRECISION: parse_precision(); break
            case IDENT: parse_ident(); break
            case KEYWORD: parse_keyword(); break
            case KEYWORD_OR_IDENT: parse_keyword_or_ident(); break
            case FUNCTION: parse_function(); break
            case FUNCTIONARGS: parse_function_args(); break
            case FORLOOP: parse_forloop(); break
            case WHILELOOP: parse_whileloop(); break
            case DOWHILELOOP: parse_dowhileloop(); break
            case RETURN: parse_return(); break
            case IF: parse_if(); break
            case QUANTIFIER: parse_quantifier(); break
        }
        }
    
        function end(tokens) {
        if(arguments.length) {
            write(tokens)
        }
    
        if(state.length > 1) {
            unexpected('unexpected EOF')
            return
        }
    
        complete = true
        }
    
        function take() {
        if(errored || !state.length)
            return false
    
        return (token = tokens[0])
        }
    
        // ----- state manipulation --------
    
        function special_fake(x) {
        state.unshift(x)
        state.shift()
        }
    
        function special_unshift(_node, add_child) {
        _node.parent = state[0]
    
        var ret = [].unshift.call(this, _node)
    
        add_child = add_child === undefined ? true : add_child
    
        if(DEBUG) {
            var pad = ''
            for(var i = 0, len = this.length - 1; i < len; ++i) {
            pad += ' |'
            }
            console.log(pad, '\\'+_node.type, _node.token.data)
        }
    
        if(add_child && node !== _node) node.children.push(_node)
        node = _node
    
        return ret
        }
    
        function special_shift() {
        var _node = [].shift.call(this)
            , okay = check[this.length]
            , emit = false
    
        if(DEBUG) {
            var pad = ''
            for(var i = 0, len = this.length; i < len; ++i) {
            pad += ' |'
            }
            console.log(pad, '/'+_node.type)
        }
    
        if(check.length) {
            if(typeof check[0] === 'function') {
            emit = check[0](_node)
            } else if(okay !== undefined) {
            emit = okay.test ? okay.test(_node.type) : okay === _node.type
            }
        } else {
            emit = true
        }
    
        if(emit && !errored) nodes.push(_node)
    
        node = _node.parent
        return _node
        }
    
        // parse states ---------------
    
        function parse_stmtlist() {
        // determine the type of the statement
        // and then start parsing
        return stative(
            function() { state.scope.enter(); return Advance }
        , normal_mode
        )()
    
        function normal_mode() {
            if(token.data === state[0].expecting) {
            return state.scope.exit(), state.shift()
            }
            switch(token.type) {
            case 'preprocessor':
                state.fake(adhoc())
                tokens.shift()
            return
            default:
                state.unshift(stmt())
            return
            }
        }
        }
    
        function parse_stmt() {
        if(state[0].brace) {
            if(token.data !== '}') {
            return unexpected('expected `}`, got '+token.data)
            }
            state[0].brace = false
            return tokens.shift(), state.shift()
        }
        switch(token.type) {
            case 'eof': return got_eof()
            case 'keyword':
            switch(token.data) {
                case 'for': return state.unshift(forstmt());
                case 'if': return state.unshift(ifstmt());
                case 'while': return state.unshift(whilestmt());
                case 'do': return state.unshift(dowhilestmt());
                case 'break': return state.fake(mknode(BREAK, token)), tokens.shift()
                case 'continue': return state.fake(mknode(CONTINUE, token)), tokens.shift()
                case 'discard': return state.fake(mknode(DISCARD, token)), tokens.shift()
                case 'return': return state.unshift(returnstmt());
                case 'precision': return state.unshift(precision());
            }
            return state.unshift(decl(DECL_STATEMENT))
            case 'ident':
            var lookup
            if(lookup = state.scope.find(token.data)) {
                if(lookup.parent.type === 'struct') {
                // this is strictly untrue, you could have an
                // expr that starts with a struct constructor.
                //      ... sigh
                return state.unshift(decl(DECL_STATEMENT))
                }
                return state.unshift(expr(';'))
            }
            case 'operator':
            if(token.data === '{') {
                state[0].brace = true
                var n = stmtlist()
                n.expecting = '}'
                return tokens.shift(), state.unshift(n)
            }
            if(token.data === ';') {
                return tokens.shift(), state.shift()
            }
            default: return state.unshift(expr(';'))
        }
        }
    
        function got_eof() {
        if (ended) errored = true
        ended = true
        return state.shift()
        }
    
        function parse_decl() {
        var stmt = state[0]
    
        return stative(
            invariant_or_not,
            storage_or_not,
            parameter_or_not,
            precision_or_not,
            struct_or_type,
            maybe_name,
            maybe_lparen,     // lparen means we're a function
            is_decllist,
            done
        )()
    
        function invariant_or_not() {
            if(token.data === 'invariant') {
            if(stmt.flags & DECL_ALLOW_INVARIANT) {
                state.unshift(keyword())
                return Advance
            } else {
                return unexpected('`invariant` is not allowed here')
            }
            } else {
            state.fake(mknode(PLACEHOLDER, {data: '', position: token.position}))
            return Advance
            }
        }
    
        function storage_or_not() {
            if(is_storage(token)) {
            if(stmt.flags & DECL_ALLOW_STORAGE) {
                state.unshift(keyword())
                return Advance
            } else {
                return unexpected('storage is not allowed here')
            }
            } else {
            state.fake(mknode(PLACEHOLDER, {data: '', position: token.position}))
            return Advance
            }
        }
    
        function parameter_or_not() {
            if(is_parameter(token)) {
            if(!(stmt.flags & DECL_NO_INOUT)) {
                state.unshift(keyword())
                return Advance
            } else {
                return unexpected('parameter is not allowed here')
            }
            } else {
            state.fake(mknode(PLACEHOLDER, {data: '', position: token.position}))
            return Advance
            }
        }
    
        function precision_or_not() {
            if(is_precision(token)) {
            state.unshift(keyword())
            return Advance
            } else {
            state.fake(mknode(PLACEHOLDER, {data: '', position: token.position}))
            return Advance
            }
        }
    
        function struct_or_type() {
            if(token.data === 'struct') {
            if(!(stmt.flags & DECL_ALLOW_STRUCT)) {
                return unexpected('cannot nest structs')
            }
            state.unshift(struct())
            return Advance
            }
    
            if(token.type === 'keyword') {
            state.unshift(keyword())
            return Advance
            }
    
            var lookup = state.scope.find(token.data)
    
            if(lookup) {
            state.fake(Object.create(lookup))
            tokens.shift()
            return Advance
            }
            return unexpected('expected user defined type, struct or keyword, got '+token.data)
        }
    
        function maybe_name() {
            if(token.data === ',' && !(stmt.flags & DECL_ALLOW_COMMA)) {
            return state.shift()
            }
    
            if(token.data === '[') {
            // oh lord.
            state.unshift(quantifier())
            return
            }
    
            if(token.data === ')') return state.shift()
    
            if(token.data === ';') {
            return stmt.stage + 3
            }
    
            if(token.type !== 'ident' && token.type !== 'builtin') {
            return unexpected('expected identifier, got '+token.data)
            }
    
            stmt.collected_name = tokens.shift()
            return Advance
        }
    
        function maybe_lparen() {
            if(token.data === '(') {
            tokens.unshift(stmt.collected_name)
            delete stmt.collected_name
            state.unshift(fn())
            return stmt.stage + 2
            }
            return Advance
        }
    
        function is_decllist() {
            tokens.unshift(stmt.collected_name)
            delete stmt.collected_name
            state.unshift(decllist())
            return Advance
        }
    
        function done() {
            return state.shift()
        }
        }
    
        function parse_decllist() {
        // grab ident
    
        if(token.type === 'ident') {
            var name = token.data
            state.unshift(ident())
            state.scope.define(name)
            return
        }
    
        if(token.type === 'operator') {
    
            if(token.data === ',') {
            // multi-decl!
            if(!(state[1].flags & DECL_ALLOW_COMMA)) {
                return state.shift()
            }
    
            return tokens.shift()
            } else if(token.data === '=') {
            if(!(state[1].flags & DECL_ALLOW_ASSIGN)) return unexpected('`=` is not allowed here.')
    
            tokens.shift()
    
            state.unshift(expr(',', ';'))
            return
            } else if(token.data === '[') {
            state.unshift(quantifier())
            return
            }
        }
        return state.shift()
        }
    
        function parse_keyword_or_ident() {
        if(token.type === 'keyword') {
            state[0].type = 'keyword'
            state[0].mode = KEYWORD
            return
        }
    
        if(token.type === 'ident') {
            state[0].type = 'ident'
            state[0].mode = IDENT
            return
        }
    
        return unexpected('expected keyword or user-defined name, got '+token.data)
        }
    
        function parse_keyword() {
        if(token.type !== 'keyword') {
            return unexpected('expected keyword, got '+token.data)
        }
    
        return state.shift(), tokens.shift()
        }
    
        function parse_ident() {
        if(token.type !== 'ident') {
            return unexpected('expected user-defined name, got '+token.data)
        }
    
        state[0].data = token.data
        return state.shift(), tokens.shift()
        }
    
    
        function parse_expr() {
        var expecting = state[0].expecting
    
        state[0].tokens = state[0].tokens || []
    
        if(state[0].parenlevel === undefined) {
            state[0].parenlevel = 0
            state[0].bracelevel = 0
        }
        if(state[0].parenlevel < 1 && expecting.indexOf(token.data) > -1) {
            return parseexpr(state[0].tokens)
        }
        if(token.data === '(') {
            ++state[0].parenlevel
        } else if(token.data === ')') {
            --state[0].parenlevel
        }
    
        switch(token.data) {
            case '{': ++state[0].bracelevel; break
            case '}': --state[0].bracelevel; break
            case '(': ++state[0].parenlevel; break
            case ')': --state[0].parenlevel; break
        }
    
        if(state[0].parenlevel < 0) return unexpected('unexpected `)`')
        if(state[0].bracelevel < 0) return unexpected('unexpected `}`')
    
        state[0].tokens.push(tokens.shift())
        return
    
        function parseexpr(tokens) {
            try {
            full_parse_expr(state, tokens)
            } catch(err) {
            errored = true
            throw err
            }
    
            return state.shift()
        }
        }
    
        // node types ---------------
    
        function n(type) {
        // this is a function factory that suffices for most kinds of expressions and statements
        return function() {
            return mknode(type, token)
        }
        }
    
        function adhoc() {
        return mknode(token_map[token.type], token, node)
        }
    
        function decl(flags) {
        var _ = mknode(DECL, token, node)
        _.flags = flags
    
        return _
        }
    
        function struct(allow_assign, allow_comma) {
        var _ = mknode(STRUCT, token, node)
        _.allow_assign = allow_assign === undefined ? true : allow_assign
        _.allow_comma = allow_comma === undefined ? true : allow_comma
        return _
        }
    
        function expr() {
        var n = mknode(EXPR, token, node)
    
        n.expecting = [].slice.call(arguments)
        return n
        }
    
        function keyword(default_value) {
        var t = token
        if(default_value) {
            t = {'type': '(implied)', data: '(default)', position: t.position}
        }
        return mknode(KEYWORD, t, node)
        }
    
        // utils ----------------------------
    
        function unexpected(str) {
        errored = true
        throw new Error(
            (str || 'unexpected '+state) +
            ' at line '+state[0].token.line
        )
        }
    
        function assert(type, data) {
        return 1,
            assert_null_string_or_array(type, token.type) &&
            assert_null_string_or_array(data, token.data)
        }
    
        function assert_null_string_or_array(x, y) {
        switch(typeof x) {
            case 'string': if(y !== x) {
            unexpected('expected `'+x+'`, got '+y+'\n'+token.data);
            } return !errored
    
            case 'object': if(x && x.indexOf(y) === -1) {
            unexpected('expected one of `'+x.join('`, `')+'`, got '+y);
            } return !errored
        }
        return true
        }
    
        // stative ----------------------------
    
        function stative() {
        var steps = [].slice.call(arguments)
            , step
            , result
    
        return function() {
            var current = state[0]
    
            current.stage || (current.stage = 0)
    
            step = steps[current.stage]
            if(!step) return unexpected('parser in undefined state!')
    
            result = step()
    
            if(result === Advance) return ++current.stage
            if(result === undefined) return
            current.stage = result
        }
        }
    
        function advance(op, t) {
        t = t || 'operator'
        return function() {
            if(!assert(t, op)) return
    
            var last = tokens.shift()
            , children = state[0].children
            , last_node = children[children.length - 1]
    
            if(last_node && last_node.token && last.preceding) {
            last_node.token.succeeding = last_node.token.succeeding || []
            last_node.token.succeeding = last_node.token.succeeding.concat(last.preceding)
            }
            return Advance
        }
        }
    
        function advance_expr(until) {
        return function() {
            state.unshift(expr(until))
            return Advance
        }
        }
    
        function advance_ident(declare) {
        return declare ? function() {
            var name = token.data
            return assert('ident') && (state.unshift(ident()), state.scope.define(name), Advance)
        } :  function() {
            if(!assert('ident')) return
    
            var s = Object.create(state.scope.find(token.data))
            s.token = token
    
            return (tokens.shift(), Advance)
        }
        }
    
        function advance_stmtlist() {
        return function() {
            var n = stmtlist()
            n.expecting = '}'
            return state.unshift(n), Advance
        }
        }
    
        function maybe_stmtlist(skip) {
        return function() {
            var current = state[0].stage
            if(token.data !== '{') { return state.unshift(stmt()), current + skip }
            return tokens.shift(), Advance
        }
        }
    
        function popstmt() {
        return function() { return state.shift(), state.shift() }
        }
    
    
        function setup_stative_parsers() {
    
        // could also be
        // struct { } decllist
        parse_struct =
            stative(
                advance('struct', 'keyword')
            , function() {
                if(token.data === '{') {
                    state.fake(mknode(IDENT, {data:'', position: token.position, type:'ident'}))
                    return Advance
                }
    
                return advance_ident(true)()
                }
            , function() { state.scope.enter(); return Advance }
            , advance('{')
            , function() {
                if(token.type === 'preprocessor') {
                    state.fake(adhoc())
                    tokens.shift()
                    return
                }
                if(token.data === '}') {
                    state.scope.exit()
                    tokens.shift()
                    return state.shift()
                }
                if(token.data === ';') { tokens.shift(); return }
                state.unshift(decl(DECL_STRUCT))
                }
            )
    
        parse_precision =
            stative(
                function() { return tokens.shift(), Advance }
            , function() {
                return assert(
                'keyword', ['lowp', 'mediump', 'highp']
                ) && (state.unshift(keyword()), Advance)
                }
            , function() { return (state.unshift(keyword()), Advance) }
            , function() { return state.shift() }
            )
    
        parse_quantifier =
            stative(
                advance('[')
            , advance_expr(']')
            , advance(']')
            , function() { return state.shift() }
            )
    
        parse_forloop =
            stative(
                advance('for', 'keyword')
            , advance('(')
            , function() {
                var lookup
                if(token.type === 'ident') {
                    if(!(lookup = state.scope.find(token.data))) {
                    lookup = state.create_node()
                    }
    
                    if(lookup.parent.type === 'struct') {
                    return state.unshift(decl(DECL_STATEMENT)), Advance
                    }
                } else if(token.type === 'builtin' || token.type === 'keyword') {
                    return state.unshift(decl(DECL_STATEMENT)), Advance
                }
                return advance_expr(';')()
                }
            , advance(';')
            , advance_expr(';')
            , advance(';')
            , advance_expr(')')
            , advance(')')
            , maybe_stmtlist(3)
            , advance_stmtlist()
            , advance('}')
            , popstmt()
            )
    
        parse_if =
            stative(
                advance('if', 'keyword')
            , advance('(')
            , advance_expr(')')
            , advance(')')
            , maybe_stmtlist(3)
            , advance_stmtlist()
            , advance('}')
            , function() {
                if(token.data === 'else') {
                    return tokens.shift(), state.unshift(stmt()), Advance
                }
                return popstmt()()
                }
            , popstmt()
            )
    
        parse_return =
            stative(
                advance('return', 'keyword')
            , function() {
                if(token.data === ';') return Advance
                return state.unshift(expr(';')), Advance
                }
            , function() { tokens.shift(), popstmt()() }
            )
    
        parse_whileloop =
            stative(
                advance('while', 'keyword')
            , advance('(')
            , advance_expr(')')
            , advance(')')
            , maybe_stmtlist(3)
            , advance_stmtlist()
            , advance('}')
            , popstmt()
            )
    
        parse_dowhileloop =
            stative(
            advance('do', 'keyword')
            , maybe_stmtlist(3)
            , advance_stmtlist()
            , advance('}')
            , advance('while', 'keyword')
            , advance('(')
            , advance_expr(')')
            , advance(')')
            , popstmt()
            )
    
        parse_function =
            stative(
            function() {
                for(var i = 1, len = state.length; i < len; ++i) if(state[i].mode === FUNCTION) {
                return unexpected('function definition is not allowed within another function')
                }
    
                return Advance
            }
            , function() {
                if(!assert("ident")) return
    
                var name = token.data
                , lookup = state.scope.find(name)
    
                state.unshift(ident())
                state.scope.define(name)
    
                state.scope.enter(lookup ? lookup.scope : null)
                return Advance
            }
            , advance('(')
            , function() { return state.unshift(fnargs()), Advance }
            , advance(')')
            , function() {
                // forward decl
                if(token.data === ';') {
                return state.scope.exit(), state.shift(), state.shift()
                }
                return Advance
            }
            , advance('{')
            , advance_stmtlist()
            , advance('}')
            , function() { state.scope.exit(); return Advance }
            , function() { return state.shift(), state.shift(), state.shift() }
            )
    
        parse_function_args =
            stative(
            function() {
                if(token.data === 'void') { state.fake(keyword()); tokens.shift(); return Advance }
                if(token.data === ')') { state.shift(); return }
                if(token.data === 'struct') {
                state.unshift(struct(NO_ASSIGN_ALLOWED, NO_COMMA_ALLOWED))
                return Advance
                }
                state.unshift(decl(DECL_FUNCTION))
                return Advance
            }
            , function() {
                if(token.data === ',') { tokens.shift(); return 0 }
                if(token.data === ')') { state.shift(); return }
                unexpected('expected one of `,` or `)`, got '+token.data)
            }
            )
        }
    }
    
    function mknode(mode, sourcetoken) {
        return {
            mode: mode
        , token: sourcetoken
        , children: []
        , type: stmt_type[mode]
        , id: (Math.random() * 0xFFFFFFFF).toString(16)
        }
    }
    
    function is_storage(token) {
        return token.data === 'const' ||
                token.data === 'attribute' ||
                token.data === 'uniform' ||
                token.data === 'varying'
    }
    
    function is_parameter(token) {
        return token.data === 'in' ||
                token.data === 'inout' ||
                token.data === 'out'
    }
    
    function is_precision(token) {
        return token.data === 'highp' ||
                token.data === 'mediump' ||
                token.data === 'lowp'
    }
    
    },{"./expr":12,"./scope":14}],14:[function(require,module,exports){
    module.exports = scope
    
    function scope(state) {
        if(this.constructor !== scope)
        return new scope(state)
    
        this.state = state
        this.scopes = []
        this.current = null
    }
    
    var cons = scope
        , proto = cons.prototype
    
    proto.enter = function(s) {
        this.scopes.push(
        this.current = this.state[0].scope = s || {}
        )
    }
    
    proto.exit = function() {
        this.scopes.pop()
        this.current = this.scopes[this.scopes.length - 1]
    }
    
    proto.define = function(str) {
        this.current[str] = this.state[0]
    }
    
    proto.find = function(name, fail) {
        for(var i = this.scopes.length - 1; i > -1; --i) {
        if(this.scopes[i].hasOwnProperty(name)) {
            return this.scopes[i][name]
        }
        }
    
        return null
    }
    
    },{}],15:[function(require,module,exports){
    module.exports = tokenize
    
    var literals100 = require('./lib/literals')
        , operators = require('./lib/operators')
        , builtins100 = require('./lib/builtins')
        , literals300es = require('./lib/literals-300es')
        , builtins300es = require('./lib/builtins-300es')
    
    var NORMAL = 999          // <-- never emitted
        , TOKEN = 9999          // <-- never emitted
        , BLOCK_COMMENT = 0
        , LINE_COMMENT = 1
        , PREPROCESSOR = 2
        , OPERATOR = 3
        , INTEGER = 4
        , FLOAT = 5
        , IDENT = 6
        , BUILTIN = 7
        , KEYWORD = 8
        , WHITESPACE = 9
        , EOF = 10
        , HEX = 11
    
    var map = [
        'block-comment'
        , 'line-comment'
        , 'preprocessor'
        , 'operator'
        , 'integer'
        , 'float'
        , 'ident'
        , 'builtin'
        , 'keyword'
        , 'whitespace'
        , 'eof'
        , 'integer'
    ]
    
    function tokenize(opt) {
        var i = 0
        , total = 0
        , mode = NORMAL
        , c
        , last
        , content = []
        , tokens = []
        , token_idx = 0
        , token_offs = 0
        , line = 1
        , col = 0
        , start = 0
        , isnum = false
        , isoperator = false
        , input = ''
        , len
    
        opt = opt || {}
        var allBuiltins = builtins100
        var allLiterals = literals100
        if (opt.version === '300 es') {
        allBuiltins = builtins300es
        allLiterals = literals300es
        }
    
        return function(data) {
        tokens = []
        if (data !== null) return write(data.replace ? data.replace(/\r\n/g, '\n') : data)
        return end()
        }
    
        function token(data) {
        if (data.length) {
            tokens.push({
            type: map[mode]
            , data: data
            , position: start
            , line: line
            , column: col
            })
        }
        }
    
        function write(chunk) {
        i = 0
        input += chunk
        len = input.length
    
        var last
    
        while(c = input[i], i < len) {
            last = i
    
            switch(mode) {
            case BLOCK_COMMENT: i = block_comment(); break
            case LINE_COMMENT: i = line_comment(); break
            case PREPROCESSOR: i = preprocessor(); break
            case OPERATOR: i = operator(); break
            case INTEGER: i = integer(); break
            case HEX: i = hex(); break
            case FLOAT: i = decimal(); break
            case TOKEN: i = readtoken(); break
            case WHITESPACE: i = whitespace(); break
            case NORMAL: i = normal(); break
            }
    
            if(last !== i) {
            switch(input[last]) {
                case '\n': col = 0; ++line; break
                default: ++col; break
            }
            }
        }
    
        total += i
        input = input.slice(i)
        return tokens
        }
    
        function end(chunk) {
        if(content.length) {
            token(content.join(''))
        }
    
        mode = EOF
        token('(eof)')
        return tokens
        }
    
        function normal() {
        content = content.length ? [] : content
    
        if(last === '/' && c === '*') {
            start = total + i - 1
            mode = BLOCK_COMMENT
            last = c
            return i + 1
        }
    
        if(last === '/' && c === '/') {
            start = total + i - 1
            mode = LINE_COMMENT
            last = c
            return i + 1
        }
    
        if(c === '#') {
            mode = PREPROCESSOR
            start = total + i
            return i
        }
    
        if(/\s/.test(c)) {
            mode = WHITESPACE
            start = total + i
            return i
        }
    
        isnum = /\d/.test(c)
        isoperator = /[^\w_]/.test(c)
    
        start = total + i
        mode = isnum ? INTEGER : isoperator ? OPERATOR : TOKEN
        return i
        }
    
        function whitespace() {
        if(/[^\s]/g.test(c)) {
            token(content.join(''))
            mode = NORMAL
            return i
        }
        content.push(c)
        last = c
        return i + 1
        }
    
        function preprocessor() {
        if((c === '\r' || c === '\n') && last !== '\\') {
            token(content.join(''))
            mode = NORMAL
            return i
        }
        content.push(c)
        last = c
        return i + 1
        }
    
        function line_comment() {
        return preprocessor()
        }
    
        function block_comment() {
        if(c === '/' && last === '*') {
            content.push(c)
            token(content.join(''))
            mode = NORMAL
            return i + 1
        }
    
        content.push(c)
        last = c
        return i + 1
        }
    
        function operator() {
        if(last === '.' && /\d/.test(c)) {
            mode = FLOAT
            return i
        }
    
        if(last === '/' && c === '*') {
            mode = BLOCK_COMMENT
            return i
        }
    
        if(last === '/' && c === '/') {
            mode = LINE_COMMENT
            return i
        }
    
        if(c === '.' && content.length) {
            while(determine_operator(content));
    
            mode = FLOAT
            return i
        }
    
        if(c === ';' || c === ')' || c === '(') {
            if(content.length) while(determine_operator(content));
            token(c)
            mode = NORMAL
            return i + 1
        }
    
        var is_composite_operator = content.length === 2 && c !== '='
        if(/[\w_\d\s]/.test(c) || is_composite_operator) {
            while(determine_operator(content));
            mode = NORMAL
            return i
        }
    
        content.push(c)
        last = c
        return i + 1
        }
    
        function determine_operator(buf) {
        var j = 0
            , idx
            , res
    
        do {
            idx = operators.indexOf(buf.slice(0, buf.length + j).join(''))
            res = operators[idx]
    
            if(idx === -1) {
            if(j-- + buf.length > 0) continue
            res = buf.slice(0, 1).join('')
            }
    
            token(res)
    
            start += res.length
            content = content.slice(res.length)
            return content.length
        } while(1)
        }
    
        function hex() {
        if(/[^a-fA-F0-9]/.test(c)) {
            token(content.join(''))
            mode = NORMAL
            return i
        }
    
        content.push(c)
        last = c
        return i + 1
        }
    
        function integer() {
        if(c === '.') {
            content.push(c)
            mode = FLOAT
            last = c
            return i + 1
        }
    
        if(/[eE]/.test(c)) {
            content.push(c)
            mode = FLOAT
            last = c
            return i + 1
        }
    
        if(c === 'x' && content.length === 1 && content[0] === '0') {
            mode = HEX
            content.push(c)
            last = c
            return i + 1
        }
    
        if(/[^\d]/.test(c)) {
            token(content.join(''))
            mode = NORMAL
            return i
        }
    
        content.push(c)
        last = c
        return i + 1
        }
    
        function decimal() {
        if(c === 'f') {
            content.push(c)
            last = c
            i += 1
        }
    
        if(/[eE]/.test(c)) {
            content.push(c)
            last = c
            return i + 1
        }
    
        if (c === '-' && /[eE]/.test(last)) {
            content.push(c)
            last = c
            return i + 1
        }
    
        if(/[^\d]/.test(c)) {
            token(content.join(''))
            mode = NORMAL
            return i
        }
    
        content.push(c)
        last = c
        return i + 1
        }
    
        function readtoken() {
        if(/[^\d\w_]/.test(c)) {
            var contentstr = content.join('')
            if(allLiterals.indexOf(contentstr) > -1) {
            mode = KEYWORD
            } else if(allBuiltins.indexOf(contentstr) > -1) {
            mode = BUILTIN
            } else {
            mode = IDENT
            }
            token(content.join(''))
            mode = NORMAL
            return i
        }
        content.push(c)
        last = c
        return i + 1
        }
    }
    
    },{"./lib/builtins":17,"./lib/builtins-300es":16,"./lib/literals":19,"./lib/literals-300es":18,"./lib/operators":20}],16:[function(require,module,exports){
    // 300es builtins/reserved words that were previously valid in v100
    var v100 = require('./builtins')
    
    // The texture2D|Cube functions have been removed
    // And the gl_ features are updated
    v100 = v100.slice().filter(function (b) {
        return !/^(gl\_|texture)/.test(b)
    })
    
    module.exports = v100.concat([
        // the updated gl_ constants
        'gl_VertexID'
        , 'gl_InstanceID'
        , 'gl_Position'
        , 'gl_PointSize'
        , 'gl_FragCoord'
        , 'gl_FrontFacing'
        , 'gl_FragDepth'
        , 'gl_PointCoord'
        , 'gl_MaxVertexAttribs'
        , 'gl_MaxVertexUniformVectors'
        , 'gl_MaxVertexOutputVectors'
        , 'gl_MaxFragmentInputVectors'
        , 'gl_MaxVertexTextureImageUnits'
        , 'gl_MaxCombinedTextureImageUnits'
        , 'gl_MaxTextureImageUnits'
        , 'gl_MaxFragmentUniformVectors'
        , 'gl_MaxDrawBuffers'
        , 'gl_MinProgramTexelOffset'
        , 'gl_MaxProgramTexelOffset'
        , 'gl_DepthRangeParameters'
        , 'gl_DepthRange'
    
        // other builtins
        , 'trunc'
        , 'round'
        , 'roundEven'
        , 'isnan'
        , 'isinf'
        , 'floatBitsToInt'
        , 'floatBitsToUint'
        , 'intBitsToFloat'
        , 'uintBitsToFloat'
        , 'packSnorm2x16'
        , 'unpackSnorm2x16'
        , 'packUnorm2x16'
        , 'unpackUnorm2x16'
        , 'packHalf2x16'
        , 'unpackHalf2x16'
        , 'outerProduct'
        , 'transpose'
        , 'determinant'
        , 'inverse'
        , 'texture'
        , 'textureSize'
        , 'textureProj'
        , 'textureLod'
        , 'textureOffset'
        , 'texelFetch'
        , 'texelFetchOffset'
        , 'textureProjOffset'
        , 'textureLodOffset'
        , 'textureProjLod'
        , 'textureProjLodOffset'
        , 'textureGrad'
        , 'textureGradOffset'
        , 'textureProjGrad'
        , 'textureProjGradOffset'
    ])
    
    },{"./builtins":17}],17:[function(require,module,exports){
    module.exports = [
        // Keep this list sorted
        'abs'
        , 'acos'
        , 'all'
        , 'any'
        , 'asin'
        , 'atan'
        , 'ceil'
        , 'clamp'
        , 'cos'
        , 'cross'
        , 'dFdx'
        , 'dFdy'
        , 'degrees'
        , 'distance'
        , 'dot'
        , 'equal'
        , 'exp'
        , 'exp2'
        , 'faceforward'
        , 'floor'
        , 'fract'
        , 'gl_BackColor'
        , 'gl_BackLightModelProduct'
        , 'gl_BackLightProduct'
        , 'gl_BackMaterial'
        , 'gl_BackSecondaryColor'
        , 'gl_ClipPlane'
        , 'gl_ClipVertex'
        , 'gl_Color'
        , 'gl_DepthRange'
        , 'gl_DepthRangeParameters'
        , 'gl_EyePlaneQ'
        , 'gl_EyePlaneR'
        , 'gl_EyePlaneS'
        , 'gl_EyePlaneT'
        , 'gl_Fog'
        , 'gl_FogCoord'
        , 'gl_FogFragCoord'
        , 'gl_FogParameters'
        , 'gl_FragColor'
        , 'gl_FragCoord'
        , 'gl_FragData'
        , 'gl_FragDepth'
        , 'gl_FragDepthEXT'
        , 'gl_FrontColor'
        , 'gl_FrontFacing'
        , 'gl_FrontLightModelProduct'
        , 'gl_FrontLightProduct'
        , 'gl_FrontMaterial'
        , 'gl_FrontSecondaryColor'
        , 'gl_LightModel'
        , 'gl_LightModelParameters'
        , 'gl_LightModelProducts'
        , 'gl_LightProducts'
        , 'gl_LightSource'
        , 'gl_LightSourceParameters'
        , 'gl_MaterialParameters'
        , 'gl_MaxClipPlanes'
        , 'gl_MaxCombinedTextureImageUnits'
        , 'gl_MaxDrawBuffers'
        , 'gl_MaxFragmentUniformComponents'
        , 'gl_MaxLights'
        , 'gl_MaxTextureCoords'
        , 'gl_MaxTextureImageUnits'
        , 'gl_MaxTextureUnits'
        , 'gl_MaxVaryingFloats'
        , 'gl_MaxVertexAttribs'
        , 'gl_MaxVertexTextureImageUnits'
        , 'gl_MaxVertexUniformComponents'
        , 'gl_ModelViewMatrix'
        , 'gl_ModelViewMatrixInverse'
        , 'gl_ModelViewMatrixInverseTranspose'
        , 'gl_ModelViewMatrixTranspose'
        , 'gl_ModelViewProjectionMatrix'
        , 'gl_ModelViewProjectionMatrixInverse'
        , 'gl_ModelViewProjectionMatrixInverseTranspose'
        , 'gl_ModelViewProjectionMatrixTranspose'
        , 'gl_MultiTexCoord0'
        , 'gl_MultiTexCoord1'
        , 'gl_MultiTexCoord2'
        , 'gl_MultiTexCoord3'
        , 'gl_MultiTexCoord4'
        , 'gl_MultiTexCoord5'
        , 'gl_MultiTexCoord6'
        , 'gl_MultiTexCoord7'
        , 'gl_Normal'
        , 'gl_NormalMatrix'
        , 'gl_NormalScale'
        , 'gl_ObjectPlaneQ'
        , 'gl_ObjectPlaneR'
        , 'gl_ObjectPlaneS'
        , 'gl_ObjectPlaneT'
        , 'gl_Point'
        , 'gl_PointCoord'
        , 'gl_PointParameters'
        , 'gl_PointSize'
        , 'gl_Position'
        , 'gl_ProjectionMatrix'
        , 'gl_ProjectionMatrixInverse'
        , 'gl_ProjectionMatrixInverseTranspose'
        , 'gl_ProjectionMatrixTranspose'
        , 'gl_SecondaryColor'
        , 'gl_TexCoord'
        , 'gl_TextureEnvColor'
        , 'gl_TextureMatrix'
        , 'gl_TextureMatrixInverse'
        , 'gl_TextureMatrixInverseTranspose'
        , 'gl_TextureMatrixTranspose'
        , 'gl_Vertex'
        , 'greaterThan'
        , 'greaterThanEqual'
        , 'inversesqrt'
        , 'length'
        , 'lessThan'
        , 'lessThanEqual'
        , 'log'
        , 'log2'
        , 'matrixCompMult'
        , 'max'
        , 'min'
        , 'mix'
        , 'mod'
        , 'normalize'
        , 'not'
        , 'notEqual'
        , 'pow'
        , 'radians'
        , 'reflect'
        , 'refract'
        , 'sign'
        , 'sin'
        , 'smoothstep'
        , 'sqrt'
        , 'step'
        , 'tan'
        , 'texture2D'
        , 'texture2DLod'
        , 'texture2DProj'
        , 'texture2DProjLod'
        , 'textureCube'
        , 'textureCubeLod'
        , 'texture2DLodEXT'
        , 'texture2DProjLodEXT'
        , 'textureCubeLodEXT'
        , 'texture2DGradEXT'
        , 'texture2DProjGradEXT'
        , 'textureCubeGradEXT'
    ]
    
    },{}],18:[function(require,module,exports){
    var v100 = require('./literals')
    
    module.exports = v100.slice().concat([
        'layout'
        , 'centroid'
        , 'smooth'
        , 'case'
        , 'mat2x2'
        , 'mat2x3'
        , 'mat2x4'
        , 'mat3x2'
        , 'mat3x3'
        , 'mat3x4'
        , 'mat4x2'
        , 'mat4x3'
        , 'mat4x4'
        , 'uint'
        , 'uvec2'
        , 'uvec3'
        , 'uvec4'
        , 'samplerCubeShadow'
        , 'sampler2DArray'
        , 'sampler2DArrayShadow'
        , 'isampler2D'
        , 'isampler3D'
        , 'isamplerCube'
        , 'isampler2DArray'
        , 'usampler2D'
        , 'usampler3D'
        , 'usamplerCube'
        , 'usampler2DArray'
        , 'coherent'
        , 'restrict'
        , 'readonly'
        , 'writeonly'
        , 'resource'
        , 'atomic_uint'
        , 'noperspective'
        , 'patch'
        , 'sample'
        , 'subroutine'
        , 'common'
        , 'partition'
        , 'active'
        , 'filter'
        , 'image1D'
        , 'image2D'
        , 'image3D'
        , 'imageCube'
        , 'iimage1D'
        , 'iimage2D'
        , 'iimage3D'
        , 'iimageCube'
        , 'uimage1D'
        , 'uimage2D'
        , 'uimage3D'
        , 'uimageCube'
        , 'image1DArray'
        , 'image2DArray'
        , 'iimage1DArray'
        , 'iimage2DArray'
        , 'uimage1DArray'
        , 'uimage2DArray'
        , 'image1DShadow'
        , 'image2DShadow'
        , 'image1DArrayShadow'
        , 'image2DArrayShadow'
        , 'imageBuffer'
        , 'iimageBuffer'
        , 'uimageBuffer'
        , 'sampler1DArray'
        , 'sampler1DArrayShadow'
        , 'isampler1D'
        , 'isampler1DArray'
        , 'usampler1D'
        , 'usampler1DArray'
        , 'isampler2DRect'
        , 'usampler2DRect'
        , 'samplerBuffer'
        , 'isamplerBuffer'
        , 'usamplerBuffer'
        , 'sampler2DMS'
        , 'isampler2DMS'
        , 'usampler2DMS'
        , 'sampler2DMSArray'
        , 'isampler2DMSArray'
        , 'usampler2DMSArray'
    ])
    
    },{"./literals":19}],19:[function(require,module,exports){
    module.exports = [
        // current
        'precision'
        , 'highp'
        , 'mediump'
        , 'lowp'
        , 'attribute'
        , 'const'
        , 'uniform'
        , 'varying'
        , 'break'
        , 'continue'
        , 'do'
        , 'for'
        , 'while'
        , 'if'
        , 'else'
        , 'in'
        , 'out'
        , 'inout'
        , 'float'
        , 'int'
        , 'void'
        , 'bool'
        , 'true'
        , 'false'
        , 'discard'
        , 'return'
        , 'mat2'
        , 'mat3'
        , 'mat4'
        , 'vec2'
        , 'vec3'
        , 'vec4'
        , 'ivec2'
        , 'ivec3'
        , 'ivec4'
        , 'bvec2'
        , 'bvec3'
        , 'bvec4'
        , 'sampler1D'
        , 'sampler2D'
        , 'sampler3D'
        , 'samplerCube'
        , 'sampler1DShadow'
        , 'sampler2DShadow'
        , 'struct'
    
        // future
        , 'asm'
        , 'class'
        , 'union'
        , 'enum'
        , 'typedef'
        , 'template'
        , 'this'
        , 'packed'
        , 'goto'
        , 'switch'
        , 'default'
        , 'inline'
        , 'noinline'
        , 'volatile'
        , 'public'
        , 'static'
        , 'extern'
        , 'external'
        , 'interface'
        , 'long'
        , 'short'
        , 'double'
        , 'half'
        , 'fixed'
        , 'unsigned'
        , 'input'
        , 'output'
        , 'hvec2'
        , 'hvec3'
        , 'hvec4'
        , 'dvec2'
        , 'dvec3'
        , 'dvec4'
        , 'fvec2'
        , 'fvec3'
        , 'fvec4'
        , 'sampler2DRect'
        , 'sampler3DRect'
        , 'sampler2DRectShadow'
        , 'sizeof'
        , 'cast'
        , 'namespace'
        , 'using'
    ]
    
    },{}],20:[function(require,module,exports){
    module.exports = [
        '<<='
        , '>>='
        , '++'
        , '--'
        , '<<'
        , '>>'
        , '<='
        , '>='
        , '=='
        , '!='
        , '&&'
        , '||'
        , '+='
        , '-='
        , '*='
        , '/='
        , '%='
        , '&='
        , '^^'
        , '^='
        , '|='
        , '('
        , ')'
        , '['
        , ']'
        , '.'
        , '!'
        , '~'
        , '*'
        , '/'
        , '%'
        , '+'
        , '-'
        , '<'
        , '>'
        , '&'
        , '^'
        , '|'
        , '?'
        , ':'
        , '='
        , ','
        , ';'
        , '{'
        , '}'
    ]
    
    },{}],21:[function(require,module,exports){
    var tokenize = require('./index')
    
    module.exports = tokenizeString
    
    function tokenizeString(str, opt) {
        var generator = tokenize(opt)
        var tokens = []
    
        tokens = tokens.concat(generator(str))
        tokens = tokens.concat(generator(null))
    
        return tokens
    }
    
    },{"./index":15}],22:[function(require,module,exports){
    if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
            }
        });
        };
    } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor
        var TempCtor = function () {}
        TempCtor.prototype = superCtor.prototype
        ctor.prototype = new TempCtor()
        ctor.prototype.constructor = ctor
        }
    }
    
    },{}],23:[function(require,module,exports){
    /**
     * @module parenthesis
     */
    
    function parse (str, opts) {
        //pretend non-string parsed per-se
        if (typeof str !== 'string') return [str];
    
        var res = [str];
    
        opts = opts || {};
    
        var brackets = opts.brackets ? (Array.isArray(opts.brackets) ? opts.brackets : [opts.brackets]) : ['{}', '[]', '()'];
    
        var escape = opts.escape || '___';
    
        var flat = !!opts.flat;
    
        brackets.forEach(function (bracket) {
            //create parenthesis regex
            var pRE = new RegExp(['\\', bracket[0], '[^\\', bracket[0], '\\', bracket[1], ']*\\', bracket[1]].join(''));
    
            var ids = [];
    
            function replaceToken(token, idx, str){
                //save token to res
                var refId = res.push(token.slice(bracket[0].length, -bracket[1].length)) - 1;
    
                ids.push(refId);
    
                return escape + refId;
            }
    
            res.forEach(function (str, i) {
                var prevStr;
    
                //replace paren tokens till there’s none
                var a = 0;
                while (str != prevStr) {
                    prevStr = str;
                    str = str.replace(pRE, replaceToken);
                    if (a++ > 10e3) throw Error('References have circular dependency. Please, check them.')
                }
    
                res[i] = str;
            });
    
            //wrap found refs to brackets
            ids = ids.reverse();
            res = res.map(function (str) {
                ids.forEach(function (id) {
                    str = str.replace(new RegExp('(\\' + escape + id + '(?![0-9]))', 'g'), bracket[0] + '$1' + bracket[1])
                });
                return str;
            });
        });
    
        var re = new RegExp('\\' + escape + '([0-9]+)');
    
        //transform references to tree
        function nest (str, refs, escape) {
            var res = [], match;
    
            var a = 0;
            while (match = re.exec(str)) {
                if (a++ > 10e3) throw Error('Circular references in parenthesis');
    
                res.push(str.slice(0, match.index));
    
                res.push(nest(refs[match[1]], refs));
    
                str = str.slice(match.index + match[0].length);
            }
    
            res.push(str);
    
            return res;
        }
    
        return flat ? res : nest(res[0], res);
    };
    
    
    function stringify (arg, opts) {
        if (opts && opts.flat) {
            var escape = opts && opts.escape || '___';
    
            var str = arg[0], prevStr;
    
            //pretend bad string stringified with no parentheses
            if (!str) return '';
    
            function replaceRef(match, idx){
                if (arg[idx] == null) throw Error('Reference ' + idx + 'is undefined')
                return arg[idx];
            }
    
            var re = new RegExp('\\' + escape + '([0-9]+)');
    
            var a = 0;
            while (str != prevStr) {
                if (a++ > 10e3) throw Error('Circular references in ' + arg);
                prevStr = str;
                str = str.replace(re, replaceRef);
            }
    
            return str;
        }
    
        return arg.reduce(function f (prev, curr) {
            if (Array.isArray(curr)) {
                curr = curr.reduce(f, '');
            }
            return prev + curr;
        }, '');
    }
    
    
    function parenthesis (arg, opts) {
        if (Array.isArray(arg)) {
            return stringify(arg, opts);
        }
        else {
            return parse(arg, opts);
        }
    }
    
    parenthesis.parse = parse;
    parenthesis.stringify = stringify;
    
    module.exports = parenthesis;
    },{}],24:[function(require,module,exports){
    /**
     * Preprocess in C-preprocessor fashion
     * @module  prepr
     */
    
    var paren = require('parenthesis');
    var balanced = require('balanced-match');
    var extend = require('xtend/mutable');
    
    /**
     * Main processing function
     */
    function preprocess (what, how) {
        var result = '';
        var source = what + '';
    
        //defined macros
        //FIXME: provide real values here
        var macros = extend({
            __LINE__: 0,
            __FILE__: '_',
            __VERSION__: 100,
            defined: function (arg) {
                return [].slice.call(arguments).every(function (arg) {
                    return macros[arg] != null;
                });
            }
        }, how);
    
        // var res = source.split("\n");
        // for(var i = 0; i < res.length; i++){
        //   if(res[i].indexOf(".xyz") > 0 )
        //   {
        //     res[i] = res[i].split(".xyz")[0];
        //     // res[i] = `tt = my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));`+
        //       // `fragNormal[bigI] = [tt[0],tt[1],tt[2]];`;
        //   }
        // }
        // source = res.join();
    
    
    
            // fragNormal = (mWorld * vec4(vertNormal, 0.0)).xyz;
        return process(source);
    
    
    
    
        //process chunk of a string by finding out macros and replacing them
        function process (str) {
            if (!str) return '';
    
            var arr = [];
    
            var chunk = str;
    
            //find next directive, get chunk to process before it
            var directive = /#[A-Za-z0-9_$]+/ig.exec(str);
    
            //get chunk to process - before next call
            if (directive) {
                chunk = chunk.slice(0, directive.index);
                str = str.slice(directive.index);
            }
    
    
            //escape bad things
            chunk = escape(chunk, arr);
    
            //replace all defined X to defined (X)
            chunk = chunk.replace(/\bdefined\s*([A-Za-z0-9_$]+)/g, 'defined($1)');
    
    
            //for each registered macro do it’s call
            for (var name in macros) {
                //fn macro
                if (macros[name] instanceof Function) {
                    chunk = processFunction(chunk, name, macros[name]);
                }
            }
    
            chunk = escape(chunk, arr);
    
            //for each defined var do replacement
            for (var name in macros) {
                //value replacement
                if (!(macros[name] instanceof Function)) {
                    chunk = processDefinition(chunk, name, macros[name]);
                }
            }
    
            chunk = unescape(chunk, arr);
    
    
            //process directive
            if (directive) {
                if (/^#def/.test(directive[0])) {
                    str = define(str);
                }
                else if (/^#undef/.test(directive[0])) {
                    str = undefine(str);
                }
                else if (/^#if/.test(directive[0])) {
                    str = processIf(str);
                }
                else if (/^#line/.test(directive[0])) {
                    var data = /#[A-Za-z0-9_]+\s*([-0-9]+)?[^\n]*/.exec(str);
                    macros.__LINE__ = parseInt(data[1]);
                    str = str.slice(data.index + data[0].length);
                }
                else if (/^#version/.test(directive[0])) {
                    var data = /#[A-Za-z0-9_]+\s*([-0-9]+)?[^\n]*/.exec(str);
                    macros.__VERSION__ = parseInt(data[1]);
                    str = str.slice(data.index + data[0].length);
                }
                else {
                    //drop directive line
                    var directiveDecl = /\n/m.exec(str);
                    chunk += str.slice(0, directiveDecl.index) + '\n';
                    str = str.slice(directiveDecl.index)
                }
    
                return chunk + process(str);
            }
    
            return chunk;
        }
    
        //replace defined macros from a string
        function processFunction (str, name, fn) {
            var arr = [];
            str = escape(str, arr);
    
            var parts = paren(str, {
                flat: true,
                brackets: '()',
                escape: '___'
            });
    
            var re = new RegExp(name + '\\s*\\(___([0-9]+)\\)', 'g');
    
            //replace each macro call with result
            parts = parts.map(function (part) {
                return part.replace(re, function (match, argsPartIdx) {
                    //parse arguments
                    var args = parts[argsPartIdx];
                    if (args.trim().length) {
                        args = args.split(/\s*,\s*/);
                        args = args.map(function (arg) {
                            var argParts = parts.slice();
                            argParts[0] = arg;
                            return paren.stringify(argParts, {flat: true, escape: '___'});
                        }).map(function (arg) {
                            return arg;
                        });
                    } else {
                        args = [];
                    }
    
                    if (args.length != fn.length) throw Error(`macro "${name}" requires ${fn.length} arguments, but ${args.length} given`);
    
                    //apply macro call with args
                    return fn.apply(null, args);
                });
            });
    
            str = paren.stringify(parts, {flat: true, escape: '___'});
    
            str = unescape(str, arr);
    
            return str;
        }
    
        //replace defined variables from a string
        function processDefinition (str, name, value) {
            var arr = [];
            str = escape(str, arr);
    
            //apply concatenation ENTRY ## something → valueSomething
            str = str.replace(new RegExp(`([^#A-Za-z0-9_$]|^)${name}\\s*##\\s*([A-Za-z0-9_$]*)`, 'g'), function (match, pre, post) {
                return pre + value + post;
            });
            str = str.replace(new RegExp(`([A-Za-z0-9_$]*)\\s*##\\s*${name}([^A-Za-z0-9_$]|$)`, 'g'), function (match, pre, post) {
                return pre + value + post;
            });
    
            //replace definition entries
            str = str.replace(new RegExp(`([^#A-Za-z0-9_$]|^)${name}([^A-Za-z0-9_$]|$)`, 'g'), function (match, pre, post) {
    
                //insert definition
                if (macros[value] != null && !(macros[value] instanceof Function)) value = macros[value];
    
                return pre + value + post;
            });
            //replace stringifications
            str = str.replace(new RegExp(`#${name}([^A-Za-z0-9_$]|$)`, 'g'), function (match, post) {
                return  '"' + value + '"' + post;
            });
    
            str = unescape(str, arr);
    
            return str;
        }
    
        //helpers to escape unfoldable things in strings
        function escape (str, arr) {
            //hide comments
            str = str.replace(/\/\/[^\n]*$/mg, function (match) {
                return ' ___comment' + arr.push(match);
            });
            str = str.replace(/\/\*([^\*]|[\r\n]|(\*+([^\*\/]|[\r\n])))*\*+\//g, function (match) {
                return ' ___comment' + arr.push(match);
            });
            //Escape strings
            str = str.replace(/\'[^']*\'/g, function (match) {
                return ' ___string' + arr.push(match);
            });
            str = str.replace(/\"[^"]*\"/g, function (match) {
                return ' ___string' + arr.push(match);
            });
            str = str.replace(/\`[^`]*\`/g, function (match) {
                return ' ___string' + arr.push(match);
            });
            return str;
        }
    
        function unescape (str, arr) {
            //unescape strings
            arr.forEach(function (rep, i) {
                str = str.replace(' ___string' + (i+1), rep);
            });
    
            //unhide comments
            arr.forEach(function (value, i) {
                str = str.replace(' ___comment' + (i+1), value);
            });
            return str;
        }
    
    
    
        //register macro, #define directive
        function define (str) {
            var data = /#[A-Za-z]+[ ]*([A-Za-z0-9_$]*)(?:\(([^\(\)]*)\))?[ \r]*([^\n]*)$/m.exec(str);
            str = str.slice(data.index + data[0].length);
    
            var name = data[1];
            var args = data[2];
            var value = data[3];
    
            if (!name || !value) throw Error(`Macro definition "${data[0]}" is malformed`);
    
            //register function macro
            //#define FOO(A, B) (expr)
            if (args != null) {
                if (args.trim().length) {
                    args = args.split(/\s*,\s*/);
                }
                else {
                    args = [];
                }
    
                function fn () {
                    var result = value;
    
                    //for each arg - replace it’s occurence in `result`
                    for (var i = 0; i < args.length; i++) {
                        result = processDefinition(result, args[i], arguments[i]);
                    }
    
                    result = process(result);
    
                    return result;
                };
                Object.defineProperty(fn, 'length', {
                    value: args.length
                });
    
                macros[name] = fn;
            }
    
            //register value macro
            //#define FOO insertion
            //#define FOO (expr)
            else {
                macros[name] = value;
            }
    
            return str;
        }
    
        //unregister macro, #undef directive
        function undefine (str) {
            var data = /#[A-Za-z0-9_]+[ ]*([A-Za-z0-9_$]+)/.exec(str);
            delete macros[data[1]];
    
            return str.slice(data.index + data[0].length);
        }
    
        //process if/else/ifdef/elif/ifndef/defined
        function processIf (str) {
            var match = balanced('#if', '#endif', str)
    
            //if no nested ifs - means we are in clause, return as is
            if (!match) return str;
    
            var body = match.body;
            var post = match.post;
            var elseBody = '';
    
            //find else part
            var matchElse;
            if (matchElse = /^\s*#else[^\n\r]*$/m.exec(body)) {
                elseBody = body.slice(matchElse.index + matchElse[0].length);
                body = body.slice(0, matchElse.index);
            }
    
            //ifdef
            if(/^def/.test(body)) {
                body = body.slice(3);
                var nameMatch = /[A-Za-z0-9_$]+/.exec(body);
                var name = nameMatch[0];
                body = body.slice(name.length + nameMatch.index);
                if (macros[name] != null) str = process(body);
                else str = process(elseBody);
            }
            //ifndef
            else if (/^ndef/.test(body)) {
                body = body.slice(4);
                var nameMatch = /[A-Za-z0-9_$]+/.exec(body);
                var name = nameMatch[0];
                body = body.slice(name.length + nameMatch.index);
                if (macros[name] == null) str = process(body);
                else str = process(elseBody);
            }
            //if
            else {
                //split elifs
                var clauses = body.split(/^\s*#elif\s+/m);
    
                var result = false;
    
                //find first triggered clause
                for (var i = 0; i < clauses.length; i++) {
                    var clause = clauses[i];
    
                    var exprMatch = /\s*(.*)/.exec(clause);
                    var expr = exprMatch[0];
                    clause = clause.slice(expr.length + exprMatch.index);
    
                    //eval expression
                    expr = process(expr);
    
                    try {
                        result = eval(expr);
                    } catch (e) {
                        result = false;
                    }
    
                    if (result) {
                        str = process(clause);
                        break;
                    }
                }
    
                //else clause
                if (!result) {
                    str = process(elseBody);
                }
            }
    
    
            //trim post till the first endline, because there may be comments after #endif
            var match = /[\n\r]/.exec(post);
            if (match) post = post.slice(match.index);
    
            return str + post;
        }
    }
    
    
    module.exports = preprocess;
    },{"balanced-match":10,"parenthesis":23,"xtend/mutable":25}],25:[function(require,module,exports){
    module.exports = extend
    
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    
    function extend(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
    
            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
    
        return target
    }
    
    },{}],26:[function(require,module,exports){
    /**
     * Convert stream of AST nodes to strings.
     *
     * @module
     */
    
    var tokenize = require('glsl-tokenizer/string');
    var parse = require('./lib/parse');
    var GLSL = require('./lib');
    var Transform = require('stream').Transform;
    var inherits = require('inherits');
    
    function GlslJsStream (options) {
        if (!(this instanceof GlslJsStream)) return new GlslJsStream(options);
    
        Transform.call(this, {
            objectMode: true
        });
    
        //actual version of tree
        this.tree = null;
    
        //actual version of code
        this.source = '';
    
        this.on('data', function (data) {
            this.source += data + '\n';
        });
    
        //glsl compiler
        this.compiler = GLSL(options).compiler;
    };
    
    inherits(GlslJsStream, Transform);
    
    
    // glsl-parser streams data for each token from the glsl-tokenizer,
    // it generates lots of duplicated ASTs, which does not make any sense in the output.
    // So the satisfactory behaviour here is to render each statement in turn.
    GlslJsStream.prototype._transform = function (chunk, enc, cb) {
        //if string passed - tokenize and parse it
        if (typeof chunk === 'string') {
            //FIXME: there is a problem of invalid input chunks; gotta wait till some sensible thing is accumulated and then parse.
            var tree = parse(tokenize(chunk));
            cb(null, this.compiler.process(tree));
    
            this.tree = tree;
        }
        //if tree - compile the tree
        else {
            //if function statements expected - wait for stmtlist of it to render fully
            if (this._isFunctionMode) {
                if (chunk.type === 'function') {
                    this._isFunctionMode = false;
                }
                cb(null);
            }
    
            else {
                if (chunk.type === 'stmt')	{
                    cb(null, this.compiler.process(chunk));
                }
                else {
                    //detect entering function mode to avoid reacting on stmts
                    if (chunk.type === 'functionargs') {
                        this._isFunctionMode = true;
                    }
                    //save last stmtlist to pass to the end
                    else if (chunk.type === 'stmtlist') {
                        this.tree = chunk;
                    }
                    cb(null);
                }
            }
        }
    };
    
    module.exports = GlslJsStream;
    },{"./lib":4,"./lib/parse":6,"glsl-tokenizer/string":21,"inherits":22,"stream":54}],27:[function(require,module,exports){
    (function (global){
    'use strict';
    
    // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
    // original notice:
    
    /*!
        * The buffer module from node.js, for the browser.
        *
        * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
        * @license  MIT
        */
    function compare(a, b) {
        if (a === b) {
        return 0;
        }
    
        var x = a.length;
        var y = b.length;
    
        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
        }
        }
    
        if (x < y) {
        return -1;
        }
        if (y < x) {
        return 1;
        }
        return 0;
    }
    function isBuffer(b) {
        if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
        return global.Buffer.isBuffer(b);
        }
        return !!(b != null && b._isBuffer);
    }
    
    // based on node assert, original notice:
    
    // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
    //
    // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
    //
    // Originally from narwhal.js (http://narwhaljs.org)
    // Copyright (c) 2009 Thomas Robinson <280north.com>
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the 'Software'), to
    // deal in the Software without restriction, including without limitation the
    // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    // sell copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:
    //
    // The above copyright notice and this permission notice shall be included in
    // all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
    // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    var util = require('util/');
    var hasOwn = Object.prototype.hasOwnProperty;
    var pSlice = Array.prototype.slice;
    var functionsHaveNames = (function () {
        return function foo() {}.name === 'foo';
    }());
    function pToString (obj) {
        return Object.prototype.toString.call(obj);
    }
    function isView(arrbuf) {
        if (isBuffer(arrbuf)) {
        return false;
        }
        if (typeof global.ArrayBuffer !== 'function') {
        return false;
        }
        if (typeof ArrayBuffer.isView === 'function') {
        return ArrayBuffer.isView(arrbuf);
        }
        if (!arrbuf) {
        return false;
        }
        if (arrbuf instanceof DataView) {
        return true;
        }
        if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
        return true;
        }
        return false;
    }
    // 1. The assert module provides functions that throw
    // AssertionError's when particular conditions are not met. The
    // assert module must conform to the following interface.
    
    var assert = module.exports = ok;
    
    // 2. The AssertionError is defined in assert.
    // new assert.AssertionError({ message: message,
    //                             actual: actual,
    //                             expected: expected })
    
    var regex = /\s*function\s+([^\(\s]*)\s*/;
    // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
    function getName(func) {
        if (!util.isFunction(func)) {
        return;
        }
        if (functionsHaveNames) {
        return func.name;
        }
        var str = func.toString();
        var match = str.match(regex);
        return match && match[1];
    }
    assert.AssertionError = function AssertionError(options) {
        this.name = 'AssertionError';
        this.actual = options.actual;
        this.expected = options.expected;
        this.operator = options.operator;
        if (options.message) {
        this.message = options.message;
        this.generatedMessage = false;
        } else {
        this.message = getMessage(this);
        this.generatedMessage = true;
        }
        var stackStartFunction = options.stackStartFunction || fail;
        if (Error.captureStackTrace) {
        Error.captureStackTrace(this, stackStartFunction);
        } else {
        // non v8 browsers so we can have a stacktrace
        var err = new Error();
        if (err.stack) {
            var out = err.stack;
    
            // try to strip useless frames
            var fn_name = getName(stackStartFunction);
            var idx = out.indexOf('\n' + fn_name);
            if (idx >= 0) {
            // once we have located the function frame
            // we need to strip out everything before it (and its line)
            var next_line = out.indexOf('\n', idx + 1);
            out = out.substring(next_line + 1);
            }
    
            this.stack = out;
        }
        }
    };
    
    // assert.AssertionError instanceof Error
    util.inherits(assert.AssertionError, Error);
    
    function truncate(s, n) {
        if (typeof s === 'string') {
        return s.length < n ? s : s.slice(0, n);
        } else {
        return s;
        }
    }
    function inspect(something) {
        if (functionsHaveNames || !util.isFunction(something)) {
        return util.inspect(something);
        }
        var rawname = getName(something);
        var name = rawname ? ': ' + rawname : '';
        return '[Function' +  name + ']';
    }
    function getMessage(self) {
        return truncate(inspect(self.actual), 128) + ' ' +
                self.operator + ' ' +
                truncate(inspect(self.expected), 128);
    }
    
    // At present only the three keys mentioned above are used and
    // understood by the spec. Implementations or sub modules can pass
    // other keys to the AssertionError's constructor - they will be
    // ignored.
    
    // 3. All of the following functions must throw an AssertionError
    // when a corresponding condition is not met, with a message that
    // may be undefined if not provided.  All assertion methods provide
    // both the actual and expected values to the assertion error for
    // display purposes.
    
    function fail(actual, expected, message, operator, stackStartFunction) {
        throw new assert.AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
        });
    }
    
    // EXTENSION! allows for well behaved errors defined elsewhere.
    assert.fail = fail;
    
    // 4. Pure assertion tests whether a value is truthy, as determined
    // by !!guard.
    // assert.ok(guard, message_opt);
    // This statement is equivalent to assert.equal(true, !!guard,
    // message_opt);. To test strictly for the value true, use
    // assert.strictEqual(true, guard, message_opt);.
    
    function ok(value, message) {
        if (!value) fail(value, true, message, '==', assert.ok);
    }
    assert.ok = ok;
    
    // 5. The equality assertion tests shallow, coercive equality with
    // ==.
    // assert.equal(actual, expected, message_opt);
    
    assert.equal = function equal(actual, expected, message) {
        if (actual != expected) fail(actual, expected, message, '==', assert.equal);
    };
    
    // 6. The non-equality assertion tests for whether two objects are not equal
    // with != assert.notEqual(actual, expected, message_opt);
    
    assert.notEqual = function notEqual(actual, expected, message) {
        if (actual == expected) {
        fail(actual, expected, message, '!=', assert.notEqual);
        }
    };
    
    // 7. The equivalence assertion tests a deep equality relation.
    // assert.deepEqual(actual, expected, message_opt);
    
    assert.deepEqual = function deepEqual(actual, expected, message) {
        if (!_deepEqual(actual, expected, false)) {
        fail(actual, expected, message, 'deepEqual', assert.deepEqual);
        }
    };
    
    assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
        if (!_deepEqual(actual, expected, true)) {
        fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
        }
    };
    
    function _deepEqual(actual, expected, strict, memos) {
        // 7.1. All identical values are equivalent, as determined by ===.
        if (actual === expected) {
        return true;
        } else if (isBuffer(actual) && isBuffer(expected)) {
        return compare(actual, expected) === 0;
    
        // 7.2. If the expected value is a Date object, the actual value is
        // equivalent if it is also a Date object that refers to the same time.
        } else if (util.isDate(actual) && util.isDate(expected)) {
        return actual.getTime() === expected.getTime();
    
        // 7.3 If the expected value is a RegExp object, the actual value is
        // equivalent if it is also a RegExp object with the same source and
        // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
        } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
        return actual.source === expected.source &&
                actual.global === expected.global &&
                actual.multiline === expected.multiline &&
                actual.lastIndex === expected.lastIndex &&
                actual.ignoreCase === expected.ignoreCase;
    
        // 7.4. Other pairs that do not both pass typeof value == 'object',
        // equivalence is determined by ==.
        } else if ((actual === null || typeof actual !== 'object') &&
                    (expected === null || typeof expected !== 'object')) {
        return strict ? actual === expected : actual == expected;
    
        // If both values are instances of typed arrays, wrap their underlying
        // ArrayBuffers in a Buffer each to increase performance
        // This optimization requires the arrays to have the same type as checked by
        // Object.prototype.toString (aka pToString). Never perform binary
        // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
        // bit patterns are not identical.
        } else if (isView(actual) && isView(expected) &&
                    pToString(actual) === pToString(expected) &&
                    !(actual instanceof Float32Array ||
                    actual instanceof Float64Array)) {
        return compare(new Uint8Array(actual.buffer),
                        new Uint8Array(expected.buffer)) === 0;
    
        // 7.5 For all other Object pairs, including Array objects, equivalence is
        // determined by having the same number of owned properties (as verified
        // with Object.prototype.hasOwnProperty.call), the same set of keys
        // (although not necessarily the same order), equivalent values for every
        // corresponding key, and an identical 'prototype' property. Note: this
        // accounts for both named and indexed properties on Arrays.
        } else if (isBuffer(actual) !== isBuffer(expected)) {
        return false;
        } else {
        memos = memos || {actual: [], expected: []};
    
        var actualIndex = memos.actual.indexOf(actual);
        if (actualIndex !== -1) {
            if (actualIndex === memos.expected.indexOf(expected)) {
            return true;
            }
        }
    
        memos.actual.push(actual);
        memos.expected.push(expected);
    
        return objEquiv(actual, expected, strict, memos);
        }
    }
    
    function isArguments(object) {
        return Object.prototype.toString.call(object) == '[object Arguments]';
    }
    
    function objEquiv(a, b, strict, actualVisitedObjects) {
        if (a === null || a === undefined || b === null || b === undefined)
        return false;
        // if one is a primitive, the other must be same
        if (util.isPrimitive(a) || util.isPrimitive(b))
        return a === b;
        if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
        return false;
        var aIsArgs = isArguments(a);
        var bIsArgs = isArguments(b);
        if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
        return false;
        if (aIsArgs) {
        a = pSlice.call(a);
        b = pSlice.call(b);
        return _deepEqual(a, b, strict);
        }
        var ka = objectKeys(a);
        var kb = objectKeys(b);
        var key, i;
        // having the same number of owned properties (keys incorporates
        // hasOwnProperty)
        if (ka.length !== kb.length)
        return false;
        //the same set of keys (although not necessarily the same order),
        ka.sort();
        kb.sort();
        //~~~cheap key test
        for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] !== kb[i])
            return false;
        }
        //equivalent values for every corresponding key, and
        //~~~possibly expensive deep test
        for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
            return false;
        }
        return true;
    }
    
    // 8. The non-equivalence assertion tests for any deep inequality.
    // assert.notDeepEqual(actual, expected, message_opt);
    
    assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
        if (_deepEqual(actual, expected, false)) {
        fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
        }
    };
    
    assert.notDeepStrictEqual = notDeepStrictEqual;
    function notDeepStrictEqual(actual, expected, message) {
        if (_deepEqual(actual, expected, true)) {
        fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
        }
    }
    
    
    // 9. The strict equality assertion tests strict equality, as determined by ===.
    // assert.strictEqual(actual, expected, message_opt);
    
    assert.strictEqual = function strictEqual(actual, expected, message) {
        if (actual !== expected) {
        fail(actual, expected, message, '===', assert.strictEqual);
        }
    };
    
    // 10. The strict non-equality assertion tests for strict inequality, as
    // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
    
    assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
        if (actual === expected) {
        fail(actual, expected, message, '!==', assert.notStrictEqual);
        }
    };
    
    function expectedException(actual, expected) {
        if (!actual || !expected) {
        return false;
        }
    
        if (Object.prototype.toString.call(expected) == '[object RegExp]') {
        return expected.test(actual);
        }
    
        try {
        if (actual instanceof expected) {
            return true;
        }
        } catch (e) {
        // Ignore.  The instanceof check doesn't work for arrow functions.
        }
    
        if (Error.isPrototypeOf(expected)) {
        return false;
        }
    
        return expected.call({}, actual) === true;
    }
    
    function _tryBlock(block) {
        var error;
        try {
        block();
        } catch (e) {
        error = e;
        }
        return error;
    }
    
    function _throws(shouldThrow, block, expected, message) {
        var actual;
    
        if (typeof block !== 'function') {
        throw new TypeError('"block" argument must be a function');
        }
    
        if (typeof expected === 'string') {
        message = expected;
        expected = null;
        }
    
        actual = _tryBlock(block);
    
        message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
                (message ? ' ' + message : '.');
    
        if (shouldThrow && !actual) {
        fail(actual, expected, 'Missing expected exception' + message);
        }
    
        var userProvidedMessage = typeof message === 'string';
        var isUnwantedException = !shouldThrow && util.isError(actual);
        var isUnexpectedException = !shouldThrow && actual && !expected;
    
        if ((isUnwantedException &&
            userProvidedMessage &&
            expectedException(actual, expected)) ||
            isUnexpectedException) {
        fail(actual, expected, 'Got unwanted exception' + message);
        }
    
        if ((shouldThrow && actual && expected &&
            !expectedException(actual, expected)) || (!shouldThrow && actual)) {
        throw actual;
        }
    }
    
    // 11. Expected to throw an error:
    // assert.throws(block, Error_opt, message_opt);
    
    assert.throws = function(block, /*optional*/error, /*optional*/message) {
        _throws(true, block, error, message);
    };
    
    // EXTENSION! This is annoying to write outside this module.
    assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
        _throws(false, block, error, message);
    };
    
    assert.ifError = function(err) { if (err) throw err; };
    
    var objectKeys = Object.keys || function (obj) {
        var keys = [];
        for (var key in obj) {
        if (hasOwn.call(obj, key)) keys.push(key);
        }
        return keys;
    };
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"util/":58}],28:[function(require,module,exports){
    'use strict'
    
    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray
    
    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
    
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i]
        revLookup[code.charCodeAt(i)] = i
    }
    
    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63
    
    function placeHoldersCount (b64) {
        var len = b64.length
        if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
        }
    
        // the number of equal signs (place holders)
        // if there are two placeholders, than the two characters before it
        // represent one byte
        // if there is only one, then the three characters before it represent 2 bytes
        // this is just a cheap hack to not do indexOf twice
        return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
    }
    
    function byteLength (b64) {
        // base64 is 4/3 + up to two characters of the original data
        return (b64.length * 3 / 4) - placeHoldersCount(b64)
    }
    
    function toByteArray (b64) {
        var i, l, tmp, placeHolders, arr
        var len = b64.length
        placeHolders = placeHoldersCount(b64)
    
        arr = new Arr((len * 3 / 4) - placeHolders)
    
        // if there are placeholders, only get up to the last complete 4 chars
        l = placeHolders > 0 ? len - 4 : len
    
        var L = 0
    
        for (i = 0; i < l; i += 4) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
        arr[L++] = (tmp >> 16) & 0xFF
        arr[L++] = (tmp >> 8) & 0xFF
        arr[L++] = tmp & 0xFF
        }
    
        if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[L++] = tmp & 0xFF
        } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[L++] = (tmp >> 8) & 0xFF
        arr[L++] = tmp & 0xFF
        }
    
        return arr
    }
    
    function tripletToBase64 (num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }
    
    function encodeChunk (uint8, start, end) {
        var tmp
        var output = []
        for (var i = start; i < end; i += 3) {
        tmp = ((uint8[i] << 16) & 0xFF0000) + ((uint8[i + 1] << 8) & 0xFF00) + (uint8[i + 2] & 0xFF)
        output.push(tripletToBase64(tmp))
        }
        return output.join('')
    }
    
    function fromByteArray (uint8) {
        var tmp
        var len = uint8.length
        var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
        var output = ''
        var parts = []
        var maxChunkLength = 16383 // must be multiple of 3
    
        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
        }
    
        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
        tmp = uint8[len - 1]
        output += lookup[tmp >> 2]
        output += lookup[(tmp << 4) & 0x3F]
        output += '=='
        } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
        output += lookup[tmp >> 10]
        output += lookup[(tmp >> 4) & 0x3F]
        output += lookup[(tmp << 2) & 0x3F]
        output += '='
        }
    
        parts.push(output)
    
        return parts.join('')
    }
    
    },{}],29:[function(require,module,exports){
    
    },{}],30:[function(require,module,exports){
    /*!
        * The buffer module from node.js, for the browser.
        *
        * @author   Feross Aboukhadijeh <https://feross.org>
        * @license  MIT
        */
    /* eslint-disable no-proto */
    
    'use strict'
    
    var base64 = require('base64-js')
    var ieee754 = require('ieee754')
    
    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50
    
    var K_MAX_LENGTH = 0x7fffffff
    exports.kMaxLength = K_MAX_LENGTH
    
    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Print warning and recommend using `buffer` v4.x which has an Object
     *               implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * We report that the browser does not support typed arrays if the are not subclassable
     * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
     * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
     * for __proto__ and has a buggy typed array implementation.
     */
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
    
    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
        typeof console.error === 'function') {
        console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
        )
    }
    
    function typedArraySupport () {
        // Can typed array instances can be augmented?
        try {
        var arr = new Uint8Array(1)
        arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
        return arr.foo() === 42
        } catch (e) {
        return false
        }
    }
    
    Object.defineProperty(Buffer.prototype, 'parent', {
        get: function () {
        if (!(this instanceof Buffer)) {
            return undefined
        }
        return this.buffer
        }
    })
    
    Object.defineProperty(Buffer.prototype, 'offset', {
        get: function () {
        if (!(this instanceof Buffer)) {
            return undefined
        }
        return this.byteOffset
        }
    })
    
    function createBuffer (length) {
        if (length > K_MAX_LENGTH) {
        throw new RangeError('Invalid typed array length')
        }
        // Return an augmented `Uint8Array` instance
        var buf = new Uint8Array(length)
        buf.__proto__ = Buffer.prototype
        return buf
    }
    
    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */
    
    function Buffer (arg, encodingOrOffset, length) {
        // Common case.
        if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
            throw new Error(
            'If encoding is specified then the first argument must be a string'
            )
        }
        return allocUnsafe(arg)
        }
        return from(arg, encodingOrOffset, length)
    }
    
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
        })
    }
    
    Buffer.poolSize = 8192 // not used by this implementation
    
    function from (value, encodingOrOffset, length) {
        if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
        }
    
        if (isArrayBuffer(value) || (value && isArrayBuffer(value.buffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
        }
    
        if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
        }
    
        return fromObject(value)
    }
    
    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length)
    }
    
    // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
    // https://github.com/feross/buffer/pull/148
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array
    
    function assertSize (size) {
        if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number')
        } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
        }
    }
    
    function alloc (size, fill, encoding) {
        assertSize(size)
        if (size <= 0) {
        return createBuffer(size)
        }
        if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
            ? createBuffer(size).fill(fill, encoding)
            : createBuffer(size).fill(fill)
        }
        return createBuffer(size)
    }
    
    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding)
    }
    
    function allocUnsafe (size) {
        assertSize(size)
        return createBuffer(size < 0 ? 0 : checked(size) | 0)
    }
    
    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size)
    }
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size)
    }
    
    function fromString (string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
        }
    
        if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
        }
    
        var length = byteLength(string, encoding) | 0
        var buf = createBuffer(length)
    
        var actual = buf.write(string, encoding)
    
        if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual)
        }
    
        return buf
    }
    
    function fromArrayLike (array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0
        var buf = createBuffer(length)
        for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
        }
        return buf
    }
    
    function fromArrayBuffer (array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds')
        }
    
        if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds')
        }
    
        var buf
        if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array)
        } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset)
        } else {
        buf = new Uint8Array(array, byteOffset, length)
        }
    
        // Return an augmented `Uint8Array` instance
        buf.__proto__ = Buffer.prototype
        return buf
    }
    
    function fromObject (obj) {
        if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0
        var buf = createBuffer(len)
    
        if (buf.length === 0) {
            return buf
        }
    
        obj.copy(buf, 0, 0, len)
        return buf
        }
    
        if (obj) {
        if (ArrayBuffer.isView(obj) || 'length' in obj) {
            if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0)
            }
            return fromArrayLike(obj)
        }
    
        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
            return fromArrayLike(obj.data)
        }
        }
    
        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.')
    }
    
    function checked (length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                                'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
        }
        return length | 0
    }
    
    function SlowBuffer (length) {
        if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
        }
        return Buffer.alloc(+length)
    }
    
    Buffer.isBuffer = function isBuffer (b) {
        return b != null && b._isBuffer === true
    }
    
    Buffer.compare = function compare (a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
        }
    
        if (a === b) return 0
    
        var x = a.length
        var y = b.length
    
        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
            x = a[i]
            y = b[i]
            break
        }
        }
    
        if (x < y) return -1
        if (y < x) return 1
        return 0
    }
    
    Buffer.isEncoding = function isEncoding (encoding) {
        switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true
        default:
            return false
        }
    }
    
    Buffer.concat = function concat (list, length) {
        if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
        }
    
        if (list.length === 0) {
        return Buffer.alloc(0)
        }
    
        var i
        if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
            length += list[i].length
        }
        }
    
        var buffer = Buffer.allocUnsafe(length)
        var pos = 0
        for (i = 0; i < list.length; ++i) {
        var buf = list[i]
        if (ArrayBuffer.isView(buf)) {
            buf = Buffer.from(buf)
        }
        if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos)
        pos += buf.length
        }
        return buffer
    }
    
    function byteLength (string, encoding) {
        if (Buffer.isBuffer(string)) {
        return string.length
        }
        if (ArrayBuffer.isView(string) || isArrayBuffer(string)) {
        return string.byteLength
        }
        if (typeof string !== 'string') {
        string = '' + string
        }
    
        var len = string.length
        if (len === 0) return 0
    
        // Use a for loop to avoid recursion
        var loweredCase = false
        for (;;) {
        switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
            return len
            case 'utf8':
            case 'utf-8':
            case undefined:
            return utf8ToBytes(string).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            return len * 2
            case 'hex':
            return len >>> 1
            case 'base64':
            return base64ToBytes(string).length
            default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
        }
    }
    Buffer.byteLength = byteLength
    
    function slowToString (encoding, start, end) {
        var loweredCase = false
    
        // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
        // property of a typed array.
    
        // This behaves neither like String nor Uint8Array in that we set start/end
        // to their upper/lower bounds if the value passed is out of range.
        // undefined is handled specially as per ECMA-262 6th Edition,
        // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
        if (start === undefined || start < 0) {
        start = 0
        }
        // Return early if start > this.length. Done here to prevent potential uint32
        // coercion fail below.
        if (start > this.length) {
        return ''
        }
    
        if (end === undefined || end > this.length) {
        end = this.length
        }
    
        if (end <= 0) {
        return ''
        }
    
        // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
        end >>>= 0
        start >>>= 0
    
        if (end <= start) {
        return ''
        }
    
        if (!encoding) encoding = 'utf8'
    
        while (true) {
        switch (encoding) {
            case 'hex':
            return hexSlice(this, start, end)
    
            case 'utf8':
            case 'utf-8':
            return utf8Slice(this, start, end)
    
            case 'ascii':
            return asciiSlice(this, start, end)
    
            case 'latin1':
            case 'binary':
            return latin1Slice(this, start, end)
    
            case 'base64':
            return base64Slice(this, start, end)
    
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            return utf16leSlice(this, start, end)
    
            default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase()
            loweredCase = true
        }
        }
    }
    
    // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
    // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
    // reliably in a browserify context because there could be multiple different
    // copies of the 'buffer' package in use. This method works even for Buffer
    // instances that were created from another copy of the `buffer` package.
    // See: https://github.com/feross/buffer/issues/154
    Buffer.prototype._isBuffer = true
    
    function swap (b, n, m) {
        var i = b[n]
        b[n] = b[m]
        b[m] = i
    }
    
    Buffer.prototype.swap16 = function swap16 () {
        var len = this.length
        if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
        }
        for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
        }
        return this
    }
    
    Buffer.prototype.swap32 = function swap32 () {
        var len = this.length
        if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
        }
        for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
        }
        return this
    }
    
    Buffer.prototype.swap64 = function swap64 () {
        var len = this.length
        if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
        }
        for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
        }
        return this
    }
    
    Buffer.prototype.toString = function toString () {
        var length = this.length
        if (length === 0) return ''
        if (arguments.length === 0) return utf8Slice(this, 0, length)
        return slowToString.apply(this, arguments)
    }
    
    Buffer.prototype.toLocaleString = Buffer.prototype.toString
    
    Buffer.prototype.equals = function equals (b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
        if (this === b) return true
        return Buffer.compare(this, b) === 0
    }
    
    Buffer.prototype.inspect = function inspect () {
        var str = ''
        var max = exports.INSPECT_MAX_BYTES
        if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
        if (this.length > max) str += ' ... '
        }
        return '<Buffer ' + str + '>'
    }
    
    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
        }
    
        if (start === undefined) {
        start = 0
        }
        if (end === undefined) {
        end = target ? target.length : 0
        }
        if (thisStart === undefined) {
        thisStart = 0
        }
        if (thisEnd === undefined) {
        thisEnd = this.length
        }
    
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
        }
    
        if (thisStart >= thisEnd && start >= end) {
        return 0
        }
        if (thisStart >= thisEnd) {
        return -1
        }
        if (start >= end) {
        return 1
        }
    
        start >>>= 0
        end >>>= 0
        thisStart >>>= 0
        thisEnd >>>= 0
    
        if (this === target) return 0
    
        var x = thisEnd - thisStart
        var y = end - start
        var len = Math.min(x, y)
    
        var thisCopy = this.slice(thisStart, thisEnd)
        var targetCopy = target.slice(start, end)
    
        for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i]
            y = targetCopy[i]
            break
        }
        }
    
        if (x < y) return -1
        if (y < x) return 1
        return 0
    }
    
    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
        // Empty buffer means no match
        if (buffer.length === 0) return -1
    
        // Normalize byteOffset
        if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
        } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
        } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
        }
        byteOffset = +byteOffset  // Coerce to Number.
        if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
        }
    
        // Normalize byteOffset: negative offsets start from the end of the buffer
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset
        if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
        } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
        }
    
        // Normalize val
        if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
        }
    
        // Finally, search either indexOf (if dir is true) or lastIndexOf
        if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
            return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
        } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
            } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
            }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
        }
    
        throw new TypeError('val must be string, number or Buffer')
    }
    
    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
        var indexSize = 1
        var arrLength = arr.length
        var valLength = val.length
    
        if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
            return -1
            }
            indexSize = 2
            arrLength /= 2
            valLength /= 2
            byteOffset /= 2
        }
        }
    
        function read (buf, i) {
        if (indexSize === 1) {
            return buf[i]
        } else {
            return buf.readUInt16BE(i * indexSize)
        }
        }
    
        var i
        if (dir) {
        var foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
            } else {
            if (foundIndex !== -1) i -= i - foundIndex
            foundIndex = -1
            }
        }
        } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
            var found = true
            for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
                found = false
                break
            }
            }
            if (found) return i
        }
        }
    
        return -1
    }
    
    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1
    }
    
    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }
    
    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }
    
    function hexWrite (buf, string, offset, length) {
        offset = Number(offset) || 0
        var remaining = buf.length - offset
        if (!length) {
        length = remaining
        } else {
        length = Number(length)
        if (length > remaining) {
            length = remaining
        }
        }
    
        var strLen = string.length
    
        if (length > strLen / 2) {
        length = strLen / 2
        }
        for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16)
        if (numberIsNaN(parsed)) return i
        buf[offset + i] = parsed
        }
        return i
    }
    
    function utf8Write (buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }
    
    function asciiWrite (buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length)
    }
    
    function latin1Write (buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length)
    }
    
    function base64Write (buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length)
    }
    
    function ucs2Write (buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }
    
    Buffer.prototype.write = function write (string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
        // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
        // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
        offset = offset >>> 0
        if (isFinite(length)) {
            length = length >>> 0
            if (encoding === undefined) encoding = 'utf8'
        } else {
            encoding = length
            length = undefined
        }
        } else {
        throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
        }
    
        var remaining = this.length - offset
        if (length === undefined || length > remaining) length = remaining
    
        if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
        }
    
        if (!encoding) encoding = 'utf8'
    
        var loweredCase = false
        for (;;) {
        switch (encoding) {
            case 'hex':
            return hexWrite(this, string, offset, length)
    
            case 'utf8':
            case 'utf-8':
            return utf8Write(this, string, offset, length)
    
            case 'ascii':
            return asciiWrite(this, string, offset, length)
    
            case 'latin1':
            case 'binary':
            return latin1Write(this, string, offset, length)
    
            case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)
    
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            return ucs2Write(this, string, offset, length)
    
            default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
        }
    }
    
    Buffer.prototype.toJSON = function toJSON () {
        return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    
    function base64Slice (buf, start, end) {
        if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
        } else {
        return base64.fromByteArray(buf.slice(start, end))
        }
    }
    
    function utf8Slice (buf, start, end) {
        end = Math.min(buf.length, end)
        var res = []
    
        var i = start
        while (i < end) {
        var firstByte = buf[i]
        var codePoint = null
        var bytesPerSequence = (firstByte > 0xEF) ? 4
            : (firstByte > 0xDF) ? 3
            : (firstByte > 0xBF) ? 2
            : 1
    
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint
    
            switch (bytesPerSequence) {
            case 1:
                if (firstByte < 0x80) {
                codePoint = firstByte
                }
                break
            case 2:
                secondByte = buf[i + 1]
                if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint
                }
                }
                break
            case 3:
                secondByte = buf[i + 1]
                thirdByte = buf[i + 2]
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint
                }
                }
                break
            case 4:
                secondByte = buf[i + 1]
                thirdByte = buf[i + 2]
                fourthByte = buf[i + 3]
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint
                }
                }
            }
        }
    
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD
            bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000
            res.push(codePoint >>> 10 & 0x3FF | 0xD800)
            codePoint = 0xDC00 | codePoint & 0x3FF
        }
    
        res.push(codePoint)
        i += bytesPerSequence
        }
    
        return decodeCodePointsArray(res)
    }
    
    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000
    
    function decodeCodePointsArray (codePoints) {
        var len = codePoints.length
        if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
        }
    
        // Decode in chunks to avoid "call stack size exceeded".
        var res = ''
        var i = 0
        while (i < len) {
        res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
        }
        return res
    }
    
    function asciiSlice (buf, start, end) {
        var ret = ''
        end = Math.min(buf.length, end)
    
        for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
        }
        return ret
    }
    
    function latin1Slice (buf, start, end) {
        var ret = ''
        end = Math.min(buf.length, end)
    
        for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
        }
        return ret
    }
    
    function hexSlice (buf, start, end) {
        var len = buf.length
    
        if (!start || start < 0) start = 0
        if (!end || end < 0 || end > len) end = len
    
        var out = ''
        for (var i = start; i < end; ++i) {
        out += toHex(buf[i])
        }
        return out
    }
    
    function utf16leSlice (buf, start, end) {
        var bytes = buf.slice(start, end)
        var res = ''
        for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
        }
        return res
    }
    
    Buffer.prototype.slice = function slice (start, end) {
        var len = this.length
        start = ~~start
        end = end === undefined ? len : ~~end
    
        if (start < 0) {
        start += len
        if (start < 0) start = 0
        } else if (start > len) {
        start = len
        }
    
        if (end < 0) {
        end += len
        if (end < 0) end = 0
        } else if (end > len) {
        end = len
        }
    
        if (end < start) end = start
    
        var newBuf = this.subarray(start, end)
        // Return an augmented `Uint8Array` instance
        newBuf.__proto__ = Buffer.prototype
        return newBuf
    }
    
    /*
        * Need to make sure that buffer isn't trying to write out of bounds.
        */
    function checkOffset (offset, ext, length) {
        if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }
    
    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)
    
        var val = this[offset]
        var mul = 1
        var i = 0
        while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
        }
    
        return val
    }
    
    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) {
        checkOffset(offset, byteLength, this.length)
        }
    
        var val = this[offset + --byteLength]
        var mul = 1
        while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul
        }
    
        return val
    }
    
    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 1, this.length)
        return this[offset]
    }
    
    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 2, this.length)
        return this[offset] | (this[offset + 1] << 8)
    }
    
    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 2, this.length)
        return (this[offset] << 8) | this[offset + 1]
    }
    
    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)
    
        return ((this[offset]) |
            (this[offset + 1] << 8) |
            (this[offset + 2] << 16)) +
            (this[offset + 3] * 0x1000000)
    }
    
    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)
    
        return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    }
    
    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)
    
        var val = this[offset]
        var mul = 1
        var i = 0
        while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
        }
        mul *= 0x80
    
        if (val >= mul) val -= Math.pow(2, 8 * byteLength)
    
        return val
    }
    
    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)
    
        var i = byteLength
        var mul = 1
        var val = this[offset + --i]
        while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
        }
        mul *= 0x80
    
        if (val >= mul) val -= Math.pow(2, 8 * byteLength)
    
        return val
    }
    
    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 1, this.length)
        if (!(this[offset] & 0x80)) return (this[offset])
        return ((0xff - this[offset] + 1) * -1)
    }
    
    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 2, this.length)
        var val = this[offset] | (this[offset + 1] << 8)
        return (val & 0x8000) ? val | 0xFFFF0000 : val
    }
    
    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 2, this.length)
        var val = this[offset + 1] | (this[offset] << 8)
        return (val & 0x8000) ? val | 0xFFFF0000 : val
    }
    
    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)
    
        return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    }
    
    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)
    
        return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    }
    
    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)
        return ieee754.read(this, offset, true, 23, 4)
    }
    
    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 4, this.length)
        return ieee754.read(this, offset, false, 23, 4)
    }
    
    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 8, this.length)
        return ieee754.read(this, offset, true, 52, 8)
    }
    
    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
        offset = offset >>> 0
        if (!noAssert) checkOffset(offset, 8, this.length)
        return ieee754.read(this, offset, false, 52, 8)
    }
    
    function checkInt (buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
        if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }
    
    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
        }
    
        var mul = 1
        var i = 0
        this[offset] = value & 0xFF
        while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
        }
    
        return offset + byteLength
    }
    
    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset >>> 0
        byteLength = byteLength >>> 0
        if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
        }
    
        var i = byteLength - 1
        var mul = 1
        this[offset + i] = value & 0xFF
        while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
        }
    
        return offset + byteLength
    }
    
    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
        this[offset] = (value & 0xff)
        return offset + 1
    }
    
    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
        return offset + 2
    }
    
    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
        this[offset] = (value >>> 8)
        this[offset + 1] = (value & 0xff)
        return offset + 2
    }
    
    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
        this[offset + 3] = (value >>> 24)
        this[offset + 2] = (value >>> 16)
        this[offset + 1] = (value >>> 8)
        this[offset] = (value & 0xff)
        return offset + 4
    }
    
    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
        this[offset] = (value >>> 24)
        this[offset + 1] = (value >>> 16)
        this[offset + 2] = (value >>> 8)
        this[offset + 3] = (value & 0xff)
        return offset + 4
    }
    
    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)
    
        checkInt(this, value, offset, byteLength, limit - 1, -limit)
        }
    
        var i = 0
        var mul = 1
        var sub = 0
        this[offset] = value & 0xFF
        while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
        }
    
        return offset + byteLength
    }
    
    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)
    
        checkInt(this, value, offset, byteLength, limit - 1, -limit)
        }
    
        var i = byteLength - 1
        var mul = 1
        var sub = 0
        this[offset + i] = value & 0xFF
        while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
        }
    
        return offset + byteLength
    }
    
    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
        if (value < 0) value = 0xff + value + 1
        this[offset] = (value & 0xff)
        return offset + 1
    }
    
    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
        return offset + 2
    }
    
    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
        this[offset] = (value >>> 8)
        this[offset + 1] = (value & 0xff)
        return offset + 2
    }
    
    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
        this[offset] = (value & 0xff)
        this[offset + 1] = (value >>> 8)
        this[offset + 2] = (value >>> 16)
        this[offset + 3] = (value >>> 24)
        return offset + 4
    }
    
    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
        if (value < 0) value = 0xffffffff + value + 1
        this[offset] = (value >>> 24)
        this[offset + 1] = (value >>> 16)
        this[offset + 2] = (value >>> 8)
        this[offset + 3] = (value & 0xff)
        return offset + 4
    }
    
    function checkIEEE754 (buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range')
        if (offset < 0) throw new RangeError('Index out of range')
    }
    
    function writeFloat (buf, value, offset, littleEndian, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4)
        return offset + 4
    }
    
    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert)
    }
    
    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert)
    }
    
    function writeDouble (buf, value, offset, littleEndian, noAssert) {
        value = +value
        offset = offset >>> 0
        if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8)
        return offset + 8
    }
    
    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert)
    }
    
    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert)
    }
    
    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
        if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
        if (!start) start = 0
        if (!end && end !== 0) end = this.length
        if (targetStart >= target.length) targetStart = target.length
        if (!targetStart) targetStart = 0
        if (end > 0 && end < start) end = start
    
        // Copy 0 bytes; we're done
        if (end === start) return 0
        if (target.length === 0 || this.length === 0) return 0
    
        // Fatal error conditions
        if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
        }
        if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
        if (end < 0) throw new RangeError('sourceEnd out of bounds')
    
        // Are we oob?
        if (end > this.length) end = this.length
        if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
        }
    
        var len = end - start
    
        if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end)
        } else if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (var i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start]
        }
        } else {
        Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
        )
        }
    
        return len
    }
    
    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
        // Handle string cases:
        if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start
            start = 0
            end = this.length
        } else if (typeof end === 'string') {
            encoding = end
            end = this.length
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
            var code = val.charCodeAt(0)
            if ((encoding === 'utf8' && code < 128) ||
                encoding === 'latin1') {
            // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code
            }
        }
        } else if (typeof val === 'number') {
        val = val & 255
        }
    
        // Invalid ranges are not set to a default, so can range check early.
        if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
        }
    
        if (end <= start) {
        return this
        }
    
        start = start >>> 0
        end = end === undefined ? this.length : end >>> 0
    
        if (!val) val = 0
    
        var i
        if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
            this[i] = val
        }
        } else {
        var bytes = Buffer.isBuffer(val)
            ? val
            : new Buffer(val, encoding)
        var len = bytes.length
        if (len === 0) {
            throw new TypeError('The value "' + val +
            '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len]
        }
        }
    
        return this
    }
    
    // HELPER FUNCTIONS
    // ================
    
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
    
    function base64clean (str) {
        // Node takes equal signs as end of the Base64 encoding
        str = str.split('=')[0]
        // Node strips out invalid characters like \n and \t from the string, base64-js does not
        str = str.trim().replace(INVALID_BASE64_RE, '')
        // Node converts strings with length < 2 to ''
        if (str.length < 2) return ''
        // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
        while (str.length % 4 !== 0) {
        str = str + '='
        }
        return str
    }
    
    function toHex (n) {
        if (n < 16) return '0' + n.toString(16)
        return n.toString(16)
    }
    
    function utf8ToBytes (string, units) {
        units = units || Infinity
        var codePoint
        var length = string.length
        var leadSurrogate = null
        var bytes = []
    
        for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)
    
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                continue
            } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                continue
            }
    
            // valid lead
            leadSurrogate = codePoint
    
            continue
            }
    
            // 2 leads in a row
            if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
            }
    
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }
    
        leadSurrogate = null
    
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break
            bytes.push(codePoint)
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break
            bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
            )
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break
            bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
            )
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break
            bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
            )
        } else {
            throw new Error('Invalid code point')
        }
        }
    
        return bytes
    }
    
    function asciiToBytes (str) {
        var byteArray = []
        for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
        }
        return byteArray
    }
    
    function utf16leToBytes (str, units) {
        var c, hi, lo
        var byteArray = []
        for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break
    
        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
        }
    
        return byteArray
    }
    
    function base64ToBytes (str) {
        return base64.toByteArray(base64clean(str))
    }
    
    function blitBuffer (src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
        }
        return i
    }
    
    // ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
    // but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
    function isArrayBuffer (obj) {
        return obj instanceof ArrayBuffer ||
        (obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' &&
            typeof obj.byteLength === 'number')
    }
    
    function numberIsNaN (obj) {
        return obj !== obj // eslint-disable-line no-self-compare
    }
    
    },{"base64-js":28,"ieee754":33}],31:[function(require,module,exports){
    (function (Buffer){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    
    function isArray(arg) {
        if (Array.isArray) {
        return Array.isArray(arg);
        }
        return objectToString(arg) === '[object Array]';
    }
    exports.isArray = isArray;
    
    function isBoolean(arg) {
        return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    
    function isNull(arg) {
        return arg === null;
    }
    exports.isNull = isNull;
    
    function isNullOrUndefined(arg) {
        return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    
    function isNumber(arg) {
        return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    
    function isString(arg) {
        return typeof arg === 'string';
    }
    exports.isString = isString;
    
    function isSymbol(arg) {
        return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    
    function isUndefined(arg) {
        return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    
    function isRegExp(re) {
        return objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    
    function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    
    function isDate(d) {
        return objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    
    function isError(e) {
        return (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    
    function isFunction(arg) {
        return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    
    function isPrimitive(arg) {
        return arg === null ||
                typeof arg === 'boolean' ||
                typeof arg === 'number' ||
                typeof arg === 'string' ||
                typeof arg === 'symbol' ||  // ES6 symbol
                typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    
    exports.isBuffer = Buffer.isBuffer;
    
    function objectToString(o) {
        return Object.prototype.toString.call(o);
    }
    
    }).call(this,{"isBuffer":require("../../is-buffer/index.js")})
    },{"../../is-buffer/index.js":35}],32:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    var objectCreate = Object.create || objectCreatePolyfill
    var objectKeys = Object.keys || objectKeysPolyfill
    var bind = Function.prototype.bind || functionBindPolyfill
    
    function EventEmitter() {
        if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
        this._events = objectCreate(null);
        this._eventsCount = 0;
        }
    
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;
    
    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;
    
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    
    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    var defaultMaxListeners = 10;
    
    var hasDefineProperty;
    try {
        var o = {};
        if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
        hasDefineProperty = o.x === 0;
    } catch (err) { hasDefineProperty = false }
    if (hasDefineProperty) {
        Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
        enumerable: true,
        get: function() {
            return defaultMaxListeners;
        },
        set: function(arg) {
            // check whether the input is a positive number (whose value is zero or
            // greater and not a NaN).
            if (typeof arg !== 'number' || arg < 0 || arg !== arg)
            throw new TypeError('"defaultMaxListeners" must be a positive number');
            defaultMaxListeners = arg;
        }
        });
    } else {
        EventEmitter.defaultMaxListeners = defaultMaxListeners;
    }
    
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== 'number' || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
        this._maxListeners = n;
        return this;
    };
    
    function $getMaxListeners(that) {
        if (that._maxListeners === undefined)
        return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
    }
    
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return $getMaxListeners(this);
    };
    
    // These standalone emit* functions are used to optimize calling of event
    // handlers for fast cases because emit() itself often has a variable number of
    // arguments and can be deoptimized because of that. These functions always have
    // the same number of arguments and thus do not get deoptimized, so the code
    // inside them can execute faster.
    function emitNone(handler, isFn, self) {
        if (isFn)
        handler.call(self);
        else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
            listeners[i].call(self);
        }
    }
    function emitOne(handler, isFn, self, arg1) {
        if (isFn)
        handler.call(self, arg1);
        else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
            listeners[i].call(self, arg1);
        }
    }
    function emitTwo(handler, isFn, self, arg1, arg2) {
        if (isFn)
        handler.call(self, arg1, arg2);
        else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
            listeners[i].call(self, arg1, arg2);
        }
    }
    function emitThree(handler, isFn, self, arg1, arg2, arg3) {
        if (isFn)
        handler.call(self, arg1, arg2, arg3);
        else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
            listeners[i].call(self, arg1, arg2, arg3);
        }
    }
    
    function emitMany(handler, isFn, self, args) {
        if (isFn)
        handler.apply(self, args);
        else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
            listeners[i].apply(self, args);
        }
    }
    
    EventEmitter.prototype.emit = function emit(type) {
        var er, handler, len, args, i, events;
        var doError = (type === 'error');
    
        events = this._events;
        if (events)
        doError = (doError && events.error == null);
        else if (!doError)
        return false;
    
        // If there is no 'error' event listener then throw.
        if (doError) {
        if (arguments.length > 1)
            er = arguments[1];
        if (er instanceof Error) {
            throw er; // Unhandled 'error' event
        } else {
            // At least give some kind of context to the user
            var err = new Error('Unhandled "error" event. (' + er + ')');
            err.context = er;
            throw err;
        }
        return false;
        }
    
        handler = events[type];
    
        if (!handler)
        return false;
    
        var isFn = typeof handler === 'function';
        len = arguments.length;
        switch (len) {
            // fast cases
        case 1:
            emitNone(handler, isFn, this);
            break;
        case 2:
            emitOne(handler, isFn, this, arguments[1]);
            break;
        case 3:
            emitTwo(handler, isFn, this, arguments[1], arguments[2]);
            break;
        case 4:
            emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
            break;
            // slower
        default:
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
            emitMany(handler, isFn, this, args);
        }
    
        return true;
    };
    
    function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
    
        if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
    
        events = target._events;
        if (!events) {
        events = target._events = objectCreate(null);
        target._eventsCount = 0;
        } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener) {
            target.emit('newListener', type,
                listener.listener ? listener.listener : listener);
    
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
        }
    
        if (!existing) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
        } else {
        if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] =
                prepend ? [listener, existing] : [existing, listener];
        } else {
            // If we've already got an array, just append.
            if (prepend) {
            existing.unshift(listener);
            } else {
            existing.push(listener);
            }
        }
    
        // Check for listener leak
        if (!existing.warned) {
            m = $getMaxListeners(target);
            if (m && m > 0 && existing.length > m) {
            existing.warned = true;
            var w = new Error('Possible EventEmitter memory leak detected. ' +
                existing.length + ' "' + String(type) + '" listeners ' +
                'added. Use emitter.setMaxListeners() to ' +
                'increase limit.');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            if (typeof console === 'object' && console.warn) {
                console.warn('%s: %s', w.name, w.message);
            }
            }
        }
        }
    
        return target;
    }
    
    EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
    };
    
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    
    EventEmitter.prototype.prependListener =
        function prependListener(type, listener) {
            return _addListener(this, type, listener, true);
        };
    
    function onceWrapper() {
        if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        switch (arguments.length) {
            case 0:
            return this.listener.call(this.target);
            case 1:
            return this.listener.call(this.target, arguments[0]);
            case 2:
            return this.listener.call(this.target, arguments[0], arguments[1]);
            case 3:
            return this.listener.call(this.target, arguments[0], arguments[1],
                arguments[2]);
            default:
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; ++i)
                args[i] = arguments[i];
            this.listener.apply(this.target, args);
        }
        }
    }
    
    function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
        var wrapped = bind.call(onceWrapper, state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
    }
    
    EventEmitter.prototype.once = function once(type, listener) {
        if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
        this.on(type, _onceWrap(this, type, listener));
        return this;
    };
    
    EventEmitter.prototype.prependOnceListener =
        function prependOnceListener(type, listener) {
            if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');
            this.prependListener(type, _onceWrap(this, type, listener));
            return this;
        };
    
    // Emits a 'removeListener' event if and only if the listener was removed.
    EventEmitter.prototype.removeListener =
        function removeListener(type, listener) {
            var list, events, position, i, originalListener;
    
            if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');
    
            events = this._events;
            if (!events)
            return this;
    
            list = events[type];
            if (!list)
            return this;
    
            if (list === listener || list.listener === listener) {
            if (--this._eventsCount === 0)
                this._events = objectCreate(null);
            else {
                delete events[type];
                if (events.removeListener)
                this.emit('removeListener', type, list.listener || listener);
            }
            } else if (typeof list !== 'function') {
            position = -1;
    
            for (i = list.length - 1; i >= 0; i--) {
                if (list[i] === listener || list[i].listener === listener) {
                originalListener = list[i].listener;
                position = i;
                break;
                }
            }
    
            if (position < 0)
                return this;
    
            if (position === 0)
                list.shift();
            else
                spliceOne(list, position);
    
            if (list.length === 1)
                events[type] = list[0];
    
            if (events.removeListener)
                this.emit('removeListener', type, originalListener || listener);
            }
    
            return this;
        };
    
    EventEmitter.prototype.removeAllListeners =
        function removeAllListeners(type) {
            var listeners, events, i;
    
            events = this._events;
            if (!events)
            return this;
    
            // not listening for removeListener, no need to emit
            if (!events.removeListener) {
            if (arguments.length === 0) {
                this._events = objectCreate(null);
                this._eventsCount = 0;
            } else if (events[type]) {
                if (--this._eventsCount === 0)
                this._events = objectCreate(null);
                else
                delete events[type];
            }
            return this;
            }
    
            // emit removeListener for all listeners on all events
            if (arguments.length === 0) {
            var keys = objectKeys(events);
            var key;
            for (i = 0; i < keys.length; ++i) {
                key = keys[i];
                if (key === 'removeListener') continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = objectCreate(null);
            this._eventsCount = 0;
            return this;
            }
    
            listeners = events[type];
    
            if (typeof listeners === 'function') {
            this.removeListener(type, listeners);
            } else if (listeners) {
            // LIFO order
            for (i = listeners.length - 1; i >= 0; i--) {
                this.removeListener(type, listeners[i]);
            }
            }
    
            return this;
        };
    
    EventEmitter.prototype.listeners = function listeners(type) {
        var evlistener;
        var ret;
        var events = this._events;
    
        if (!events)
        ret = [];
        else {
        evlistener = events[type];
        if (!evlistener)
            ret = [];
        else if (typeof evlistener === 'function')
            ret = [evlistener.listener || evlistener];
        else
            ret = unwrapListeners(evlistener);
        }
    
        return ret;
    };
    
    EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
        } else {
        return listenerCount.call(emitter, type);
        }
    };
    
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
        var events = this._events;
    
        if (events) {
        var evlistener = events[type];
    
        if (typeof evlistener === 'function') {
            return 1;
        } else if (evlistener) {
            return evlistener.length;
        }
        }
    
        return 0;
    }
    
    EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
    
    // About 1.5x faster than the two-arg version of Array#splice().
    function spliceOne(list, index) {
        for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
        list[i] = list[k];
        list.pop();
    }
    
    function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
        return copy;
    }
    
    function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
        }
        return ret;
    }
    
    function objectCreatePolyfill(proto) {
        var F = function() {};
        F.prototype = proto;
        return new F;
    }
    function objectKeysPolyfill(obj) {
        var keys = [];
        for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
        keys.push(k);
        }
        return k;
    }
    function functionBindPolyfill(context) {
        var fn = this;
        return function () {
        return fn.apply(context, arguments);
        };
    }
    
    },{}],33:[function(require,module,exports){
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m
        var eLen = (nBytes * 8) - mLen - 1
        var eMax = (1 << eLen) - 1
        var eBias = eMax >> 1
        var nBits = -7
        var i = isLE ? (nBytes - 1) : 0
        var d = isLE ? -1 : 1
        var s = buffer[offset + i]
    
        i += d
    
        e = s & ((1 << (-nBits)) - 1)
        s >>= (-nBits)
        nBits += eLen
        for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
    
        m = e & ((1 << (-nBits)) - 1)
        e >>= (-nBits)
        nBits += mLen
        for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
    
        if (e === 0) {
        e = 1 - eBias
        } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
        } else {
        m = m + Math.pow(2, mLen)
        e = e - eBias
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }
    
    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c
        var eLen = (nBytes * 8) - mLen - 1
        var eMax = (1 << eLen) - 1
        var eBias = eMax >> 1
        var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
        var i = isLE ? 0 : (nBytes - 1)
        var d = isLE ? 1 : -1
        var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
    
        value = Math.abs(value)
    
        if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0
        e = eMax
        } else {
        e = Math.floor(Math.log(value) / Math.LN2)
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--
            c *= 2
        }
        if (e + eBias >= 1) {
            value += rt / c
        } else {
            value += rt * Math.pow(2, 1 - eBias)
        }
        if (value * c >= 2) {
            e++
            c /= 2
        }
    
        if (e + eBias >= eMax) {
            m = 0
            e = eMax
        } else if (e + eBias >= 1) {
            m = ((value * c) - 1) * Math.pow(2, mLen)
            e = e + eBias
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
            e = 0
        }
        }
    
        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    
        e = (e << mLen) | m
        eLen += mLen
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    
        buffer[offset + i - d] |= s * 128
    }
    
    },{}],34:[function(require,module,exports){
    arguments[4][22][0].apply(exports,arguments)
    },{"dup":22}],35:[function(require,module,exports){
    /*!
        * Determine if an object is a Buffer
        *
        * @author   Feross Aboukhadijeh <https://feross.org>
        * @license  MIT
        */
    
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
    }
    
    function isBuffer (obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }
    
    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
    }
    
    },{}],36:[function(require,module,exports){
    var toString = {}.toString;
    
    module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
    };
    
    },{}],37:[function(require,module,exports){
    (function (process){
    'use strict';
    
    if (!process.version ||
        process.version.indexOf('v0.') === 0 ||
        process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
        module.exports = { nextTick: nextTick };
    } else {
        module.exports = process
    }
    
    function nextTick(fn, arg1, arg2, arg3) {
        if (typeof fn !== 'function') {
        throw new TypeError('"callback" argument must be a function');
        }
        var len = arguments.length;
        var args, i;
        switch (len) {
        case 0:
        case 1:
        return process.nextTick(fn);
        case 2:
        return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
        });
        case 3:
        return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
        });
        case 4:
        return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
        });
        default:
        args = new Array(len - 1);
        i = 0;
        while (i < args.length) {
            args[i++] = arguments[i];
        }
        return process.nextTick(function afterTick() {
            fn.apply(null, args);
        });
        }
    }
    
    
    }).call(this,require('_process'))
    },{"_process":38}],38:[function(require,module,exports){
    // shim for using process in browser
    var process = module.exports = {};
    
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    
    var cachedSetTimeout;
    var cachedClearTimeout;
    
    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    } ())
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    
    
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    
    
    
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
    
        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    
    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    
    process.listeners = function (name) { return [] }
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };
    
    },{}],39:[function(require,module,exports){
    module.exports = require('./lib/_stream_duplex.js');
    
    },{"./lib/_stream_duplex.js":40}],40:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // a duplex stream is just a stream that is both readable and writable.
    // Since JS doesn't have multiple prototypal inheritance, this class
    // prototypally inherits from Readable, and then parasitically from
    // Writable.
    
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    /*<replacement>*/
    var objectKeys = Object.keys || function (obj) {
        var keys = [];
        for (var key in obj) {
        keys.push(key);
        }return keys;
    };
    /*</replacement>*/
    
    module.exports = Duplex;
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    var Readable = require('./_stream_readable');
    var Writable = require('./_stream_writable');
    
    util.inherits(Duplex, Readable);
    
    {
        // avoid scope creep, the keys array can then be collected
        var keys = objectKeys(Writable.prototype);
        for (var v = 0; v < keys.length; v++) {
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
        }
    }
    
    function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
    
        Readable.call(this, options);
        Writable.call(this, options);
    
        if (options && options.readable === false) this.readable = false;
    
        if (options && options.writable === false) this.writable = false;
    
        this.allowHalfOpen = true;
        if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    
        this.once('end', onend);
    }
    
    Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function () {
        return this._writableState.highWaterMark;
        }
    });
    
    // the no-half-open enforcer
    function onend() {
        // if we allow half-open state, or if the writable side ended,
        // then we're ok.
        if (this.allowHalfOpen || this._writableState.ended) return;
    
        // no more data can be written.
        // But allow more writes to happen in this tick.
        pna.nextTick(onEndNT, this);
    }
    
    function onEndNT(self) {
        self.end();
    }
    
    Object.defineProperty(Duplex.prototype, 'destroyed', {
        get: function () {
        if (this._readableState === undefined || this._writableState === undefined) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
            return;
        }
    
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
        }
    });
    
    Duplex.prototype._destroy = function (err, cb) {
        this.push(null);
        this.end();
    
        pna.nextTick(cb, err);
    };
    },{"./_stream_readable":42,"./_stream_writable":44,"core-util-is":31,"inherits":34,"process-nextick-args":37}],41:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // a passthrough stream.
    // basically just the most minimal sort of Transform stream.
    // Every written chunk gets output as-is.
    
    'use strict';
    
    module.exports = PassThrough;
    
    var Transform = require('./_stream_transform');
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    util.inherits(PassThrough, Transform);
    
    function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
    
        Transform.call(this, options);
    }
    
    PassThrough.prototype._transform = function (chunk, encoding, cb) {
        cb(null, chunk);
    };
    },{"./_stream_transform":43,"core-util-is":31,"inherits":34}],42:[function(require,module,exports){
    (function (process,global){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    module.exports = Readable;
    
    /*<replacement>*/
    var isArray = require('isarray');
    /*</replacement>*/
    
    /*<replacement>*/
    var Duplex;
    /*</replacement>*/
    
    Readable.ReadableState = ReadableState;
    
    /*<replacement>*/
    var EE = require('events').EventEmitter;
    
    var EElistenerCount = function (emitter, type) {
        return emitter.listeners(type).length;
    };
    /*</replacement>*/
    
    /*<replacement>*/
    var Stream = require('./internal/streams/stream');
    /*</replacement>*/
    
    /*<replacement>*/
    
    var Buffer = require('safe-buffer').Buffer;
    var OurUint8Array = global.Uint8Array || function () {};
    function _uint8ArrayToBuffer(chunk) {
        return Buffer.from(chunk);
    }
    function _isUint8Array(obj) {
        return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    
    /*</replacement>*/
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    /*<replacement>*/
    var debugUtil = require('util');
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
        debug = debugUtil.debuglog('stream');
    } else {
        debug = function () {};
    }
    /*</replacement>*/
    
    var BufferList = require('./internal/streams/BufferList');
    var destroyImpl = require('./internal/streams/destroy');
    var StringDecoder;
    
    util.inherits(Readable, Stream);
    
    var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
    
    function prependListener(emitter, event, fn) {
        // Sadly this is not cacheable as some libraries bundle their own
        // event emitter implementation with them.
        if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
    
        // This is a hack to make sure that our error handler is attached before any
        // userland ones.  NEVER DO THIS. This is here only because this code needs
        // to continue to work with older versions of Node.js that do not include
        // the prependListener() method. The goal is to eventually remove this hack.
        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
    }
    
    function ReadableState(options, stream) {
        Duplex = Duplex || require('./_stream_duplex');
    
        options = options || {};
    
        // Duplex streams are both readable and writable, but share
        // the same options object.
        // However, some cases require setting options to different
        // values for the readable and the writable sides of the duplex stream.
        // These options can be provided separately as readableXXX and writableXXX.
        var isDuplex = stream instanceof Duplex;
    
        // object stream flag. Used to make read(n) ignore n and to
        // make all the buffer merging and length checks go away
        this.objectMode = !!options.objectMode;
    
        if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    
        // the point at which it stops calling _read() to fill the buffer
        // Note: 0 is a valid value, means "don't call _read preemptively ever"
        var hwm = options.highWaterMark;
        var readableHwm = options.readableHighWaterMark;
        var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    
        if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;
    
        // cast to ints.
        this.highWaterMark = Math.floor(this.highWaterMark);
    
        // A linked list is used to store data chunks instead of an array because the
        // linked list can remove elements from the beginning faster than
        // array.shift()
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
    
        // a flag to be able to tell if the event 'readable'/'data' is emitted
        // immediately, or on a later tick.  We set this to true at first, because
        // any actions that shouldn't happen until "later" should generally also
        // not happen before the first read call.
        this.sync = true;
    
        // whenever we return null, then we set a flag to say
        // that we're awaiting a 'readable' event emission.
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
    
        // has it been destroyed
        this.destroyed = false;
    
        // Crypto is kind of old and crusty.  Historically, its default string
        // encoding is 'binary' so we have to make this configurable.
        // Everything else in the universe uses 'utf8', though.
        this.defaultEncoding = options.defaultEncoding || 'utf8';
    
        // the number of writers that are awaiting a drain event in .pipe()s
        this.awaitDrain = 0;
    
        // if true, a maybeReadMore has been scheduled
        this.readingMore = false;
    
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
        }
    }
    
    function Readable(options) {
        Duplex = Duplex || require('./_stream_duplex');
    
        if (!(this instanceof Readable)) return new Readable(options);
    
        this._readableState = new ReadableState(options, this);
    
        // legacy
        this.readable = true;
    
        if (options) {
        if (typeof options.read === 'function') this._read = options.read;
    
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        }
    
        Stream.call(this);
    }
    
    Object.defineProperty(Readable.prototype, 'destroyed', {
        get: function () {
        if (this._readableState === undefined) {
            return false;
        }
        return this._readableState.destroyed;
        },
        set: function (value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
            return;
        }
    
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        }
    });
    
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function (err, cb) {
        this.push(null);
        cb(err);
    };
    
    // Manually shove something into the read() buffer.
    // This returns true if the highWaterMark has not been hit yet,
    // similar to how Writable.write() returns true if you should
    // write() some more.
    Readable.prototype.push = function (chunk, encoding) {
        var state = this._readableState;
        var skipChunkCheck;
    
        if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
            chunk = Buffer.from(chunk, encoding);
            encoding = '';
            }
            skipChunkCheck = true;
        }
        } else {
        skipChunkCheck = true;
        }
    
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    
    // Unshift should *always* be something directly out of read()
    Readable.prototype.unshift = function (chunk) {
        return readableAddChunk(this, chunk, null, true, false);
    };
    
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
        var state = stream._readableState;
        if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
        } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
            stream.emit('error', er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
            }
    
            if (addToFront) {
            if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
            stream.emit('error', new Error('stream.push() after EOF'));
            } else {
            state.reading = false;
            if (state.decoder && !encoding) {
                chunk = state.decoder.write(chunk);
                if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
            } else {
                addChunk(stream, state, chunk, false);
            }
            }
        } else if (!addToFront) {
            state.reading = false;
        }
        }
    
        return needMoreData(state);
    }
    
    function addChunk(stream, state, chunk, addToFront) {
        if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
        } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    
        if (state.needReadable) emitReadable(stream);
        }
        maybeReadMore(stream, state);
    }
    
    function chunkInvalid(state, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
        }
        return er;
    }
    
    // if it's past the high water mark, we can push in some more.
    // Also, if we have no data yet, we can stand some
    // more bytes.  This is to work around cases where hwm=0,
    // such as the repl.  Also, if the push() triggered a
    // readable event, and the user called read(largeNumber) such that
    // needReadable was set, then we ought to push more, so that another
    // 'readable' event will be triggered.
    function needMoreData(state) {
        return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    
    Readable.prototype.isPaused = function () {
        return this._readableState.flowing === false;
    };
    
    // backwards compatibility.
    Readable.prototype.setEncoding = function (enc) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this._readableState.decoder = new StringDecoder(enc);
        this._readableState.encoding = enc;
        return this;
    };
    
    // Don't raise the hwm > 8MB
    var MAX_HWM = 0x800000;
    function computeNewHighWaterMark(n) {
        if (n >= MAX_HWM) {
        n = MAX_HWM;
        } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
        }
        return n;
    }
    
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function howMuchToRead(n, state) {
        if (n <= 0 || state.length === 0 && state.ended) return 0;
        if (state.objectMode) return 1;
        if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
        }
        // If we're asking for more than the current hwm, then raise the hwm.
        if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
        if (n <= state.length) return n;
        // Don't have enough
        if (!state.ended) {
        state.needReadable = true;
        return 0;
        }
        return state.length;
    }
    
    // you can override either this method, or the async _read(n) below.
    Readable.prototype.read = function (n) {
        debug('read', n);
        n = parseInt(n, 10);
        var state = this._readableState;
        var nOrig = n;
    
        if (n !== 0) state.emittedReadable = false;
    
        // if we're doing read(0) to trigger a readable event, but we
        // already have a bunch of data in the buffer, then just trigger
        // the 'readable' event and move on.
        if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
        return null;
        }
    
        n = howMuchToRead(n, state);
    
        // if we've ended, and we're now clear, then finish it up.
        if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
        }
    
        // All the actual chunk generation logic needs to be
        // *below* the call to _read.  The reason is that in certain
        // synthetic stream cases, such as passthrough streams, _read
        // may be a completely synchronous operation which may change
        // the state of the read buffer, providing enough data when
        // before there was *not* enough.
        //
        // So, the steps are:
        // 1. Figure out what the state of things will be after we do
        // a read from the buffer.
        //
        // 2. If that resulting state will trigger a _read, then call _read.
        // Note that this may be asynchronous, or synchronous.  Yes, it is
        // deeply ugly to write APIs this way, but that still doesn't mean
        // that the Readable class should behave improperly, as streams are
        // designed to be sync/async agnostic.
        // Take note if the _read call is sync or async (ie, if the read call
        // has returned yet), so that we know whether or not it's safe to emit
        // 'readable' etc.
        //
        // 3. Actually pull the requested chunks out of the buffer and return.
    
        // if we need a readable event, then we need to do some reading.
        var doRead = state.needReadable;
        debug('need readable', doRead);
    
        // if we currently have less than the highWaterMark, then also read some
        if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
        }
    
        // however, if we've ended, then there's no point, and if we're already
        // reading, then it's unnecessary.
        if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
        } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
        }
    
        var ret;
        if (n > 0) ret = fromList(n, state);else ret = null;
    
        if (ret === null) {
        state.needReadable = true;
        n = 0;
        } else {
        state.length -= n;
        }
    
        if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
    
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
        }
    
        if (ret !== null) this.emit('data', ret);
    
        return ret;
    };
    
    function onEofChunk(stream, state) {
        if (state.ended) return;
        if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
        }
        state.ended = true;
    
        // emit 'readable' now to make sure it gets picked up.
        emitReadable(stream);
    }
    
    // Don't emit readable right away in sync mode, because this can trigger
    // another read() call => stack overflow.  This way, it might trigger
    // a nextTick recursion warning, but that's not so bad.
    function emitReadable(stream) {
        var state = stream._readableState;
        state.needReadable = false;
        if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
        }
    }
    
    function emitReadable_(stream) {
        debug('emit readable');
        stream.emit('readable');
        flow(stream);
    }
    
    // at this point, the user has presumably seen the 'readable' event,
    // and called read() to consume some data.  that may have triggered
    // in turn another _read(n) call, in which case reading = true if
    // it's in progress.
    // However, if we're not ended, or reading, and the length < hwm,
    // then go ahead and try to read some more preemptively.
    function maybeReadMore(stream, state) {
        if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
        }
    }
    
    function maybeReadMore_(stream, state) {
        var len = state.length;
        while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
            // didn't get any data, stop spinning.
            break;else len = state.length;
        }
        state.readingMore = false;
    }
    
    // abstract method.  to be overridden in specific implementation classes.
    // call cb(er, data) where data is <= n in length.
    // for virtual (non-string, non-buffer) streams, "length" is somewhat
    // arbitrary, and perhaps not very meaningful.
    Readable.prototype._read = function (n) {
        this.emit('error', new Error('_read() is not implemented'));
    };
    
    Readable.prototype.pipe = function (dest, pipeOpts) {
        var src = this;
        var state = this._readableState;
    
        switch (state.pipesCount) {
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [state.pipes, dest];
            break;
        default:
            state.pipes.push(dest);
            break;
        }
        state.pipesCount += 1;
        debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    
        var endFn = doEnd ? onend : unpipe;
        if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);
    
        dest.on('unpipe', onunpipe);
        function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
            }
        }
        }
    
        function onend() {
        debug('onend');
        dest.end();
        }
    
        // when the dest drains, it reduces the awaitDrain counter
        // on the source.  This would be more elegant with a .once()
        // handler in flow(), but adding and removing repeatedly is
        // too slow.
        var ondrain = pipeOnDrain(src);
        dest.on('drain', ondrain);
    
        var cleanedUp = false;
        function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
    
        cleanedUp = true;
    
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
        }
    
        // If the user pushes more data while we're writing to dest then we'll end up
        // in ondata again. However, we only want to increase awaitDrain once because
        // dest will only emit one 'drain' event for the multiple writes.
        // => Introduce a guard on increasing awaitDrain.
        var increasedAwaitDrain = false;
        src.on('data', ondata);
        function ondata(chunk) {
        debug('ondata');
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug('false write response, pause', src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
            }
            src.pause();
        }
        }
    
        // if the dest has an error, then stop piping into it.
        // however, don't suppress the throwing behavior for this.
        function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
        }
    
        // Make sure our error handler is attached before userland ones.
        prependListener(dest, 'error', onerror);
    
        // Both close and finish should trigger unpipe, but only once.
        function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
        }
        dest.once('close', onclose);
        function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
        }
        dest.once('finish', onfinish);
    
        function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
        }
    
        // tell the dest that it's being piped to
        dest.emit('pipe', src);
    
        // start the flow if it hasn't been started already.
        if (!state.flowing) {
        debug('pipe resume');
        src.resume();
        }
    
        return dest;
    };
    
    function pipeOnDrain(src) {
        return function () {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
        };
    }
    
    Readable.prototype.unpipe = function (dest) {
        var state = this._readableState;
        var unpipeInfo = { hasUnpiped: false };
    
        // if we're not piping anywhere, then do nothing.
        if (state.pipesCount === 0) return this;
    
        // just one destination.  most common case.
        if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
    
        if (!dest) dest = state.pipes;
    
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
        }
    
        // slow case. multiple pipe destinations.
    
        if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
    
        for (var i = 0; i < len; i++) {
            dests[i].emit('unpipe', this, unpipeInfo);
        }return this;
        }
    
        // try to find the right one.
        var index = indexOf(state.pipes, dest);
        if (index === -1) return this;
    
        state.pipes.splice(index, 1);
        state.pipesCount -= 1;
        if (state.pipesCount === 1) state.pipes = state.pipes[0];
    
        dest.emit('unpipe', this, unpipeInfo);
    
        return this;
    };
    
    // set up data events if they are asked for
    // Ensure readable listeners eventually get something
    Readable.prototype.on = function (ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
    
        if (ev === 'data') {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
        } else if (ev === 'readable') {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.emittedReadable = false;
            if (!state.reading) {
            pna.nextTick(nReadingNextTick, this);
            } else if (state.length) {
            emitReadable(this);
            }
        }
        }
    
        return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    
    function nReadingNextTick(self) {
        debug('readable nexttick read 0');
        self.read(0);
    }
    
    // pause() and resume() are remnants of the legacy readable stream API
    // If the user uses them, then switch into old mode.
    Readable.prototype.resume = function () {
        var state = this._readableState;
        if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        resume(this, state);
        }
        return this;
    };
    
    function resume(stream, state) {
        if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
        }
    }
    
    function resume_(stream, state) {
        if (!state.reading) {
        debug('resume read 0');
        stream.read(0);
        }
    
        state.resumeScheduled = false;
        state.awaitDrain = 0;
        stream.emit('resume');
        flow(stream);
        if (state.flowing && !state.reading) stream.read(0);
    }
    
    Readable.prototype.pause = function () {
        debug('call pause flowing=%j', this._readableState.flowing);
        if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
        }
        return this;
    };
    
    function flow(stream) {
        var state = stream._readableState;
        debug('flow', state.flowing);
        while (state.flowing && stream.read() !== null) {}
    }
    
    // wrap an old-style stream as the async data source.
    // This is *not* part of the readable stream interface.
    // It is an ugly unfortunate mess of history.
    Readable.prototype.wrap = function (stream) {
        var _this = this;
    
        var state = this._readableState;
        var paused = false;
    
        stream.on('end', function () {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
    
        _this.push(null);
        });
    
        stream.on('data', function (chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
    
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
    
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
        });
    
        // proxy all the other methods.
        // important when wrapping filters and duplexes.
        for (var i in stream) {
        if (this[i] === undefined && typeof stream[i] === 'function') {
            this[i] = function (method) {
            return function () {
                return stream[method].apply(stream, arguments);
            };
            }(i);
        }
        }
    
        // proxy certain important events.
        for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
        }
    
        // when we try to consume some more bytes, simply unpause the
        // underlying stream.
        this._read = function (n) {
        debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
        };
    
        return this;
    };
    
    Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function () {
        return this._readableState.highWaterMark;
        }
    });
    
    // exposed for testing purposes only.
    Readable._fromList = fromList;
    
    // Pluck off n bytes from an array of buffers.
    // Length is the combined lengths of all the buffers in the list.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromList(n, state) {
        // nothing buffered
        if (state.length === 0) return null;
    
        var ret;
        if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
        state.buffer.clear();
        } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
        }
    
        return ret;
    }
    
    // Extracts only enough buffered data to satisfy the amount requested.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromListPartial(n, list, hasStrings) {
        var ret;
        if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
        } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
        } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
        }
        return ret;
    }
    
    // Copies a specified amount of characters from the list of buffered data
    // chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBufferString(n, list) {
        var p = list.head;
        var c = 1;
        var ret = p.data;
        n -= ret.length;
        while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
            if (nb === str.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
            } else {
            list.head = p;
            p.data = str.slice(nb);
            }
            break;
        }
        ++c;
        }
        list.length -= c;
        return ret;
    }
    
    // Copies a specified amount of bytes from the list of buffered data chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBuffer(n, list) {
        var ret = Buffer.allocUnsafe(n);
        var p = list.head;
        var c = 1;
        p.data.copy(ret);
        n -= p.data.length;
        while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
            if (nb === buf.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
            } else {
            list.head = p;
            p.data = buf.slice(nb);
            }
            break;
        }
        ++c;
        }
        list.length -= c;
        return ret;
    }
    
    function endReadable(stream) {
        var state = stream._readableState;
    
        // If we get here before consuming all the bytes, then that is a
        // bug in node.  Should never happen.
        if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    
        if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
        }
    }
    
    function endReadableNT(state, stream) {
        // Check that we didn't get one last unshift.
        if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        }
    }
    
    function indexOf(xs, x) {
        for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
        }
        return -1;
    }
    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"./_stream_duplex":40,"./internal/streams/BufferList":45,"./internal/streams/destroy":46,"./internal/streams/stream":47,"_process":38,"core-util-is":31,"events":32,"inherits":34,"isarray":36,"process-nextick-args":37,"safe-buffer":53,"string_decoder/":48,"util":29}],43:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // a transform stream is a readable/writable stream where you do
    // something with the data.  Sometimes it's called a "filter",
    // but that's not a great name for it, since that implies a thing where
    // some bits pass through, and others are simply ignored.  (That would
    // be a valid example of a transform, of course.)
    //
    // While the output is causally related to the input, it's not a
    // necessarily symmetric or synchronous transformation.  For example,
    // a zlib stream might take multiple plain-text writes(), and then
    // emit a single compressed chunk some time in the future.
    //
    // Here's how this works:
    //
    // The Transform stream has all the aspects of the readable and writable
    // stream classes.  When you write(chunk), that calls _write(chunk,cb)
    // internally, and returns false if there's a lot of pending writes
    // buffered up.  When you call read(), that calls _read(n) until
    // there's enough pending readable data buffered up.
    //
    // In a transform stream, the written data is placed in a buffer.  When
    // _read(n) is called, it transforms the queued up data, calling the
    // buffered _write cb's as it consumes chunks.  If consuming a single
    // written chunk would result in multiple output chunks, then the first
    // outputted bit calls the readcb, and subsequent chunks just go into
    // the read buffer, and will cause it to emit 'readable' if necessary.
    //
    // This way, back-pressure is actually determined by the reading side,
    // since _read has to be called to start processing a new chunk.  However,
    // a pathological inflate type of transform can cause excessive buffering
    // here.  For example, imagine a stream where every byte of input is
    // interpreted as an integer from 0-255, and then results in that many
    // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
    // 1kb of data being output.  In this case, you could write a very small
    // amount of input, and end up with a very large amount of output.  In
    // such a pathological inflating mechanism, there'd be no way to tell
    // the system to stop doing the transform.  A single 4MB write could
    // cause the system to run out of memory.
    //
    // However, even in such a pathological case, only a single written chunk
    // would be consumed, and then the rest would wait (un-transformed) until
    // the results of the previous transformed chunk were consumed.
    
    'use strict';
    
    module.exports = Transform;
    
    var Duplex = require('./_stream_duplex');
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    util.inherits(Transform, Duplex);
    
    function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
    
        var cb = ts.writecb;
    
        if (!cb) {
        return this.emit('error', new Error('write callback called multiple times'));
        }
    
        ts.writechunk = null;
        ts.writecb = null;
    
        if (data != null) // single equals check for both `null` and `undefined`
        this.push(data);
    
        cb(er);
    
        var rs = this._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
        }
    }
    
    function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
    
        Duplex.call(this, options);
    
        this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
        };
    
        // start out asking for a readable event once data is transformed.
        this._readableState.needReadable = true;
    
        // we have implemented the _read method, and done the other things
        // that Readable wants before the first _read call, so unset the
        // sync guard flag.
        this._readableState.sync = false;
    
        if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
    
        if (typeof options.flush === 'function') this._flush = options.flush;
        }
    
        // When the writable side finishes, then flush out anything remaining.
        this.on('prefinish', prefinish);
    }
    
    function prefinish() {
        var _this = this;
    
        if (typeof this._flush === 'function') {
        this._flush(function (er, data) {
            done(_this, er, data);
        });
        } else {
        done(this, null, null);
        }
    }
    
    Transform.prototype.push = function (chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
    };
    
    // This is the part where you do stuff!
    // override this function in implementation classes.
    // 'chunk' is an input chunk.
    //
    // Call `push(newChunk)` to pass along transformed output
    // to the readable side.  You may call 'push' zero or more times.
    //
    // Call `cb(err)` when you are done with this chunk.  If you pass
    // an error, then that'll put the hurt on the whole operation.  If you
    // never call cb(), then you'll never get another chunk.
    Transform.prototype._transform = function (chunk, encoding, cb) {
        throw new Error('_transform() is not implemented');
    };
    
    Transform.prototype._write = function (chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
    };
    
    // Doesn't matter what the args are here.
    // _transform does all the work.
    // That we got here means that the readable side wants more data.
    Transform.prototype._read = function (n) {
        var ts = this._transformState;
    
        if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
        }
    };
    
    Transform.prototype._destroy = function (err, cb) {
        var _this2 = this;
    
        Duplex.prototype._destroy.call(this, err, function (err2) {
        cb(err2);
        _this2.emit('close');
        });
    };
    
    function done(stream, er, data) {
        if (er) return stream.emit('error', er);
    
        if (data != null) // single equals check for both `null` and `undefined`
        stream.push(data);
    
        // if there's nothing in the write buffer, then that means
        // that nothing more will ever be provided
        if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
    
        if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
    
        return stream.push(null);
    }
    },{"./_stream_duplex":40,"core-util-is":31,"inherits":34}],44:[function(require,module,exports){
    (function (process,global){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // A bit simpler than readable streams.
    // Implement an async ._write(chunk, encoding, cb), and it'll handle all
    // the drain event emission and buffering.
    
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    module.exports = Writable;
    
    /* <replacement> */
    function WriteReq(chunk, encoding, cb) {
        this.chunk = chunk;
        this.encoding = encoding;
        this.callback = cb;
        this.next = null;
    }
    
    // It seems a linked list but it is not
    // there will be only 2 of these for each stream
    function CorkedRequest(state) {
        var _this = this;
    
        this.next = null;
        this.entry = null;
        this.finish = function () {
        onCorkedFinish(_this, state);
        };
    }
    /* </replacement> */
    
    /*<replacement>*/
    var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    /*</replacement>*/
    
    /*<replacement>*/
    var Duplex;
    /*</replacement>*/
    
    Writable.WritableState = WritableState;
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    /*<replacement>*/
    var internalUtil = {
        deprecate: require('util-deprecate')
    };
    /*</replacement>*/
    
    /*<replacement>*/
    var Stream = require('./internal/streams/stream');
    /*</replacement>*/
    
    /*<replacement>*/
    
    var Buffer = require('safe-buffer').Buffer;
    var OurUint8Array = global.Uint8Array || function () {};
    function _uint8ArrayToBuffer(chunk) {
        return Buffer.from(chunk);
    }
    function _isUint8Array(obj) {
        return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    
    /*</replacement>*/
    
    var destroyImpl = require('./internal/streams/destroy');
    
    util.inherits(Writable, Stream);
    
    function nop() {}
    
    function WritableState(options, stream) {
        Duplex = Duplex || require('./_stream_duplex');
    
        options = options || {};
    
        // Duplex streams are both readable and writable, but share
        // the same options object.
        // However, some cases require setting options to different
        // values for the readable and the writable sides of the duplex stream.
        // These options can be provided separately as readableXXX and writableXXX.
        var isDuplex = stream instanceof Duplex;
    
        // object stream flag to indicate whether or not this stream
        // contains buffers or objects.
        this.objectMode = !!options.objectMode;
    
        if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    
        // the point at which write() starts returning false
        // Note: 0 is a valid value, means that we always return false if
        // the entire buffer is not flushed immediately on write()
        var hwm = options.highWaterMark;
        var writableHwm = options.writableHighWaterMark;
        var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    
        if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;
    
        // cast to ints.
        this.highWaterMark = Math.floor(this.highWaterMark);
    
        // if _final has been called
        this.finalCalled = false;
    
        // drain event flag.
        this.needDrain = false;
        // at the start of calling end()
        this.ending = false;
        // when end() has been called, and returned
        this.ended = false;
        // when 'finish' is emitted
        this.finished = false;
    
        // has it been destroyed
        this.destroyed = false;
    
        // should we decode strings into buffers before passing to _write?
        // this is here so that some node-core streams can optimize string
        // handling at a lower level.
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
    
        // Crypto is kind of old and crusty.  Historically, its default string
        // encoding is 'binary' so we have to make this configurable.
        // Everything else in the universe uses 'utf8', though.
        this.defaultEncoding = options.defaultEncoding || 'utf8';
    
        // not an actual buffer we keep track of, but a measurement
        // of how much we're waiting to get pushed to some underlying
        // socket or file.
        this.length = 0;
    
        // a flag to see when we're in the middle of a write.
        this.writing = false;
    
        // when true all writes will be buffered until .uncork() call
        this.corked = 0;
    
        // a flag to be able to tell if the onwrite cb is called immediately,
        // or on a later tick.  We set this to true at first, because any
        // actions that shouldn't happen until "later" should generally also
        // not happen before the first write call.
        this.sync = true;
    
        // a flag to know if we're processing previously buffered items, which
        // may call the _write() callback in the same tick, so that we don't
        // end up in an overlapped onwrite situation.
        this.bufferProcessing = false;
    
        // the callback that's passed to _write(chunk,cb)
        this.onwrite = function (er) {
        onwrite(stream, er);
        };
    
        // the callback that the user supplies to write(chunk,encoding,cb)
        this.writecb = null;
    
        // the amount that is being written when _write is called.
        this.writelen = 0;
    
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
    
        // number of pending user-supplied write callbacks
        // this must be 0 before 'finish' can be emitted
        this.pendingcb = 0;
    
        // emit prefinish if the only thing we're waiting for is _write cbs
        // This is relevant for synchronous Transform streams
        this.prefinished = false;
    
        // True if the error was already emitted and should not be thrown again
        this.errorEmitted = false;
    
        // count buffered requests
        this.bufferedRequestCount = 0;
    
        // allocate the first CorkedRequest, there is always
        // one allocated and free to use, and we maintain at most two
        this.corkedRequestsFree = new CorkedRequest(this);
    }
    
    WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
        out.push(current);
        current = current.next;
        }
        return out;
    };
    
    (function () {
        try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function () {
            return this.getBuffer();
            }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
        });
        } catch (_) {}
    })();
    
    // Test _writableState for inheritance to account for Duplex streams,
    // whose prototype chain only points to Readable.
    var realHasInstance;
    if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function (object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
    
            return object && object._writableState instanceof WritableState;
        }
        });
    } else {
        realHasInstance = function (object) {
        return object instanceof this;
        };
    }
    
    function Writable(options) {
        Duplex = Duplex || require('./_stream_duplex');
    
        // Writable ctor is applied to Duplexes, too.
        // `realHasInstance` is necessary because using plain `instanceof`
        // would return false, as no `_writableState` property is attached.
    
        // Trying to use the custom `instanceof` for Writable here will also break the
        // Node.js LazyTransform implementation, which has a non-trivial getter for
        // `_writableState` that would lead to infinite recursion.
        if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
        }
    
        this._writableState = new WritableState(options, this);
    
        // legacy.
        this.writable = true;
    
        if (options) {
        if (typeof options.write === 'function') this._write = options.write;
    
        if (typeof options.writev === 'function') this._writev = options.writev;
    
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    
        if (typeof options.final === 'function') this._final = options.final;
        }
    
        Stream.call(this);
    }
    
    // Otherwise people can pipe Writable streams, which is just wrong.
    Writable.prototype.pipe = function () {
        this.emit('error', new Error('Cannot pipe, not readable'));
    };
    
    function writeAfterEnd(stream, cb) {
        var er = new Error('write after end');
        // TODO: defer error events consistently everywhere, not just the cb
        stream.emit('error', er);
        pna.nextTick(cb, er);
    }
    
    // Checks that a user-supplied chunk is valid, especially for the particular
    // mode the stream is in. Currently this means that `null` is never accepted
    // and undefined/non-string values are only allowed in object mode.
    function validChunk(stream, state, chunk, cb) {
        var valid = true;
        var er = false;
    
        if (chunk === null) {
        er = new TypeError('May not write null values to stream');
        } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
        }
        if (er) {
        stream.emit('error', er);
        pna.nextTick(cb, er);
        valid = false;
        }
        return valid;
    }
    
    Writable.prototype.write = function (chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;
        var isBuf = !state.objectMode && _isUint8Array(chunk);
    
        if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
        }
    
        if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
        }
    
        if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
    
        if (typeof cb !== 'function') cb = nop;
    
        if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
        }
    
        return ret;
    };
    
    Writable.prototype.cork = function () {
        var state = this._writableState;
    
        state.corked++;
    };
    
    Writable.prototype.uncork = function () {
        var state = this._writableState;
    
        if (state.corked) {
        state.corked--;
    
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
        }
    };
    
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        // node::ParseEncoding() requires lower case.
        if (typeof encoding === 'string') encoding = encoding.toLowerCase();
        if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
    };
    
    function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer.from(chunk, encoding);
        }
        return chunk;
    }
    
    Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function () {
        return this._writableState.highWaterMark;
        }
    });
    
    // if we're already writing something, then just put this
    // in the queue, and wait our turn.  Otherwise, call _write
    // If we return false, then we need a drain event, so set that flag.
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
        if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
        }
        var len = state.objectMode ? 1 : chunk.length;
    
        state.length += len;
    
        var ret = state.length < state.highWaterMark;
        // we must ensure that previous needDrain will not be reset to false.
        if (!ret) state.needDrain = true;
    
        if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) {
            last.next = state.lastBufferedRequest;
        } else {
            state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
        } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
        }
    
        return ret;
    }
    
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
    }
    
    function onwriteError(stream, state, sync, er, cb) {
        --state.pendingcb;
    
        if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        pna.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
        } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
        }
    }
    
    function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
    }
    
    function onwrite(stream, er) {
        var state = stream._writableState;
        var sync = state.sync;
        var cb = state.writecb;
    
        onwriteStateUpdate(state);
    
        if (er) onwriteError(stream, state, sync, er, cb);else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);
    
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
        }
    
        if (sync) {
            /*<replacement>*/
            asyncWrite(afterWrite, stream, state, finished, cb);
            /*</replacement>*/
        } else {
            afterWrite(stream, state, finished, cb);
        }
        }
    }
    
    function afterWrite(stream, state, finished, cb) {
        if (!finished) onwriteDrain(stream, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream, state);
    }
    
    // Must force callback to be called on nextTick, so that we don't
    // emit 'drain' before the write() consumer gets the 'false' return
    // value, and has a chance to attach a 'drain' listener.
    function onwriteDrain(stream, state) {
        if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
        }
    }
    
    // if there's something in the buffer waiting, then process it
    function clearBuffer(stream, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;
    
        if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
    
        var count = 0;
        var allBuffers = true;
        while (entry) {
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
    
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
    
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else {
            state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
        } else {
        // Slow case, write chunks one-by-one
        while (entry) {
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
    
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) {
            break;
            }
        }
    
        if (entry === null) state.lastBufferedRequest = null;
        }
    
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
    }
    
    Writable.prototype._write = function (chunk, encoding, cb) {
        cb(new Error('_write() is not implemented'));
    };
    
    Writable.prototype._writev = null;
    
    Writable.prototype.end = function (chunk, encoding, cb) {
        var state = this._writableState;
    
        if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
        } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
        }
    
        if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    
        // .end() fully uncorks
        if (state.corked) {
        state.corked = 1;
        this.uncork();
        }
    
        // ignore unnecessary end() calls.
        if (!state.ending && !state.finished) endWritable(this, state, cb);
    };
    
    function needFinish(state) {
        return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
        stream._final(function (err) {
        state.pendingcb--;
        if (err) {
            stream.emit('error', err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
        });
    }
    function prefinish(stream, state) {
        if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function') {
            state.pendingcb++;
            state.finalCalled = true;
            pna.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
        }
    }
    
    function finishMaybe(stream, state) {
        var need = needFinish(state);
        if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
        }
        }
        return need;
    }
    
    function endWritable(stream, state, cb) {
        state.ending = true;
        finishMaybe(stream, state);
        if (cb) {
        if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
        }
        state.ended = true;
        stream.writable = false;
    }
    
    function onCorkedFinish(corkReq, state, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
        }
        if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = corkReq;
        } else {
        state.corkedRequestsFree = corkReq;
        }
    }
    
    Object.defineProperty(Writable.prototype, 'destroyed', {
        get: function () {
        if (this._writableState === undefined) {
            return false;
        }
        return this._writableState.destroyed;
        },
        set: function (value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
            return;
        }
    
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
        }
    });
    
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function (err, cb) {
        this.end();
        cb(err);
    };
    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"./_stream_duplex":40,"./internal/streams/destroy":46,"./internal/streams/stream":47,"_process":38,"core-util-is":31,"inherits":34,"process-nextick-args":37,"safe-buffer":53,"util-deprecate":55}],45:[function(require,module,exports){
    'use strict';
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var Buffer = require('safe-buffer').Buffer;
    var util = require('util');
    
    function copyBuffer(src, target, offset) {
        src.copy(target, offset);
    }
    
    module.exports = function () {
        function BufferList() {
        _classCallCheck(this, BufferList);
    
        this.head = null;
        this.tail = null;
        this.length = 0;
        }
    
        BufferList.prototype.push = function push(v) {
        var entry = { data: v, next: null };
        if (this.length > 0) this.tail.next = entry;else this.head = entry;
        this.tail = entry;
        ++this.length;
        };
    
        BufferList.prototype.unshift = function unshift(v) {
        var entry = { data: v, next: this.head };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
        };
    
        BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
        --this.length;
        return ret;
        };
    
        BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
        };
    
        BufferList.prototype.join = function join(s) {
        if (this.length === 0) return '';
        var p = this.head;
        var ret = '' + p.data;
        while (p = p.next) {
            ret += s + p.data;
        }return ret;
        };
    
        BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer.alloc(0);
        if (this.length === 1) return this.head.data;
        var ret = Buffer.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
        }
        return ret;
        };
    
        return BufferList;
    }();
    
    if (util && util.inspect && util.inspect.custom) {
        module.exports.prototype[util.inspect.custom] = function () {
        var obj = util.inspect({ length: this.length });
        return this.constructor.name + ' ' + obj;
        };
    }
    },{"safe-buffer":53,"util":29}],46:[function(require,module,exports){
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    // undocumented cb() API, needed for core, not for public API
    function destroy(err, cb) {
        var _this = this;
    
        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;
    
        if (readableDestroyed || writableDestroyed) {
        if (cb) {
            cb(err);
        } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
            pna.nextTick(emitErrorNT, this, err);
        }
        return this;
        }
    
        // we set destroyed to true before firing error callbacks in order
        // to make it re-entrance safe in case destroy() is called within callbacks
    
        if (this._readableState) {
        this._readableState.destroyed = true;
        }
    
        // if this is a duplex stream mark the writable part as destroyed as well
        if (this._writableState) {
        this._writableState.destroyed = true;
        }
    
        this._destroy(err || null, function (err) {
        if (!cb && err) {
            pna.nextTick(emitErrorNT, _this, err);
            if (_this._writableState) {
            _this._writableState.errorEmitted = true;
            }
        } else if (cb) {
            cb(err);
        }
        });
    
        return this;
    }
    
    function undestroy() {
        if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
        }
    
        if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
        }
    }
    
    function emitErrorNT(self, err) {
        self.emit('error', err);
    }
    
    module.exports = {
        destroy: destroy,
        undestroy: undestroy
    };
    },{"process-nextick-args":37}],47:[function(require,module,exports){
    module.exports = require('events').EventEmitter;
    
    },{"events":32}],48:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    'use strict';
    
    /*<replacement>*/
    
    var Buffer = require('safe-buffer').Buffer;
    /*</replacement>*/
    
    var isEncoding = Buffer.isEncoding || function (encoding) {
        encoding = '' + encoding;
        switch (encoding && encoding.toLowerCase()) {
        case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
            return true;
        default:
            return false;
        }
    };
    
    function _normalizeEncoding(enc) {
        if (!enc) return 'utf8';
        var retried;
        while (true) {
        switch (enc) {
            case 'utf8':
            case 'utf-8':
            return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            return 'utf16le';
            case 'latin1':
            case 'binary':
            return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
            return enc;
            default:
            if (retried) return; // undefined
            enc = ('' + enc).toLowerCase();
            retried = true;
        }
        }
    };
    
    // Do not cache `Buffer.isEncoding` when checking encoding names as some
    // modules monkey-patch it to support additional encodings
    function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
        return nenc || enc;
    }
    
    // StringDecoder provides an interface for efficiently splitting a series of
    // buffers into a series of JS strings without breaking apart multi-byte
    // characters.
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer.allocUnsafe(nb);
    }
    
    StringDecoder.prototype.write = function (buf) {
        if (buf.length === 0) return '';
        var r;
        var i;
        if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
        } else {
        i = 0;
        }
        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || '';
    };
    
    StringDecoder.prototype.end = utf8End;
    
    // Returns only complete characters in a Buffer
    StringDecoder.prototype.text = utf8Text;
    
    // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
    StringDecoder.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
    };
    
    // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
    // continuation byte. If an invalid byte is detected, -2 is returned.
    function utf8CheckByte(byte) {
        if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
        return byte >> 6 === 0x02 ? -1 : -2;
    }
    
    // Checks at most 3 bytes at the end of a Buffer in order to detect an
    // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
    // needed to complete the UTF-8 character (if applicable) are returned.
    function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
        }
        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
        }
        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
        }
        return nb;
        }
        return 0;
    }
    
    // Validates as many continuation bytes for a multi-byte UTF-8 character as
    // needed or are available. If we see a non-continuation byte where we expect
    // one, we "replace" the validated continuation bytes we've seen so far with
    // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
    // behavior. The continuation byte check is included three times in the case
    // where all of the continuation bytes for a character exist in the same buffer.
    // It is also done this way as a slight performance increase instead of using a
    // loop.
    function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
        }
        if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
            self.lastNeed = 2;
            return '\ufffd';
            }
        }
        }
    }
    
    // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
    function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== undefined) return r;
        if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
    }
    
    // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
    // partial character, the character's bytes are buffered until the required
    // number of bytes are available.
    function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString('utf8', i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString('utf8', i, end);
    }
    
    // For UTF-8, a replacement character is added when ending on a partial
    // character.
    function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + '\ufffd';
        return r;
    }
    
    // UTF-16LE typically needs two bytes per character, but even if we have an even
    // number of bytes available, we need to check if we end on a leading/high
    // surrogate. In that case, we need to wait for the next two bytes in order to
    // decode the last character properly.
    function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
            }
        }
        return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString('utf16le', i, buf.length - 1);
    }
    
    // For UTF-16LE we do not explicitly append special replacement characters if we
    // end on a partial character, we simply let v8 handle that.
    function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
        }
        return r;
    }
    
    function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString('base64', i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
        } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString('base64', i, buf.length - n);
    }
    
    function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
        return r;
    }
    
    // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
    function simpleWrite(buf) {
        return buf.toString(this.encoding);
    }
    
    function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : '';
    }
    },{"safe-buffer":53}],49:[function(require,module,exports){
    module.exports = require('./readable').PassThrough
    
    },{"./readable":50}],50:[function(require,module,exports){
    exports = module.exports = require('./lib/_stream_readable.js');
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require('./lib/_stream_writable.js');
    exports.Duplex = require('./lib/_stream_duplex.js');
    exports.Transform = require('./lib/_stream_transform.js');
    exports.PassThrough = require('./lib/_stream_passthrough.js');
    
    },{"./lib/_stream_duplex.js":40,"./lib/_stream_passthrough.js":41,"./lib/_stream_readable.js":42,"./lib/_stream_transform.js":43,"./lib/_stream_writable.js":44}],51:[function(require,module,exports){
    module.exports = require('./readable').Transform
    
    },{"./readable":50}],52:[function(require,module,exports){
    module.exports = require('./lib/_stream_writable.js');
    
    },{"./lib/_stream_writable.js":44}],53:[function(require,module,exports){
    /* eslint-disable node/no-deprecated-api */
    var buffer = require('buffer')
    var Buffer = buffer.Buffer
    
    // alternative to using Object.keys for old browsers
    function copyProps (src, dst) {
        for (var key in src) {
        dst[key] = src[key]
        }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer
    } else {
        // Copy properties from require('buffer')
        copyProps(buffer, exports)
        exports.Buffer = SafeBuffer
    }
    
    function SafeBuffer (arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length)
    }
    
    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer)
    
    SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
        }
        return Buffer(arg, encodingOrOffset, length)
    }
    
    SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
        }
        var buf = Buffer(size)
        if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding)
        } else {
            buf.fill(fill)
        }
        } else {
        buf.fill(0)
        }
        return buf
    }
    
    SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
        }
        return Buffer(size)
    }
    
    SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
        }
        return buffer.SlowBuffer(size)
    }
    
    },{"buffer":30}],54:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    module.exports = Stream;
    
    var EE = require('events').EventEmitter;
    var inherits = require('inherits');
    
    inherits(Stream, EE);
    Stream.Readable = require('readable-stream/readable.js');
    Stream.Writable = require('readable-stream/writable.js');
    Stream.Duplex = require('readable-stream/duplex.js');
    Stream.Transform = require('readable-stream/transform.js');
    Stream.PassThrough = require('readable-stream/passthrough.js');
    
    // Backwards-compat with node 0.4.x
    Stream.Stream = Stream;
    
    
    
    // old-style streams.  Note that the pipe method (the only relevant
    // part of this class) is overridden in the Readable class.
    
    function Stream() {
        EE.call(this);
    }
    
    Stream.prototype.pipe = function(dest, options) {
        var source = this;
    
        function ondata(chunk) {
        if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) {
            source.pause();
            }
        }
        }
    
        source.on('data', ondata);
    
        function ondrain() {
        if (source.readable && source.resume) {
            source.resume();
        }
        }
    
        dest.on('drain', ondrain);
    
        // If the 'end' option is not supplied, dest.end() will be called when
        // source gets the 'end' or 'close' events.  Only dest.end() once.
        if (!dest._isStdio && (!options || options.end !== false)) {
        source.on('end', onend);
        source.on('close', onclose);
        }
    
        var didOnEnd = false;
        function onend() {
        if (didOnEnd) return;
        didOnEnd = true;
    
        dest.end();
        }
    
    
        function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;
    
        if (typeof dest.destroy === 'function') dest.destroy();
        }
    
        // don't leave dangling pipes when there are errors.
        function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, 'error') === 0) {
            throw er; // Unhandled stream error in pipe.
        }
        }
    
        source.on('error', onerror);
        dest.on('error', onerror);
    
        // remove all the event listeners that were added.
        function cleanup() {
        source.removeListener('data', ondata);
        dest.removeListener('drain', ondrain);
    
        source.removeListener('end', onend);
        source.removeListener('close', onclose);
    
        source.removeListener('error', onerror);
        dest.removeListener('error', onerror);
    
        source.removeListener('end', cleanup);
        source.removeListener('close', cleanup);
    
        dest.removeListener('close', cleanup);
        }
    
        source.on('end', cleanup);
        source.on('close', cleanup);
    
        dest.on('close', cleanup);
    
        dest.emit('pipe', source);
    
        // Allow for unix-like usage: A.pipe(B).pipe(C)
        return dest;
    };
    
    },{"events":32,"inherits":34,"readable-stream/duplex.js":39,"readable-stream/passthrough.js":49,"readable-stream/readable.js":50,"readable-stream/transform.js":51,"readable-stream/writable.js":52}],55:[function(require,module,exports){
    (function (global){
    
    /**
     * Module exports.
     */
    
    module.exports = deprecate;
    
    /**
     * Mark that a method should not be used.
     * Returns a modified function which warns once by default.
     *
     * If `localStorage.noDeprecation = true` is set, then it is a no-op.
     *
     * If `localStorage.throwDeprecation = true` is set, then deprecated functions
     * will throw an Error when invoked.
     *
     * If `localStorage.traceDeprecation = true` is set, then deprecated functions
     * will invoke `console.trace()` instead of `console.error()`.
     *
     * @param {Function} fn - the function to deprecate
     * @param {String} msg - the string to print to the console when `fn` is invoked
     * @returns {Function} a new "deprecated" version of `fn`
     * @api public
     */
    
    function deprecate (fn, msg) {
        if (config('noDeprecation')) {
        return fn;
        }
    
        var warned = false;
        function deprecated() {
        if (!warned) {
            if (config('throwDeprecation')) {
            throw new Error(msg);
            } else if (config('traceDeprecation')) {
            console.trace(msg);
            } else {
            console.warn(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
        }
    
        return deprecated;
    }
    
    /**
     * Checks `localStorage` for boolean values for the given `name`.
     *
     * @param {String} name
     * @returns {Boolean}
     * @api private
     */
    
    function config (name) {
        // accessing global.localStorage can trigger a DOMException in sandboxed iframes
        try {
        if (!global.localStorage) return false;
        } catch (_) {
        return false;
        }
        var val = global.localStorage[name];
        if (null == val) return false;
        return String(val).toLowerCase() === 'true';
    }
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}],56:[function(require,module,exports){
    arguments[4][22][0].apply(exports,arguments)
    },{"dup":22}],57:[function(require,module,exports){
    module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object'
        && typeof arg.copy === 'function'
        && typeof arg.fill === 'function'
        && typeof arg.readUInt8 === 'function';
    }
    },{}],58:[function(require,module,exports){
    (function (process,global){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
        if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
        }
    
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch (x) {
            case '%s': return String(args[i++]);
            case '%d': return Number(args[i++]);
            case '%j':
            try {
                return JSON.stringify(args[i++]);
            } catch (_) {
                return '[Circular]';
            }
            default:
            return x;
        }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
            str += ' ' + x;
        } else {
            str += ' ' + inspect(x);
        }
        }
        return str;
    };
    
    
    // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.
    exports.deprecate = function(fn, msg) {
        // Allow for deprecating things in the process of starting up.
        if (isUndefined(global.process)) {
        return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
        };
        }
    
        if (process.noDeprecation === true) {
        return fn;
        }
    
        var warned = false;
        function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) {
            throw new Error(msg);
            } else if (process.traceDeprecation) {
            console.trace(msg);
            } else {
            console.error(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
        }
    
        return deprecated;
    };
    
    
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
        if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
        set = set.toUpperCase();
        if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
            var pid = process.pid;
            debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
            };
        } else {
            debugs[set] = function() {};
        }
        }
        return debugs[set];
    };
    
    
    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */
    /* legacy: obj, showHidden, depth, colors*/
    function inspect(obj, opts) {
        // default options
        var ctx = {
        seen: [],
        stylize: stylizeNoColor
        };
        // legacy...
        if (arguments.length >= 3) ctx.depth = arguments[2];
        if (arguments.length >= 4) ctx.colors = arguments[3];
        if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
        } else if (opts) {
        // got an "options" object
        exports._extend(ctx, opts);
        }
        // set default options
        if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
        if (isUndefined(ctx.depth)) ctx.depth = 2;
        if (isUndefined(ctx.colors)) ctx.colors = false;
        if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
        if (ctx.colors) ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    
    
    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    inspect.colors = {
        'bold' : [1, 22],
        'italic' : [3, 23],
        'underline' : [4, 24],
        'inverse' : [7, 27],
        'white' : [37, 39],
        'grey' : [90, 39],
        'black' : [30, 39],
        'blue' : [34, 39],
        'cyan' : [36, 39],
        'green' : [32, 39],
        'magenta' : [35, 39],
        'red' : [31, 39],
        'yellow' : [33, 39]
    };
    
    // Don't use 'blue' not visible on cmd.exe
    inspect.styles = {
        'special': 'cyan',
        'number': 'yellow',
        'boolean': 'yellow',
        'undefined': 'grey',
        'null': 'bold',
        'string': 'green',
        'date': 'magenta',
        // "name": intentionally not styling
        'regexp': 'red'
    };
    
    
    function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
    
        if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str +
                '\u001b[' + inspect.colors[style][1] + 'm';
        } else {
        return str;
        }
    }
    
    
    function stylizeNoColor(str, styleType) {
        return str;
    }
    
    
    function arrayToHash(array) {
        var hash = {};
    
        array.forEach(function(val, idx) {
        hash[val] = true;
        });
    
        return hash;
    }
    
    
    function formatValue(ctx, value, recurseTimes) {
        // Provide a hook for user-specified inspect functions.
        // Check that value is an object with an inspect function on it
        if (ctx.customInspect &&
            value &&
            isFunction(value.inspect) &&
            // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect &&
            // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
        }
    
        // Primitive types cannot have properties
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
        return primitive;
        }
    
        // Look up the keys of the object.
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
    
        if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
        }
    
        // IE doesn't make error fields non-enumerable
        // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
        if (isError(value)
            && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
        }
    
        // Some type of object without properties can be shortcutted.
        if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
            return formatError(value);
        }
        }
    
        var base = '', array = false, braces = ['{', '}'];
    
        // Make Array say that they are Array
        if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
        }
    
        // Make functions say that they are functions
        if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
        }
    
        // Make RegExps say that they are RegExps
        if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
        }
    
        // Make dates with properties first say the date
        if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
        }
    
        // Make error with message first say the error
        if (isError(value)) {
        base = ' ' + formatError(value);
        }
    
        if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
        }
    
        if (recurseTimes < 0) {
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
            return ctx.stylize('[Object]', 'special');
        }
        }
    
        ctx.seen.push(value);
    
        var output;
        if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
        output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
        }
    
        ctx.seen.pop();
    
        return reduceToSingleString(output, base, braces);
    }
    
    
    function formatPrimitive(ctx, value) {
        if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
        if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                    .replace(/'/g, "\\'")
                                                    .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
        }
        if (isNumber(value))
        return ctx.stylize('' + value, 'number');
        if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
        // For some reason typeof null is "object", so special case here.
        if (isNull(value))
        return ctx.stylize('null', 'null');
    }
    
    
    function formatError(value) {
        return '[' + Error.prototype.toString.call(value) + ']';
    }
    
    
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                String(i), true));
        } else {
            output.push('');
        }
        }
        keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                key, true));
        }
        });
        return output;
    }
    
    
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
        if (desc.set) {
            str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
            str = ctx.stylize('[Getter]', 'special');
        }
        } else {
        if (desc.set) {
            str = ctx.stylize('[Setter]', 'special');
        }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
        }
        if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
            } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf('\n') > -1) {
            if (array) {
                str = str.split('\n').map(function(line) {
                return '  ' + line;
                }).join('\n').substr(2);
            } else {
                str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
                }).join('\n');
            }
            }
        } else {
            str = ctx.stylize('[Circular]', 'special');
        }
        }
        if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
            return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
        }
    
        return name + ': ' + str;
    }
    
    
    function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
        }, 0);
    
        if (length > 60) {
        return braces[0] +
                (base === '' ? '' : base + '\n ') +
                ' ' +
                output.join(',\n  ') +
                ' ' +
                braces[1];
        }
    
        return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }
    
    
    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray(ar) {
        return Array.isArray(ar);
    }
    exports.isArray = isArray;
    
    function isBoolean(arg) {
        return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    
    function isNull(arg) {
        return arg === null;
    }
    exports.isNull = isNull;
    
    function isNullOrUndefined(arg) {
        return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    
    function isNumber(arg) {
        return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    
    function isString(arg) {
        return typeof arg === 'string';
    }
    exports.isString = isString;
    
    function isSymbol(arg) {
        return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    
    function isUndefined(arg) {
        return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    
    function isRegExp(re) {
        return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    
    function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    
    function isDate(d) {
        return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    
    function isError(e) {
        return isObject(e) &&
            (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    
    function isFunction(arg) {
        return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    
    function isPrimitive(arg) {
        return arg === null ||
                typeof arg === 'boolean' ||
                typeof arg === 'number' ||
                typeof arg === 'string' ||
                typeof arg === 'symbol' ||  // ES6 symbol
                typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    
    exports.isBuffer = require('./support/isBuffer');
    
    function objectToString(o) {
        return Object.prototype.toString.call(o);
    }
    
    
    function pad(n) {
        return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }
    
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'];
    
    // 26 Feb 16:19:34
    function timestamp() {
        var d = new Date();
        var time = [pad(d.getHours()),
                    pad(d.getMinutes()),
                    pad(d.getSeconds())].join(':');
        return [d.getDate(), months[d.getMonth()], time].join(' ');
    }
    
    
    // log is just a thin wrapper to console.log that prepends a timestamp
    exports.log = function() {
        console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    
    
    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * The Function.prototype.inherits from lang.js rewritten as a standalone
     * function (not on Function.prototype). NOTE: If this file is to be loaded
     * during bootstrapping this function needs to be rewritten using some native
     * functions as prototype setup using normal JavaScript does not work as
     * expected during bootstrapping (see mirror.js in r114903).
     *
     * @param {function} ctor Constructor function which needs to inherit the
     *     prototype.
     * @param {function} superCtor Constructor function to inherit prototype from.
     */
    exports.inherits = require('inherits');
    
    exports._extend = function(origin, add) {
        // Don't do anything if add isn't an object
        if (!add || !isObject(add)) return origin;
    
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
        origin[keys[i]] = add[keys[i]];
        }
        return origin;
    };
    
    function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    
    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"./support/isBuffer":57,"_process":38,"inherits":56}]},{},[1])(1)
    });
        
    
ChangeShader = function(shaderSource){
    //console.log("in manualChangeShader");
    
    /*==================================vertex=========================================*/
    //line
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `attribute vec3 coordinates;void main(void) { gl_Position = vec4(coordinates, 1.0);}`.replace("\n"," ").replace(/\s+/g, '')){
    vetexID = 0;
    return ` attribute vec2 coordinates;
    void main(void) {
    gl_Position =  vec4(coordinates, 0.0, 1.0);
    gl_PointSize = 1.0;
    }`;
    }
    
    
    
    //cube & camera
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    attribute vec3 vertPosition;
    attribute vec3 vertColor;
    varying vec3 fragColor;
    uniform mat4 mWorld;
    uniform mat4 mView;
    uniform mat4 mProj;
    
    void main()
    {
    fragColor = vertColor;
    gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
    }`.replace("\n"," ").replace(/\s+/g, '')){
    vetexID = 1;
    return ` attribute vec2 vertPosition;
    void main(void) {
    gl_Position =  vec4(vertPosition, 0.0, 1.0);
    gl_PointSize = 1.0;
    }`;
    }
    
    
    //texture
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    attribute vec3 vertPosition;
    attribute vec2 vertTexCoord;
    varying vec2 fragTexCoord;
    uniform mat4 mWorld;
    uniform mat4 mView;
    uniform mat4 mProj;
    
    void main()
    {
    fragTexCoord = vertTexCoord;
    gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
    }`.replace("\n"," ").replace(/\s+/g, '')){
    vetexID = 2;
    return ` attribute vec2 vertPosition;
    void main(void) {
    gl_Position =  vec4(vertPosition, 0.0, 1.0);
    gl_PointSize = 1.0;
    }`;
    }
    
    //simple light
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    attribute vec3 vertPosition;
    attribute vec2 vertTexCoord;
    attribute vec3 vertNormal;
    
    varying vec2 fragTexCoord;
    varying vec3 fragNormal;
    
    uniform mat4 mWorld;
    uniform mat4 mView;
    uniform mat4 mProj;
    
    void main()
    {
    fragTexCoord = vertTexCoord;
    fragNormal = (mWorld * vec4(vertNormal, 0.0)).xyz;
    
    gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
    }`.replace("\n"," ").replace(/\s+/g, '')){
    vetexID = 3;
    return ` attribute vec2 vertPosition;
    void main(void) {
    gl_Position =  vec4(vertPosition, 0.0, 1.0);
    gl_PointSize = 1.0;
    }`;
    }
    
    
    
    //simple light , two texture more light
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    attribute vec3 vertPosition;
    attribute vec2 vertTexCoord;
    attribute vec3 vertNormal;
    
    varying vec2 fragTexCoord;
    varying vec3 fragNormal;
    varying vec4 vPosition;
    
    uniform mat4 mWorld;
    uniform mat4 mView;
    uniform mat4 mProj;
    
    void main()
    {
        vPosition = mView * vec4(vertPosition, 1.0);
        fragTexCoord = vertTexCoord;
        fragNormal = (mWorld * vec4(vertNormal, 0.0)).xyz;
    
        gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
    }
    `.replace("\n"," ").replace(/\s+/g, '')){
    vetexID = 4;
    return ` attribute vec2 vertPosition;
    void main(void) {
    gl_Position =  vec4(vertPosition, 0.0, 1.0);
    gl_PointSize = 1.0;
    }`;
    }
    
    
    
    
    /*==================================fragment=========================================*/
    //line
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `void main(void) {gl_FragColor = vec4(1, 1, 1, 1.0);}`.replace("\n"," ").replace(/\s+/g, '')){
    return ` precision mediump float;
    uniform ivec3 line_point[600];
    int division(int a, int b);
    int D_abs(int a, int b);
    int mod(int a, int b); 
    uniform sampler2D backtexture;
    struct txt_coord{
        int x, y;
        };
    vec4 col_transfer(ivec4 color); 
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    void main(void) {
    int x0, y0 , x1, y1, x2, y2, k, b, y ;
    x0 = int(gl_FragCoord.x) ; 
    y0 = int(gl_FragCoord.y) ; 
    txt_coord fragTexCoord;
    fragTexCoord.x = x0;
    fragTexCoord.y = y0;
    //gl_FragColor = col_transfer( D_texture2D(backtexture, fragTexCoord));
    gl_FragColor = texture2D(backtexture,vec2( (gl_FragCoord.x)/256.0  ,  (gl_FragCoord.y )/256.0 ) ); 
    //gl_FragColor = vec4 (1.0, 0.0, 0.0, 1.0 );
    for (int i = 0 ; i < 600; i += 2){
        x1 = division( (line_point[i][0] + 1000) * 32 , 250);  
        y1 = division( (line_point[i][1] + 1000) * 32 , 250);  
        x2 = division( (line_point[i + 1][0] + 1000) * 32 , 250);  
        y2 = division( (line_point[i + 1][1] + 1000) * 32 , 250);   
        if ((x0 == x1) && (y0 == y1))
            gl_FragColor = vec4(0.9, 0.9, 0.9, 1.0);
        else{
            if (D_abs(x1,x2) > D_abs(y1,y2)){
                k = division ( (y1 - y2) * 1000, (x1 - x2));
                b = y1 * 1000 - k * x1;
                if (x1 > x2){
                    x1 = x1 + x2;
                    x2 = x1 - x2;
                    x1 = x1 - x2;
                }
                for (int j = 0; j < 255; j++)
                    if ((j > x1) && (j < x2) && (x0 == j) && (y0 == division(k * x0 + b, 1000))  )
                        gl_FragColor = vec4(0.9, 0.9, 0.9, 1.0);
            }else{
                k = division ( (x1 - x2) * 1000, (y1 - y2));
                b = x1 * 1000 - k * y1;
                if (y1 > y2){
                    y1 = y1 + y2;
                    y2 = y1 - y2;
                    y1 = y1 - y2;
                }
                for (int j = 0; j < 255; j++)
                    if ((j > y1) && (j < y2) && (y0 == j) && (x0 == division(k * y0 + b, 1000))  )
                        gl_FragColor = vec4(0.9, 0.9, 0.9, 1.0);
            
            }
            
        }
    
    }
    }
    int division(int a, int b){
        int n = a / b;
        if ( (n - 2) * b >= a )
            return (n - 3);
        else if ( (n - 1) * b >= a )
            return (n - 2);
        else if ( b * n >= a )
            return (n - 1);
        else if ( (n + 1) * b >= a )
            return n ;
        else
            return (n + 1);
        }
    int D_abs(int a, int b){
        if (a > b)
            return a - b;
        else
            return b - a;
        }
        ivec4 D_texture2D(sampler2D sampler,txt_coord t){
        int tx0, ty0, wei_x, wei_y;
        vec4 color0, color1, color2, color3;
        tx0 = division ( t.x, 1000);
        ty0 = division ( t.y, 1000);
        color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
        color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
        color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
        color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
        
        wei_x = mod (t.x, 1000);
        wei_y = mod (t.y, 1000);
        return cal_color(color0, color1, color2, color3, wei_x, wei_y);
        }
        
        ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
        int r, g, b;
        r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
        g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
        b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
        return ivec4( r, g, b, 100 );
        }
    vec4 col_transfer( ivec4 c){
        return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    int mod(int a, int b){
        int n = a / b;
        if ( (n - 2) * b >= a )
            return a - (n - 3) * b;
        else if ( (n - 1) * b >= a )
            return a - (n - 2) * b;
        else if ( b * n >= a )
            return a - (n - 1) * b;
        else if ( (n + 1) * b >= a )
            return a - n * b;
        else
            return a - (n + 1) * b;
        }`;
    }
    
    
    //cube & camera 
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    varying vec3 fragColor;
    void main()
    {
    gl_FragColor = vec4(fragColor, 1.0);
    }`.replace("\n"," ").replace(/\s+/g, '')){
    return `
    precision mediump float;
    #define uniformNumber 336
    uniform ivec3 tri_point[333];
    uniform ivec3 tri_color[333];
    uniform int tri_number;
    struct tri_p {
    int x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
    };
    struct txt_p {
    int x1, y1, x2, y2, x3,  y3;
    };
    struct col_p {
    int r1, g1, b1, r2, g2, b2, r3, g3, b3;
    };
    struct col{
    int r, g, b;
    };
    struct txt_coord{
    int x, y;
    };
    #define init tri_p tri; col_p colorrgb; ivec3 colrgb; int z; z = -512;gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);int z0; 
    #define assign tri.x0 = int(gl_FragCoord.x); tri.y0 = int(gl_FragCoord.y); tri.x1 = tri_point[i][0]; tri.y1 = tri_point[i][1]; tri.z1 = tri_point[i][2]; tri.x2 = tri_point[i+1][0]; tri.y2 = tri_point[i+1][1]; tri.z2 = tri_point[i+1][2]; tri.x3 = tri_point[i+2][0]; tri.y3 = tri_point[i+2][1]; tri.z3 = tri_point[i+2][2];    colorrgb.r1 = tri_color[i][0]; colorrgb.g1 = tri_color[i][1]; colorrgb.b1 = tri_color[i][2]; colorrgb.r2 = tri_color[i+1][0]; colorrgb.g2 = tri_color[i+1][1]; colorrgb.b2 = tri_color[i+1][2]; colorrgb.r3 = tri_color[i+2][0]; colorrgb.g3 = tri_color[i+2][1]; colorrgb.b3 = tri_color[i+2][2];
    #define changePosition tri = changevalue(tri); 
    #define cal_Zbuffer z0 = cal_z(tri);
    #define pixel_on_triangle ( i < (tri_number * 3) ) && (judge(tri) == 1)
    #define draw_pixel (z0 >= -512) && (z0 <= 512) && (z0 > z)
    #define renew_Zbuffer z = z0; colrgb = calCoord(colorrgb, tri);
    int judge(tri_p t);
    int f_judge(tri_p t);
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2);   
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2);
    int cal_z(tri_p tri);
    int division(int a, int b);  
    int mod(int a, int b);  
    int isqrt(int a);
    int D_dot(ivec3 x, ivec3 y);
    int D_max(int a, int b);
    int D_multiple(int a, int b);
    ivec3 D_multiple(ivec3 x, int b);
    ivec3 D_multiple(ivec3 x, ivec3 y);
    ivec3 D_division(ivec3 x, int y);
    int D_division(int x, int y);
    tri_p changevalue(tri_p tri);
    int  wei_1, wei_2, wei_3;
    txt_coord calCoord(txt_p f, tri_p t);
    ivec3 calCoord(col_p f, tri_p t);
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    ivec3 D_normalize(ivec3 a);
    vec4 col_transfer(ivec4 color); 
    vec4 col_transfer(ivec3 color, int a); 
    // r,g,b 0 - 255   a 0 - 100                 
    void main()
    {
    init;
    for (int i = 0; i < uniformNumber; i+= 3){
        assign;
        changePosition;
        if ( pixel_on_triangle ){
            cal_Zbuffer;
        if ( draw_pixel ){
            renew_Zbuffer;
            gl_FragColor = vec4 (col_transfer( colrgb, 100));
        } 
        }
    } 
    }
    int judge(tri_p t) {
        if (( PinAB(t.x0 - t.x1, t.y0 - t.y1, t.x2 - t.x1, t.y2 - t.y1, t.x3 - t.x1, t.y3 - t.y1)+ PinAB(t.x0 - t.x2, t.y0 - t.y2, t.x3 - t.x2, t.y3 - t.y2, t.x1 - t.x2, t.y1 - t.y2) 
        + PinAB(t.x0 - t.x3, t.y0 - t.y3, t.x2 - t.x3, t.y2 - t.y3, t.x1 - t.x3, t.y1 - t.y3) == 3)  )
        {return 1;}
        else
        {return 0;}
    }
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2){ 
    int kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0 >= kb ) && (0 <= kc )) || ((0  <= kb ) && (0 >= kc)) ) 
    return 1;
    return 0;
    }
    int f_judge(tri_p t){
    if ( f_PinAB( float(t.x0 - t.x1), float(t.y0 - t.y1), float(t.x2 - t.x1), float(t.y2 - t.y1), float(t.x3 - t.x1), float(t.y3 - t.y1))
        + f_PinAB( float(t.x0 - t.x2), float(t.y0 - t.y2), float(t.x3 - t.x2), float(t.y3 - t.y2), float(t.x1 - t.x2), float(t.y1 - t.y2)) 
        + f_PinAB( float(t.x0 - t.x3), float(t.y0 - t.y3), float(t.x2 - t.x3), float(t.y2 - t.y3), float(t.x1 - t.x3), float(t.y1 - t.y3))
        == 3){return 1;}
    else{return 0;}
    }
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2){ 
    float kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0.0001 > kb) && (-0.0001 < kc)) || ((-0.0001 < kb) && (0.0001 > kc)) ) {return 1;} return 0; 
    }
    int cal_z(tri_p t){
    int A, B, C , D , K;
    A = (t.y3 - t.y1)*(t.z3 - t.z1) - (t.z2 - t.z1)*(t.y3 - t.y1);
    B = (t.x3 - t.x1)*(t.z2 - t.z1) - (t.x2 - t.x1)*(t.z3 - t.z1);
    C = (t.x2 - t.x1)*(t.y3 - t.y1) - (t.x3 - t.x1)*(t.y2 - t.y1);
    D = -1 * (A * t.x1 + B * t.y1 + C * t.z1);
    return (-1 *  division( (A * t.x0 + B * t.y0 + D) , C));
    }
    int division(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return (n - 3);
    else if ( (n - 1) * b >= a )
        return (n - 2);
    else if ( b * n >= a )
        return (n - 1);
    else if ( (n + 1) * b >= a )
        return n ;
    else
        return (n + 1);
    }
    int mod(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return a - (n - 3) * b;
    else if ( (n - 1) * b >= a )
        return a - (n - 2) * b;
    else if ( b * n >= a )
        return a - (n - 1) * b;
    else if ( (n + 1) * b >= a )
        return a - n * b;
    else
        return a - (n + 1) * b;
    }
    txt_coord calCoord(txt_p f, tri_p t){
    txt_coord tt;
    int bcs1, bcs2, bcs3, cs1, cs2, cs3;
    bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
    cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_1 = division(bcs1 * 1000, cs1);
    bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
    cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_2 = division(bcs2 * 1000, cs2);
    bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
    cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_3 = division(bcs3 * 1000, cs3);
    // 在这里还是256000这样一个系数
    f.x1 = division( f.x1 * 51, 200);
    f.y1 = division( f.y1 * 51, 200);
    f.x2 = division( f.x2 * 51, 200);
    f.y2 = division( f.y2 * 51, 200);
    f.x3 = division( f.x3 * 51, 200);
    f.y3 = division( f.y3 * 51, 200); 
    tt.x = wei_1 * f.x1 + wei_2 * f.x2 + wei_3 * f.x3;
    tt.y = wei_1 * f.y1 + wei_2 * f.y2 + wei_3 * f.y3;
    return tt;
    }
    ivec3 calCoord(col_p f, tri_p t){
    col tt;
    int bcs1, bcs2, bcs3, cs1, cs2, cs3;
    bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
    cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_1 = division(bcs1 * 1000, cs1);
    bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
    cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_2 = division(bcs2 * 1000, cs2);
    bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
    cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_3 = division(bcs3 * 1000, cs3);
    // 在这里还是256000这样一个系数
    f.r1 = division( f.r1 * 51, 200);
    f.g1 = division( f.g1 * 51, 200);
    f.b1 = division( f.b1 * 51, 200);
    f.r2 = division( f.r2 * 51, 200);
    f.g2 = division( f.g2 * 51, 200);
    f.b2 = division( f.b2 * 51, 200);
    f.r3 = division( f.r3 * 51, 200);
    f.g3 = division( f.g3 * 51, 200);
    f.b3 = division( f.b3 * 51, 200);
    tt.r = division( wei_1 * f.r1 + wei_2 * f.r2 + wei_3 * f.r3, 1000);
    tt.g = division( wei_1 * f.g1 + wei_2 * f.g2 + wei_3 * f.g3, 1000);
    tt.b = division( wei_1 * f.b1 + wei_2 * f.b2 + wei_3 * f.b3, 1000);
    return ivec3(tt.r, tt.g, tt.b);
    }
    ivec4 D_texture2D(sampler2D sampler,txt_coord t){
    int tx0, ty0, wei_x, wei_y;
    vec4 color0, color1, color2, color3;
    tx0 = division ( t.x, 1000);
    ty0 = division ( t.y, 1000);
    color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
    color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
    color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
    color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
    wei_x = mod (t.x, 1000);
    wei_y = mod (t.y, 1000);
    return cal_color(color0, color1, color2, color3, wei_x, wei_y);
    }
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
    int r, g, b;
    r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
    g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
    b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
    return ivec4( r, g, b, 100 );
    }
    vec4 col_transfer( ivec4 c){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    vec4 col_transfer(ivec3 c, int a){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(a)/ 100.0);
    }
    ivec3 D_normalize(ivec3 a){
    int rate = isqrt (division(100000000, a[0] * a[0] + a[1] * a[1] + a[2] * a[2])) ;
    return ivec3(division(a[0] * rate, 10), division(a[1] * rate,10), division(a[2] * rate,10));
    }
    int isqrt(int a){
    for (int i = 0; i < 1000; i++)
        if (i * i >= a)
        return i;
    }
    ivec3 D_multiple(ivec3 x, int b)
    {
    return ivec3(division(x[0] * b,1000), division(x[1] * b,1000), division(x[2] * b,1000));
    }
    ivec3 D_multiple(ivec3 x, ivec3 y)
    {
    return ivec3(division(x[0] * y[0],1000), division(x[1] * y[1],1000), division(x[2] * y[2],1000));
    }
    ivec3 D_division(ivec3 x, int y)
    {
    return ivec3(division(x[0],y), division(x[1],y), division(x[2],y));
    }
    int D_max(int a, int b)
    {
    if (a > b)
        return a;
    else
        return b;
    }
    int D_dot(ivec3 x, ivec3 y)
    {
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        sum += x[i] * y[i];
    }
    return division(sum, 1000);
    }
    tri_p changevalue(tri_p t)
    {
    t.x1 = division( (t.x1 + 1000) * 32, 250);
    t.y1 = division( (t.y1 + 1000) * 32, 250);
    t.z1 = division( (t.z1 + 1000) * 32, 250);
    t.x2 = division( (t.x2 + 1000) * 32, 250);
    t.y2 = division( (t.y2 + 1000) * 32, 250);
    t.z2 = division( (t.z2 + 1000) * 32, 250);
    t.x3 = division( (t.x3 + 1000) * 32, 250);
    t.y3 = division( (t.y3 + 1000) * 32, 250);
    t.z3 = division( (t.z3 + 1000) * 32, 250);
    return t;
    }
    `;}
    
    
    //texture
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    varying vec2 fragTexCoord;
    uniform sampler2D sampler;
    
    void main()
    {
    gl_FragColor = texture2D(sampler, fragTexCoord);
    }`.replace("\n"," ").replace(/\s+/g, '')){
    return `precision mediump float;
    #define uniformNumber 336
    uniform ivec3 tri_point[333];
    uniform ivec2 text_point[333];
    uniform int tri_number;
    uniform sampler2D sampler;
    struct tri_p {
    int x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
    };
    struct txt_p {
    int x1, y1, x2, y2, x3,  y3;
    };
    struct txt_coord{
    int x, y;
    };
    
    #define init tri_p tri; txt_p texcoord; int z; z = -512;gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);int z0; txt_coord fragTexCoord;
    #define assign tri.x0 = int(gl_FragCoord.x); tri.y0 = int(gl_FragCoord.y); tri.x1 = tri_point[i][0]; tri.y1 = tri_point[i][1]; tri.z1 = tri_point[i][2]; tri.x2 = tri_point[i+1][0]; tri.y2 = tri_point[i+1][1]; tri.z2 = tri_point[i+1][2]; tri.x3 = tri_point[i+2][0]; tri.y3 = tri_point[i+2][1]; tri.z3 = tri_point[i+2][2];texcoord.x1 = text_point[i][0]; texcoord.y1 = text_point[i][1];texcoord.x2 = text_point[i+1][0]; texcoord.y2 = text_point[i+1][1];texcoord.x3 = text_point[i+2][0]; texcoord.y3 = text_point[i+2][1];
    #define changePosition tri = changevalue(tri); 
    #define cal_Zbuffer z0 = cal_z(tri);
    #define pixel_on_triangle ( i < (tri_number * 3) ) && (judge(tri) == 1)
    #define draw_pixel (z0 >= -512) && (z0 <= 512) && (z0 > z)
    #define renew_Zbuffer z = z0; fragTexCoord = calCoord(texcoord, tri);
    int judge(tri_p t);
    int f_judge(tri_p t);
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2);   
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2);
    int cal_z(tri_p tri);
    int division(int a, int b);  
    int mod(int a, int b);  
    int isqrt(int a);
    int D_dot(ivec3 x, ivec3 y);
    int D_max(int a, int b);
    int D_multiple(int a, int b);
    ivec3 D_multiple(ivec3 x, int b);
    ivec3 D_multiple(ivec3 x, ivec3 y);
    ivec3 D_division(ivec3 x, int y);
    int D_division(int x, int y);
    tri_p changevalue(tri_p tri);
    int  wei_1, wei_2, wei_3;
    
    
    txt_coord calCoord(txt_p f, tri_p t);
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    ivec3 D_normalize(ivec3 a);
    vec4 col_transfer(ivec4 color); 
    vec4 col_transfer(ivec3 color, int a);    
    // r,g,b 0 - 255   a 0 - 100                 
    void main()
    {
    init;
    for (int i = 0; i < uniformNumber; i+= 3){
        assign;
        //changePosition;
        if ( pixel_on_triangle ){
            cal_Zbuffer;
        if ( draw_pixel ){
            renew_Zbuffer;
            gl_FragColor = col_transfer( D_texture2D(sampler, fragTexCoord));
        } 
        }
    } 
    }
    
    int judge(tri_p t) {
        if (( PinAB(t.x0 - t.x1, t.y0 - t.y1, t.x2 - t.x1, t.y2 - t.y1, t.x3 - t.x1, t.y3 - t.y1)+ PinAB(t.x0 - t.x2, t.y0 - t.y2, t.x3 - t.x2, t.y3 - t.y2, t.x1 - t.x2, t.y1 - t.y2) 
        + PinAB(t.x0 - t.x3, t.y0 - t.y3, t.x2 - t.x3, t.y2 - t.y3, t.x1 - t.x3, t.y1 - t.y3) == 3)  )
        {return 1;}
        else
        {return 0;}
    }
    
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2){ 
    int kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0 >= kb ) && (0 <= kc )) || ((0  <= kb ) && (0 >= kc)) ) 
    return 1;
    return 0;
    }
    
    int f_judge(tri_p t){
    if ( f_PinAB( float(t.x0 - t.x1), float(t.y0 - t.y1), float(t.x2 - t.x1), float(t.y2 - t.y1), float(t.x3 - t.x1), float(t.y3 - t.y1))
        + f_PinAB( float(t.x0 - t.x2), float(t.y0 - t.y2), float(t.x3 - t.x2), float(t.y3 - t.y2), float(t.x1 - t.x2), float(t.y1 - t.y2)) 
        + f_PinAB( float(t.x0 - t.x3), float(t.y0 - t.y3), float(t.x2 - t.x3), float(t.y2 - t.y3), float(t.x1 - t.x3), float(t.y1 - t.y3))
        == 3){return 1;}
    else{return 0;}
    }
    
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2){ 
    float kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0.0001 > kb) && (-0.0001 < kc)) || ((-0.0001 < kb) && (0.0001 > kc)) ) {return 1;} return 0; 
    }
    
    int cal_z(tri_p t){
    int A, B, C , D , K;
    A = (t.y3 - t.y1)*(t.z3 - t.z1) - (t.z2 - t.z1)*(t.y3 - t.y1);
    B = (t.x3 - t.x1)*(t.z2 - t.z1) - (t.x2 - t.x1)*(t.z3 - t.z1);
    C = (t.x2 - t.x1)*(t.y3 - t.y1) - (t.x3 - t.x1)*(t.y2 - t.y1);
    D = -1 * (A * t.x1 + B * t.y1 + C * t.z1);
    return (-1 *  division( (A * t.x0 + B * t.y0 + D) , C));
    }
    
    int division(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return (n - 3);
    else if ( (n - 1) * b >= a )
        return (n - 2);
    else if ( b * n >= a )
        return (n - 1);
    else if ( (n + 1) * b >= a )
        return n ;
    else
        return (n + 1);
    }
    
    int mod(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return a - (n - 3) * b;
    else if ( (n - 1) * b >= a )
        return a - (n - 2) * b;
    else if ( b * n >= a )
        return a - (n - 1) * b;
    else if ( (n + 1) * b >= a )
        return a - n * b;
    else
        return a - (n + 1) * b;
    }
    
    txt_coord calCoord(txt_p f, tri_p t){
    txt_coord tt;
    int bcs1, bcs2, bcs3, cs1, cs2, cs3;
    bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
    cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_1 = division(bcs1 * 1000, cs1);
    
    bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
    cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_2 = division(bcs2 * 1000, cs2);
    
    bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
    cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_3 = division(bcs3 * 1000, cs3);
    // 在这里还是256000这样一个系数
    
    f.x1 = division( f.x1 * 51, 200);
    f.y1 = division( f.y1 * 51, 200);
    f.x2 = division( f.x2 * 51, 200);
    f.y2 = division( f.y2 * 51, 200);
    f.x3 = division( f.x3 * 51, 200);
    f.y3 = division( f.y3 * 51, 200); 
    
    tt.x = wei_1 * f.x1 + wei_2 * f.x2 + wei_3 * f.x3;
    tt.y = wei_1 * f.y1 + wei_2 * f.y2 + wei_3 * f.y3;
    return tt;
    }
    
    
    ivec4 D_texture2D(sampler2D sampler,txt_coord t){
    int tx0, ty0, wei_x, wei_y;
    vec4 color0, color1, color2, color3;
    tx0 = division ( t.x, 1000);
    ty0 = division ( t.y, 1000);
    color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
    color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
    color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
    color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
    
    wei_x = mod (t.x, 1000);
    wei_y = mod (t.y, 1000);
    return cal_color(color0, color1, color2, color3, wei_x, wei_y);
    }
    
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
    int r, g, b;
    r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
    g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
    b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
    return ivec4( r, g, b, 100 );
    }
    
    vec4 col_transfer( ivec4 c){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    
    vec4 col_transfer(ivec3 c, int a){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(a)/ 100.0);
    }
    
    ivec3 D_normalize(ivec3 a){
    int rate = isqrt (division(100000, D_multiple(a[0],a[0]) + D_multiple(a[1],a[1]) + D_multiple(a[2],a[2]))) ;
    return ivec3(division(a[0] * rate, 10), division(a[1] * rate,10), division(a[2] * rate,10));
    }
    
    int isqrt(int a){
    for (int i = 0; i < 1000; i++)
        if (i * i >= a)
        return i;
    }
    
    int D_multiple(int a, int b)
    {
    if (division(b, 1000) > 100)
        {
            return a * division(b, 1000);
        }	
    else if (division(a, 1000) > 100)
        {
            return b * division(a, 1000);
        }	
        else
        {
            return division(a * b, 1000);
        }
    }
    
    
    ivec3 D_multiple(ivec3 x, int b)
    {
    return ivec3(D_multiple(x[0] ,b), D_multiple(x[1] ,b), D_multiple(x[2] ,b));
    }
    
    ivec3 D_multiple(ivec3 x, ivec3 y)
    {
    return ivec3(D_multiple(x[0] ,y[0]), D_multiple(x[1] ,y[1]), D_multiple(x[2] ,y[2]));
    }
    
    ivec3 D_division(ivec3 x, int y)
    {
    return ivec3(division(x[0],y), division(x[1],y), division(x[2],y));
    }
    
    int D_max(int a, int b)
    {
    if (a > b)
        return a;
    else
        return b;
    }
    
    int D_dot(ivec3 x, ivec3 y)
    {
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        sum += D_multiple(x[i], y[i]);
    }
    return sum;
    }
    
    tri_p changevalue(tri_p t)
    {
    t.x1 = division( (t.x1 + 1000) * 32, 250);
    t.y1 = division( (t.y1 + 1000) * 32, 250);
    t.z1 = division( (t.z1 + 1000) * 32, 250);
    t.x2 = division( (t.x2 + 1000) * 32, 250);
    t.y2 = division( (t.y2 + 1000) * 32, 250);
    t.z2 = division( (t.z2 + 1000) * 32, 250);
    t.x3 = division( (t.x3 + 1000) * 32, 250);
    t.y3 = division( (t.y3 + 1000) * 32, 250);
    t.z3 = division( (t.z3 + 1000) * 32, 250);
    return t;
    }
    
    `;
    }
    
    //simple light
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    struct DirectionalLight
    {
        vec3 direction;
        vec3 color;
    };
    
    varying vec2 fragTexCoord;
    varying vec3 fragNormal;
    
    uniform vec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    
    void main()
    {
        vec3 surfaceNormal = normalize(fragNormal);
        vec3 normSunDir = normalize(sun.direction);
        vec4 texel = texture2D(sampler, fragTexCoord);
    
        vec3 lightIntensity = ambientLightIntensity +
            sun.color * max(dot(fragNormal, normSunDir), 0.0);
    
        gl_FragColor = vec4(texel.rgb * lightIntensity, texel.a);
    }`.replace("\n"," ").replace(/\s+/g, '')){
    return ` precision mediump float;
    struct DirectionalLight
    {
        ivec3 direction;
        ivec3 color;
    };
    #define uniformNumber 336
    uniform ivec3 tri_point[333];
    uniform ivec2 text_point[333];
    uniform ivec3 nor_point[333];
    uniform int tri_number;
    struct tri_p {
    int x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
    };
    struct txt_p {
    int x1, y1, x2, y2, x3,  y3;
    };
    struct txt_coord{
    int x, y;
    };
    
    #define init tri_p tri; txt_p texcoord; int z; z = -512;gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);int z0; txt_coord fragTexCoord;
    #define assign tri.x0 = int(gl_FragCoord.x); tri.y0 = int(gl_FragCoord.y); tri.x1 = tri_point[i][0]; tri.y1 = tri_point[i][1]; tri.z1 = tri_point[i][2]; tri.x2 = tri_point[i+1][0]; tri.y2 = tri_point[i+1][1]; tri.z2 = tri_point[i+1][2]; tri.x3 = tri_point[i+2][0]; tri.y3 = tri_point[i+2][1]; tri.z3 = tri_point[i+2][2];texcoord.x1 = text_point[i][0]; texcoord.y1 = text_point[i][1];texcoord.x2 = text_point[i+1][0]; texcoord.y2 = text_point[i+1][1];texcoord.x3 = text_point[i+2][0]; texcoord.y3 = text_point[i+2][1];
    #define changePosition tri = changevalue(tri); 
    #define cal_Zbuffer z0 = cal_z(tri);
    #define pixel_on_triangle ( i < (tri_number * 3) ) && (judge(tri) == 1)
    #define draw_pixel (z0 >= -512) && (z0 <= 512) && (z0 > z)
    #define renew_Zbuffer z = z0; fragTexCoord = calCoord(texcoord, tri);
    int judge(tri_p t);
    int f_judge(tri_p t);
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2);   
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2);
    int cal_z(tri_p tri);
    int division(int a, int b);  
    int mod(int a, int b);  
    int isqrt(int a);
    int D_dot(ivec3 x, ivec3 y);
    int D_max(int a, int b);
    int D_multiple(int a, int b);
    ivec3 D_multiple(ivec3 x, int b);
    ivec3 D_multiple(ivec3 x, ivec3 y);
    ivec3 D_division(ivec3 x, int y);
    int D_division(int x, int y);
    tri_p changevalue(tri_p tri);
    int  wei_1, wei_2, wei_3;
    
    
    txt_coord calCoord(txt_p f, tri_p t);
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    ivec3 D_normalize(ivec3 a);
    vec4 col_transfer(ivec4 color); 
    vec4 col_transfer(ivec3 color, int a);   
    // r,g,b 0 - 255   a 0 - 100      
    
    
    uniform ivec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    
    
    void main()
    {
    init;
    for (int i = 0; i < uniformNumber; i+= 3){
        assign;
        //changePosition;
        if ( pixel_on_triangle ){
            cal_Zbuffer;
        if ( draw_pixel ){
            renew_Zbuffer;
            ivec3 surfaceNormal = ivec3 ( D_multiple(wei_1 , nor_point[i][0]) +  D_multiple(wei_2 , nor_point[i+1][0]) +  D_multiple(wei_3 , nor_point[i+2][0])   ,  D_multiple(wei_1 , nor_point[i][1]) +  D_multiple(wei_2 , nor_point[i+1][1]) +  D_multiple(wei_3 , nor_point[i+2][1]) ,  D_multiple(wei_1 , nor_point[i][2]) +  D_multiple(wei_2 , nor_point[i+1][2]) +  D_multiple(wei_3 , nor_point[i+2][2])   );
            ivec3 normSunDir = D_normalize(sun.direction);
            ivec4 texel = D_texture2D(sampler, fragTexCoord);
            ivec3 lightIntensity = ambientLightIntensity + D_multiple(sun.color, D_max(D_dot(surfaceNormal, normSunDir), 0));
            gl_FragColor =vec4(col_transfer( D_multiple(texel.rgb , lightIntensity), texel.a));
        } 
        }
    } 
    }
    
    int judge(tri_p t) {
        if (( PinAB(t.x0 - t.x1, t.y0 - t.y1, t.x2 - t.x1, t.y2 - t.y1, t.x3 - t.x1, t.y3 - t.y1)+ PinAB(t.x0 - t.x2, t.y0 - t.y2, t.x3 - t.x2, t.y3 - t.y2, t.x1 - t.x2, t.y1 - t.y2) 
        + PinAB(t.x0 - t.x3, t.y0 - t.y3, t.x2 - t.x3, t.y2 - t.y3, t.x1 - t.x3, t.y1 - t.y3) == 3)  )
        {return 1;}
        else
        {return 0;}
    }
    
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2){ 
    int kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0 >= kb ) && (0 <= kc )) || ((0  <= kb ) && (0 >= kc)) ) 
    return 1;
    return 0;
    }
    
    int f_judge(tri_p t){
    if ( f_PinAB( float(t.x0 - t.x1), float(t.y0 - t.y1), float(t.x2 - t.x1), float(t.y2 - t.y1), float(t.x3 - t.x1), float(t.y3 - t.y1))
        + f_PinAB( float(t.x0 - t.x2), float(t.y0 - t.y2), float(t.x3 - t.x2), float(t.y3 - t.y2), float(t.x1 - t.x2), float(t.y1 - t.y2)) 
        + f_PinAB( float(t.x0 - t.x3), float(t.y0 - t.y3), float(t.x2 - t.x3), float(t.y2 - t.y3), float(t.x1 - t.x3), float(t.y1 - t.y3))
        == 3){return 1;}
    else{return 0;}
    }
    
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2){ 
    float kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0.0001 > kb) && (-0.0001 < kc)) || ((-0.0001 < kb) && (0.0001 > kc)) ) {return 1;} return 0; 
    }
    
    int cal_z(tri_p t){
    int A, B, C , D , K;
    A = (t.y3 - t.y1)*(t.z3 - t.z1) - (t.z2 - t.z1)*(t.y3 - t.y1);
    B = (t.x3 - t.x1)*(t.z2 - t.z1) - (t.x2 - t.x1)*(t.z3 - t.z1);
    C = (t.x2 - t.x1)*(t.y3 - t.y1) - (t.x3 - t.x1)*(t.y2 - t.y1);
    D = -1 * (A * t.x1 + B * t.y1 + C * t.z1);
    return (-1 *  division( (A * t.x0 + B * t.y0 + D) , C));
    }
    
    int division(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return (n - 3);
    else if ( (n - 1) * b >= a )
        return (n - 2);
    else if ( b * n >= a )
        return (n - 1);
    else if ( (n + 1) * b >= a )
        return n ;
    else
        return (n + 1);
    }
    
    int mod(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return a - (n - 3) * b;
    else if ( (n - 1) * b >= a )
        return a - (n - 2) * b;
    else if ( b * n >= a )
        return a - (n - 1) * b;
    else if ( (n + 1) * b >= a )
        return a - n * b;
    else
        return a - (n + 1) * b;
    }
    
    txt_coord calCoord(txt_p f, tri_p t){
    txt_coord tt;
    int bcs1, bcs2, bcs3, cs1, cs2, cs3;
    bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
    cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_1 = division(bcs1 * 1000, cs1);
    
    bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
    cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_2 = division(bcs2 * 1000, cs2);
    
    bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
    cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_3 = division(bcs3 * 1000, cs3);
    // 在这里还是256000这样一个系数
    
    f.x1 = division( f.x1 * 51, 200);
    f.y1 = division( f.y1 * 51, 200);
    f.x2 = division( f.x2 * 51, 200);
    f.y2 = division( f.y2 * 51, 200);
    f.x3 = division( f.x3 * 51, 200);
    f.y3 = division( f.y3 * 51, 200); 
    
    tt.x = wei_1 * f.x1 + wei_2 * f.x2 + wei_3 * f.x3;
    tt.y = wei_1 * f.y1 + wei_2 * f.y2 + wei_3 * f.y3;
    return tt;
    }
    
    
    ivec4 D_texture2D(sampler2D sampler,txt_coord t){
    int tx0, ty0, wei_x, wei_y;
    vec4 color0, color1, color2, color3;
    tx0 = division ( t.x, 1000);
    ty0 = division ( t.y, 1000);
    color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
    color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
    color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
    color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
    
    wei_x = mod (t.x, 1000);
    wei_y = mod (t.y, 1000);
    return cal_color(color0, color1, color2, color3, wei_x, wei_y);
    }
    
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
    int r, g, b;
    r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
    g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
    b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
    return ivec4( r, g, b, 100 );
    }
    
    vec4 col_transfer( ivec4 c){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    
    vec4 col_transfer(ivec3 c, int a){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(a)/ 100.0);
    }
    
    ivec3 D_normalize(ivec3 a){
    int rate = isqrt (division(100000, D_multiple(a[0],a[0]) + D_multiple(a[1],a[1]) + D_multiple(a[2],a[2]))) ;
    return ivec3(division(a[0] * rate, 10), division(a[1] * rate,10), division(a[2] * rate,10));
    }
    
    int isqrt(int a){
    for (int i = 0; i < 1000; i++)
        if (i * i >= a)
        return i;
    }
    
    int D_multiple(int a, int b)
    {
    if (division(b, 1000) > 100)
        {
            return a * division(b, 1000);
        }	
    else if (division(a, 1000) > 100)
        {
            return b * division(a, 1000);
        }	
        else
        {
            return division(a * b, 1000);
        }
    }
    
    
    ivec3 D_multiple(ivec3 x, int b)
    {
    return ivec3(D_multiple(x[0] ,b), D_multiple(x[1] ,b), D_multiple(x[2] ,b));
    }
    
    ivec3 D_multiple(ivec3 x, ivec3 y)
    {
    return ivec3(D_multiple(x[0] ,y[0]), D_multiple(x[1] ,y[1]), D_multiple(x[2] ,y[2]));
    }
    
    ivec3 D_division(ivec3 x, int y)
    {
    return ivec3(division(x[0],y), division(x[1],y), division(x[2],y));
    }
    
    int D_max(int a, int b)
    {
    if (a > b)
        return a;
    else
        return b;
    }
    
    int D_dot(ivec3 x, ivec3 y)
    {
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        sum += D_multiple(x[i], y[i]);
    }
    return sum;
    }
    
    tri_p changevalue(tri_p t)
    {
    t.x1 = division( (t.x1 + 1000) * 32, 250);
    t.y1 = division( (t.y1 + 1000) * 32, 250);
    t.z1 = division( (t.z1 + 1000) * 32, 250);
    t.x2 = division( (t.x2 + 1000) * 32, 250);
    t.y2 = division( (t.y2 + 1000) * 32, 250);
    t.z2 = division( (t.z2 + 1000) * 32, 250);
    t.x3 = division( (t.x3 + 1000) * 32, 250);
    t.y3 = division( (t.y3 + 1000) * 32, 250);
    t.z3 = division( (t.z3 + 1000) * 32, 250);
    return t;
    }
    `;
    }
    
    //simple light
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    struct DirectionalLight
    {
        vec3 direction;
        vec3 diffuse;
        vec3 specular;
    };
    
    varying vec2 fragTexCoord;
    varying vec3 fragNormal;
    varying vec4 vPosition;
    
    uniform vec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    
    void main()
    {
        vec3 lightDirection = normalize(sun.direction - vPosition.xyz);
        vec3 normSunDir = normalize(sun.direction);
        vec3 surfaceNormal = normalize(fragNormal);
        vec4 texel = texture2D(sampler, fragTexCoord);
    
        float specularLightWeighting = 0.0;
        vec3 eyeDirection = normalize(-vPosition.xyz);
        vec3 reflectionDirection = reflect(-lightDirection, surfaceNormal);
        specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 16.0);
    
        float diffuseLightWeighting = max(dot(surfaceNormal, sun.direction), 0.0);
    
        vec3 lightIntensity = ambientLightIntensity +
            sun.specular * specularLightWeighting + 
            sun.diffuse * diffuseLightWeighting;
    
        gl_FragColor = vec4(texel.rgb * lightIntensity, texel.a);
    }
    
    `.replace("\n"," ").replace(/\s+/g, '')){
    return ` precision mediump float;
    
    struct DirectionalLight
    {
        ivec3 direction;
        ivec3 diffuse;
        ivec3 specular;
    };
    #define uniformNumber 228
    uniform ivec3 tri_point[225];
    uniform ivec2 text_point[225];
    uniform ivec3 nor_point[225];
    uniform ivec4 vPositionVary[225];
    uniform int tri_number;
    struct tri_p {
    int x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
    };
    struct txt_p {
    int x1, y1, x2, y2, x3,  y3;
    };
    struct txt_coord{
    int x, y;
    };
    #define init tri_p tri; txt_p texcoord; int z; z = -512;gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);int z0; txt_coord fragTexCoord;
    #define assign tri.x0 = int(gl_FragCoord.x); tri.y0 = int(gl_FragCoord.y); tri.x1 = tri_point[i][0]; tri.y1 = tri_point[i][1]; tri.z1 = tri_point[i][2]; tri.x2 = tri_point[i+1][0]; tri.y2 = tri_point[i+1][1]; tri.z2 = tri_point[i+1][2]; tri.x3 = tri_point[i+2][0]; tri.y3 = tri_point[i+2][1]; tri.z3 = tri_point[i+2][2];texcoord.x1 = text_point[i][0]; texcoord.y1 = text_point[i][1];texcoord.x2 = text_point[i+1][0]; texcoord.y2 = text_point[i+1][1];texcoord.x3 = text_point[i+2][0]; texcoord.y3 = text_point[i+2][1];
    #define changePosition tri = changevalue(tri); 
    #define cal_Zbuffer z0 = cal_z(tri);
    #define pixel_on_triangle ( i < (tri_number * 3) ) && (judge(tri) == 1)
    #define draw_pixel (z0 >= -512) && (z0 <= 512) && (z0 > z)
    #define renew_Zbuffer z = z0; fragTexCoord = calCoord(texcoord, tri);
    int judge(tri_p t);
    int f_judge(tri_p t);
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2);   
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2);
    int cal_z(tri_p tri);
    int division(int a, int b);  
    int mod(int a, int b);  
    int isqrt(int a);
    int D_dot(ivec3 x, ivec3 y);
    int D_max(int a, int b);
    int D_multiple(int a, int b);
    ivec3 D_multiple(ivec3 x, int b);
    ivec3 D_multiple(ivec3 x, ivec3 y);
    ivec3 D_division(ivec3 x, int y);
    int D_division(int x, int y);
    tri_p changevalue(tri_p tri);
    
    
    txt_coord calCoord(txt_p f, tri_p t);
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    ivec3 D_normalize(ivec3 a);
    vec4 col_transfer(ivec4 color); 
    vec4 col_transfer(ivec3 color, int a);   
    vec3 col_transfer(ivec3 color);
    ivec3 D_reflect(ivec3 x, ivec3 y);  
    int D_pow(int a, int b); 
    // r,g,b 0 - 255   a 0 - 100   
    
    uniform ivec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    int  wei_1, wei_2, wei_3;
    
    void main()
    {
    init;
    for (int i = 0; i < uniformNumber; i+= 3){
        assign;
        //changePosition;
        if ( pixel_on_triangle ){
            cal_Zbuffer;
        if ( draw_pixel ){
            renew_Zbuffer;
            ivec3 fragNormal = ivec3 ( D_multiple( wei_1 , nor_point[i][0]) + D_multiple(wei_2 , nor_point[i+1][0]) + D_multiple(wei_3 , nor_point[i+2][0])   ,           D_multiple(wei_1 , nor_point[i][1]) + D_multiple(wei_2 , nor_point[i+1][1]) + D_multiple(wei_3 , nor_point[i+2][1]) ,             D_multiple(wei_1 , nor_point[i][2]) + D_multiple(wei_2 , nor_point[i+1][2]) + D_multiple(wei_3 , nor_point[i+2][2])    );
                ivec4 vPosition = ivec4 ( D_multiple(wei_1 , vPositionVary[i][0]) + D_multiple(wei_2 , vPositionVary[i+1][0]) + D_multiple(wei_3 , vPositionVary[i+2][0])   , D_multiple(wei_1 , vPositionVary[i][1]) + D_multiple(wei_2 , vPositionVary[i+1][1]) + D_multiple(wei_3 , vPositionVary[i+2][1]) , D_multiple(wei_1 , vPositionVary[i][2]) + D_multiple(wei_2 , vPositionVary[i+1][2]) + D_multiple(wei_3 , vPositionVary[i+2][2]),  D_multiple(wei_1 , vPositionVary[i][3]) + D_multiple(wei_2 , vPositionVary[i+1][3]) + D_multiple(wei_3 , vPositionVary[i+2][3])    );
            ivec3 lightDirection = D_normalize(sun.direction - vPosition.xyz);
            ivec3 normSunDir = D_normalize(sun.direction);
            ivec3 surfaceNormal = D_normalize(fragNormal);
            ivec4 texel = D_texture2D(sampler, fragTexCoord);
    
            int specularLightWeighting = 0;
            ivec3 eyeDirection = D_normalize(-vPosition.xyz);
            ivec3 reflectionDirection = D_reflect(-lightDirection, surfaceNormal);
            specularLightWeighting = D_pow(D_max(D_dot(reflectionDirection, eyeDirection), 0), 16);
    
            int diffuseLightWeighting = D_max(D_dot(surfaceNormal, sun.direction), 0);
    
            ivec3 lightIntensity = ambientLightIntensity +
                    D_multiple(sun.specular , specularLightWeighting)  + 
                    D_multiple(sun.diffuse , diffuseLightWeighting);
                    
    
            gl_FragColor = vec4(col_transfer(D_multiple(texel.rgb , lightIntensity)) , 1.0);
            //gl_FragColor = col_transfer( texel);
    
    
        } 
        }
    } 
    }
    
    int judge(tri_p t) {
        if (( PinAB(t.x0 - t.x1, t.y0 - t.y1, t.x2 - t.x1, t.y2 - t.y1, t.x3 - t.x1, t.y3 - t.y1)+ PinAB(t.x0 - t.x2, t.y0 - t.y2, t.x3 - t.x2, t.y3 - t.y2, t.x1 - t.x2, t.y1 - t.y2) 
        + PinAB(t.x0 - t.x3, t.y0 - t.y3, t.x2 - t.x3, t.y2 - t.y3, t.x1 - t.x3, t.y1 - t.y3) == 3)  )
        {return 1;}
        else
        {return 0;}
    }
    
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2){ 
    int kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0 >= kb ) && (0 <= kc )) || ((0  <= kb ) && (0 >= kc)) ) 
    return 1;
    return 0;
    }
    
    int f_judge(tri_p t){
    if ( f_PinAB( float(t.x0 - t.x1), float(t.y0 - t.y1), float(t.x2 - t.x1), float(t.y2 - t.y1), float(t.x3 - t.x1), float(t.y3 - t.y1))
        + f_PinAB( float(t.x0 - t.x2), float(t.y0 - t.y2), float(t.x3 - t.x2), float(t.y3 - t.y2), float(t.x1 - t.x2), float(t.y1 - t.y2)) 
        + f_PinAB( float(t.x0 - t.x3), float(t.y0 - t.y3), float(t.x2 - t.x3), float(t.y2 - t.y3), float(t.x1 - t.x3), float(t.y1 - t.y3))
        == 3){return 1;}
    else{return 0;}
    }
    
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2){ 
    float kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0.0001 > kb) && (-0.0001 < kc)) || ((-0.0001 < kb) && (0.0001 > kc)) ) {return 1;} return 0; 
    }
    
    int cal_z(tri_p t){
    int A, B, C , D , K;
    A = (t.y3 - t.y1)*(t.z3 - t.z1) - (t.z2 - t.z1)*(t.y3 - t.y1);
    B = (t.x3 - t.x1)*(t.z2 - t.z1) - (t.x2 - t.x1)*(t.z3 - t.z1);
    C = (t.x2 - t.x1)*(t.y3 - t.y1) - (t.x3 - t.x1)*(t.y2 - t.y1);
    D = -1 * (A * t.x1 + B * t.y1 + C * t.z1);
    return (-1 *  division( (A * t.x0 + B * t.y0 + D) , C));
    }
    
    int division(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return (n - 3);
    else if ( (n - 1) * b >= a )
        return (n - 2);
    else if ( b * n >= a )
        return (n - 1);
    else if ( (n + 1) * b >= a )
        return n ;
    else
        return (n + 1);
    }
    
    int mod(int a, int b){
    int n = a / b;
    if ( (n - 2) * b >= a )
        return a - (n - 3) * b;
    else if ( (n - 1) * b >= a )
        return a - (n - 2) * b;
    else if ( b * n >= a )
        return a - (n - 1) * b;
    else if ( (n + 1) * b >= a )
        return a - n * b;
    else
        return a - (n + 1) * b;
    }
    
    txt_coord calCoord(txt_p f, tri_p t){
    txt_coord tt;
    int bcs1, bcs2, bcs3, cs1, cs2, cs3;
    bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
    cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_1 = division(bcs1 * 1000, cs1);
    
    bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
    cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_2 = division(bcs2 * 1000, cs2);
    
    bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
    cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
    wei_3 = division(bcs3 * 1000, cs3);
    // 在这里还是256000这样一个系数
    
    f.x1 = division( f.x1 * 51, 200);
    f.y1 = division( f.y1 * 51, 200);
    f.x2 = division( f.x2 * 51, 200);
    f.y2 = division( f.y2 * 51, 200);
    f.x3 = division( f.x3 * 51, 200);
    f.y3 = division( f.y3 * 51, 200); 
    
    tt.x = wei_1 * f.x1 + wei_2 * f.x2 + wei_3 * f.x3;
    tt.y = wei_1 * f.y1 + wei_2 * f.y2 + wei_3 * f.y3;
    return tt;
    }
    
    
    ivec4 D_texture2D(sampler2D sampler,txt_coord t){
    int tx0, ty0, wei_x, wei_y;
    vec4 color0, color1, color2, color3;
    tx0 = division ( t.x, 1000);
    ty0 = division ( t.y, 1000);
    color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
    color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
    color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
    color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
    
    wei_x = mod (t.x, 1000);
    wei_y = mod (t.y, 1000);
    return cal_color(color0, color1, color2, color3, wei_x, wei_y);
    }
    
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
    int r, g, b;
    r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
    g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
    b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
    return ivec4( r, g, b, 100 );
    }
    
    vec4 col_transfer( ivec4 c){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    
    vec4 col_transfer(ivec3 c, int a){
    return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(a)/ 100.0);
    }
    
    vec3 col_transfer(ivec3 c){
    return vec3 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0);
    }
    
    ivec3 D_normalize(ivec3 a){
    int rate = isqrt (division(100000, D_multiple(a[0],a[0]) + D_multiple(a[1],a[1]) + D_multiple(a[2],a[2]))) ;
    return ivec3(division(a[0] * rate, 10), division(a[1] * rate,10), division(a[2] * rate,10));
    }
    
    int isqrt(int a){
    for (int i = 0; i < 1000; i++)
        if (i * i >= a)
        return i;
    }
    
    int D_multiple(int a, int b)
    {
    if (division(b, 1000) > 100)
        {
            return a * division(b, 1000);
        }	
    else if (division(a, 1000) > 100)
        {
            return b * division(a, 1000);
        }	
        else
        {
            return division(a * b, 1000);
        }
    }
    
    
    ivec3 D_multiple(ivec3 x, int b)
    {
    return ivec3(D_multiple(x[0] ,b), D_multiple(x[1] ,b), D_multiple(x[2] ,b));
    }
    
    ivec3 D_multiple(ivec3 x, ivec3 y)
    {
    return ivec3(D_multiple(x[0] ,y[0]), D_multiple(x[1] ,y[1]), D_multiple(x[2] ,y[2]));
    }
    
    ivec3 D_division(ivec3 x, int y)
    {
    return ivec3(division(x[0],y), division(x[1],y), division(x[2],y));
    }
    
    int D_max(int a, int b)
    {
    if (a > b)
        return a;
    else
        return b;
    }
    
    int D_dot(ivec3 x, ivec3 y)
    {
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        sum += D_multiple(x[i], y[i]);
    }
    return sum;
    }
    
    tri_p changevalue(tri_p t)
    {
    t.x1 = division( (t.x1 + 1000) * 32, 250);
    t.y1 = division( (t.y1 + 1000) * 32, 250);
    t.z1 = division( (t.z1 + 1000) * 32, 250);
    t.x2 = division( (t.x2 + 1000) * 32, 250);
    t.y2 = division( (t.y2 + 1000) * 32, 250);
    t.z2 = division( (t.z2 + 1000) * 32, 250);
    t.x3 = division( (t.x3 + 1000) * 32, 250);
    t.y3 = division( (t.y3 + 1000) * 32, 250);
    t.z3 = division( (t.z3 + 1000) * 32, 250);
    return t;
    }
    
    //I - 2.0 * dot(N, I) * N
    ivec3 D_reflect(ivec3 x, ivec3 y)
    {
        return ivec3(x[0] - 2 * D_multiple(D_dot(x,y),y[0]),x[1] - 2 * D_multiple(D_dot(x,y),y[1]), x[2] - 2 * D_multiple(D_dot(x,y),y[2]));
    }
    
    int D_pow(int a, int b)
    {
        int ans = 1;
        for (int i = 0; i < 16; i++) {
            ans = D_multiple(ans, a);
        }
        return ans;
    }
    `;
    }
    
    
    //two texture more light
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    struct DirectionalLight
    {
        vec3 direction;
        vec3 diffuse;
        vec3 specular;
    };
    
    varying vec2 fragTexCoord;
    varying vec3 fragNormal;
    varying vec4 vPosition;
    
    uniform vec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D image0;
    uniform sampler2D image1;
    
    void main()
    {
        vec3 lightDirection = normalize(sun.direction - vPosition.xyz);
        vec3 normSunDir = normalize(sun.direction);
        vec3 surfaceNormal = normalize(fragNormal);
        vec4 texel0 = texture2D(image0, fragTexCoord);
        vec4 texel1 = texture2D(image1, fragTexCoord);
    
        float specularLightWeighting = 0.0;
        vec3 eyeDirection = normalize(-vPosition.xyz);
        vec3 reflectionDirection = reflect(-lightDirection, surfaceNormal);
        specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 16.0);
    
        float diffuseLightWeighting = max(dot(surfaceNormal, sun.direction), 0.0);
    
        vec3 lightIntensity = ambientLightIntensity +
            sun.specular * specularLightWeighting + 
            sun.diffuse * diffuseLightWeighting;
    
        gl_FragColor = vec4(texel0.rgb * texel1.rgb * lightIntensity, texel0.a* texel1.a);
    }
    `.replace("\n"," ").replace(/\s+/g, '')){
    return ` precision mediump float;
    
    struct DirectionalLight
    {
        ivec3 direction;
        ivec3 diffuse;
        ivec3 specular;
    };
    #define uniformNumber 228
    uniform ivec3 tri_point[225];
    uniform ivec2 text_point[225];
    uniform ivec3 nor_point[225];
    uniform ivec4 vPositionVary[225];
    uniform int tri_number;
    struct tri_p {
        int x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
    };
    struct txt_p {
        int x1, y1, x2, y2, x3,  y3;
    };
    struct txt_coord{
        int x, y;
    };
    #define init tri_p tri; txt_p texcoord; int z; z = -512;gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);int z0; txt_coord fragTexCoord;
    #define assign tri.x0 = int(gl_FragCoord.x); tri.y0 = int(gl_FragCoord.y); tri.x1 = tri_point[i][0]; tri.y1 = tri_point[i][1]; tri.z1 = tri_point[i][2]; tri.x2 = tri_point[i+1][0]; tri.y2 = tri_point[i+1][1]; tri.z2 = tri_point[i+1][2]; tri.x3 = tri_point[i+2][0]; tri.y3 = tri_point[i+2][1]; tri.z3 = tri_point[i+2][2];texcoord.x1 = text_point[i][0]; texcoord.y1 = text_point[i][1];texcoord.x2 = text_point[i+1][0]; texcoord.y2 = text_point[i+1][1];texcoord.x3 = text_point[i+2][0]; texcoord.y3 = text_point[i+2][1];
    #define changePosition tri = changevalue(tri); 
    #define cal_Zbuffer z0 = cal_z(tri);
    #define pixel_on_triangle ( i < (tri_number * 3) ) && (judge(tri) == 1)
    #define draw_pixel (z0 >= -512) && (z0 <= 512) && (z0 > z)
    #define renew_Zbuffer z = z0; fragTexCoord = calCoord(texcoord, tri);
    int judge(tri_p t);
    int f_judge(tri_p t);
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2);   
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2);
    int cal_z(tri_p tri);
    int division(int a, int b);  
    int mod(int a, int b);  
    int isqrt(int a);
    int D_dot(ivec3 x, ivec3 y);
    int D_max(int a, int b);
    int D_multiple(int a, int b);
    ivec3 D_multiple(ivec3 x, int b);
    ivec3 D_multiple(ivec3 x, ivec3 y);
    ivec3 D_division(ivec3 x, int y);
    int D_division(int x, int y);
    tri_p changevalue(tri_p tri);
    
    
    txt_coord calCoord(txt_p f, tri_p t);
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    ivec3 D_normalize(ivec3 a);
    vec4 col_transfer(ivec4 color); 
    vec4 col_transfer(ivec3 color, int a);   
    vec3 col_transfer(ivec3 color);
    ivec3 D_reflect(ivec3 x, ivec3 y);  
    int D_pow(int a, int b); 
    // r,g,b 0 - 255   a 0 - 100   
    
    uniform ivec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    int  wei_1, wei_2, wei_3;
    uniform sampler2D image0;
    uniform sampler2D image1;
    
            
    
    void main()
    {
        init;
        for (int i = 0; i < uniformNumber; i+= 3){
        assign;
        //changePosition;
        if ( pixel_on_triangle ){
            cal_Zbuffer;
            if ( draw_pixel ){
            renew_Zbuffer;
            ivec3 fragNormal = ivec3 ( D_multiple( wei_1 , nor_point[i][0]) + D_multiple(wei_2 , nor_point[i+1][0]) + D_multiple(wei_3 , nor_point[i+2][0])   ,           D_multiple(wei_1 , nor_point[i][1]) + D_multiple(wei_2 , nor_point[i+1][1]) + D_multiple(wei_3 , nor_point[i+2][1]) ,             D_multiple(wei_1 , nor_point[i][2]) + D_multiple(wei_2 , nor_point[i+1][2]) + D_multiple(wei_3 , nor_point[i+2][2])    );
            ivec4 vPosition = ivec4 ( D_multiple(wei_1 , vPositionVary[i][0]) + D_multiple(wei_2 , vPositionVary[i+1][0]) + D_multiple(wei_3 , vPositionVary[i+2][0])   , D_multiple(wei_1 , vPositionVary[i][1]) + D_multiple(wei_2 , vPositionVary[i+1][1]) + D_multiple(wei_3 , vPositionVary[i+2][1]) , D_multiple(wei_1 , vPositionVary[i][2]) + D_multiple(wei_2 , vPositionVary[i+1][2]) + D_multiple(wei_3 , vPositionVary[i+2][2]),  D_multiple(wei_1 , vPositionVary[i][3]) + D_multiple(wei_2 , vPositionVary[i+1][3]) + D_multiple(wei_3 , vPositionVary[i+2][3])    );
            ivec3 lightDirection = D_normalize(sun.direction - vPosition.xyz);
            ivec3 normSunDir = D_normalize(sun.direction);
            ivec3 surfaceNormal = D_normalize(fragNormal);
            ivec4 texel0 = D_texture2D(image0, fragTexCoord);
            ivec4 texel1 = D_texture2D(image1, fragTexCoord);
    
            int specularLightWeighting = 0;
            ivec3 eyeDirection = D_normalize(-vPosition.xyz);
            ivec3 reflectionDirection = D_reflect(-lightDirection, surfaceNormal);
            specularLightWeighting = D_pow(D_max(D_dot(reflectionDirection, eyeDirection), 0), 16);
    
            int diffuseLightWeighting = D_max(D_dot(surfaceNormal, sun.direction), 0);
    
            ivec3 lightIntensity = ambientLightIntensity +
                    D_multiple(sun.specular , specularLightWeighting)  + 
                    D_multiple(sun.diffuse , diffuseLightWeighting);
                    
    
            gl_FragColor = vec4(col_transfer(D_multiple( D_division (texel0.rgb * texel1.rgb, 255)  , lightIntensity)) , 1.0);
            //gl_FragColor = col_transfer( texel1);
    
    
            } 
        }
        } 
    }
    
    int judge(tri_p t) {
        if (( PinAB(t.x0 - t.x1, t.y0 - t.y1, t.x2 - t.x1, t.y2 - t.y1, t.x3 - t.x1, t.y3 - t.y1)+ PinAB(t.x0 - t.x2, t.y0 - t.y2, t.x3 - t.x2, t.y3 - t.y2, t.x1 - t.x2, t.y1 - t.y2) 
        + PinAB(t.x0 - t.x3, t.y0 - t.y3, t.x2 - t.x3, t.y2 - t.y3, t.x1 - t.x3, t.y1 - t.y3) == 3)  )
            {return 1;}
        else
            {return 0;}
    }
    
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2){ 
    int kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0 >= kb ) && (0 <= kc )) || ((0  <= kb ) && (0 >= kc)) ) 
        return 1;
        return 0;
    }
    
    int f_judge(tri_p t){
        if ( f_PinAB( float(t.x0 - t.x1), float(t.y0 - t.y1), float(t.x2 - t.x1), float(t.y2 - t.y1), float(t.x3 - t.x1), float(t.y3 - t.y1))
        + f_PinAB( float(t.x0 - t.x2), float(t.y0 - t.y2), float(t.x3 - t.x2), float(t.y3 - t.y2), float(t.x1 - t.x2), float(t.y1 - t.y2)) 
        + f_PinAB( float(t.x0 - t.x3), float(t.y0 - t.y3), float(t.x2 - t.x3), float(t.y2 - t.y3), float(t.x1 - t.x3), float(t.y1 - t.y3))
        == 3){return 1;}
        else{return 0;}
    }
    
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2){ 
        float kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
        if  ( ((0.0001 > kb) && (-0.0001 < kc)) || ((-0.0001 < kb) && (0.0001 > kc)) ) {return 1;} return 0; 
    }
    
    int cal_z(tri_p t){
        int A, B, C , D , K;
        A = (t.y3 - t.y1)*(t.z3 - t.z1) - (t.z2 - t.z1)*(t.y3 - t.y1);
        B = (t.x3 - t.x1)*(t.z2 - t.z1) - (t.x2 - t.x1)*(t.z3 - t.z1);
        C = (t.x2 - t.x1)*(t.y3 - t.y1) - (t.x3 - t.x1)*(t.y2 - t.y1);
        D = -1 * (A * t.x1 + B * t.y1 + C * t.z1);
        return (-1 *  division( (A * t.x0 + B * t.y0 + D) , C));
    }
    
    int division(int a, int b){
        int n = a / b;
        if ( (n - 2) * b >= a )
        return (n - 3);
        else if ( (n - 1) * b >= a )
        return (n - 2);
        else if ( b * n >= a )
        return (n - 1);
        else if ( (n + 1) * b >= a )
        return n ;
        else
        return (n + 1);
    }
    
    int mod(int a, int b){
        int n = a / b;
        if ( (n - 2) * b >= a )
        return a - (n - 3) * b;
        else if ( (n - 1) * b >= a )
        return a - (n - 2) * b;
        else if ( b * n >= a )
        return a - (n - 1) * b;
        else if ( (n + 1) * b >= a )
        return a - n * b;
        else
        return a - (n + 1) * b;
    }
    
    txt_coord calCoord(txt_p f, tri_p t){
        txt_coord tt;
        int bcs1, bcs2, bcs3, cs1, cs2, cs3;
        bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
        cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
        wei_1 = division(bcs1 * 1000, cs1);
    
        bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
        cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
        wei_2 = division(bcs2 * 1000, cs2);
    
        bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
        cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
        wei_3 = division(bcs3 * 1000, cs3);
        // 在这里还是256000这样一个系数
    
        f.x1 = division( f.x1 * 51, 200);
        f.y1 = division( f.y1 * 51, 200);
        f.x2 = division( f.x2 * 51, 200);
        f.y2 = division( f.y2 * 51, 200);
        f.x3 = division( f.x3 * 51, 200);
        f.y3 = division( f.y3 * 51, 200); 
    
        tt.x = wei_1 * f.x1 + wei_2 * f.x2 + wei_3 * f.x3;
        tt.y = wei_1 * f.y1 + wei_2 * f.y2 + wei_3 * f.y3;
        return tt;
    }
    
    
    ivec4 D_texture2D(sampler2D sampler,txt_coord t){
        int tx0, ty0, wei_x, wei_y;
        vec4 color0, color1, color2, color3;
        tx0 = division ( t.x, 1000);
        ty0 = division ( t.y, 1000);
        color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
        color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
        color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
        color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
    
        wei_x = mod (t.x, 1000);
        wei_y = mod (t.y, 1000);
        return cal_color(color0, color1, color2, color3, wei_x, wei_y);
    }
    
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
        int r, g, b;
        r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
        g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
        b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
        return ivec4( r, g, b, 100 );
    }
    
    vec4 col_transfer( ivec4 c){
        return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    
    vec4 col_transfer(ivec3 c, int a){
        return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(a)/ 100.0);
    }
    
    vec3 col_transfer(ivec3 c){
        return vec3 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0);
    }
    
    ivec3 D_normalize(ivec3 a){
        int rate = isqrt (division(100000, D_multiple(a[0],a[0]) + D_multiple(a[1],a[1]) + D_multiple(a[2],a[2]))) ;
        return ivec3(division(a[0] * rate, 10), division(a[1] * rate,10), division(a[2] * rate,10));
    }
    
    int isqrt(int a){
        for (int i = 0; i < 1000; i++)
        if (i * i >= a)
            return i;
    }
    
    int D_multiple(int a, int b)
    {
        if (division(b, 1000) > 100)
        {
        return a * division(b, 1000);
        }	
        else if (division(a, 1000) > 100)
        {
        return b * division(a, 1000);
        }	
        else
        {
        return division(a * b, 1000);
        }
    }
    
    
    ivec3 D_multiple(ivec3 x, int b)
    {
        return ivec3(D_multiple(x[0] ,b), D_multiple(x[1] ,b), D_multiple(x[2] ,b));
    }
    
    ivec3 D_multiple(ivec3 x, ivec3 y)
    {
        return ivec3(D_multiple(x[0] ,y[0]), D_multiple(x[1] ,y[1]), D_multiple(x[2] ,y[2]));
    }
    
    ivec3 D_division(ivec3 x, int y)
    {
        return ivec3(division(x[0],y), division(x[1],y), division(x[2],y));
    }
    
    int D_max(int a, int b)
    {
        if (a > b)
        return a;
        else
        return b;
    }
    
    int D_dot(ivec3 x, ivec3 y)
    {
        int sum = 0;
        for (int i = 0; i < 3; i++)
        {
        sum += D_multiple(x[i], y[i]);
        }
        return sum;
    }
    
    tri_p changevalue(tri_p t)
    {
        t.x1 = division( (t.x1 + 1000) * 32, 250);
        t.y1 = division( (t.y1 + 1000) * 32, 250);
        t.z1 = division( (t.z1 + 1000) * 32, 250);
        t.x2 = division( (t.x2 + 1000) * 32, 250);
        t.y2 = division( (t.y2 + 1000) * 32, 250);
        t.z2 = division( (t.z2 + 1000) * 32, 250);
        t.x3 = division( (t.x3 + 1000) * 32, 250);
        t.y3 = division( (t.y3 + 1000) * 32, 250);
        t.z3 = division( (t.z3 + 1000) * 32, 250);
        return t;
    }
    
    //I - 2.0 * dot(N, I) * N
    ivec3 D_reflect(ivec3 x, ivec3 y)
    {
        return ivec3(x[0] - 2 * D_multiple(D_dot(x,y),y[0]),x[1] - 2 * D_multiple(D_dot(x,y),y[1]), x[2] - 2 * D_multiple(D_dot(x,y),y[2]));
    }
    
    int D_pow(int a, int b)
    {
        int ans = 1;
        for (int i = 0; i < 16; i++) {
            ans = D_multiple(ans, a);
        }
        return ans;
    }
    
    `;
    }
    
    
    
    //two texture more light
    if (shaderSource.replace("\n"," ").replace(/\s+/g, '') == `precision mediump float;
    
    struct DirectionalLight
    {
        vec3 direction;
        vec3 diffuse;
        vec3 specular;
    };
    
    varying vec2 fragTexCoord;
    varying vec3 fragNormal;
    varying vec4 vPosition;
    
    uniform vec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    
    uniform float uAlpha;
    
    void main()
    {
        vec3 lightDirection = normalize(sun.direction - vPosition.xyz);
        vec3 normSunDir = normalize(sun.direction);
        vec3 surfaceNormal = normalize(fragNormal);
        vec4 texel = texture2D(sampler, fragTexCoord);
    
        float specularLightWeighting = 0.0;
        vec3 eyeDirection = normalize(-vPosition.xyz);
        vec3 reflectionDirection = reflect(-lightDirection, surfaceNormal);
        specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 16.0);
    
        float diffuseLightWeighting = max(dot(surfaceNormal, sun.direction), 0.0);
    
        vec3 lightIntensity = ambientLightIntensity +
            sun.specular * specularLightWeighting + 
            sun.diffuse * diffuseLightWeighting;
    
        gl_FragColor = vec4(texel.rgb * lightIntensity, texel.a * uAlpha);
    }
    
    `.replace("\n"," ").replace(/\s+/g, '')){
    return ` precision mediump float;
    
    struct DirectionalLight
    {
        ivec3 direction;
        ivec3 diffuse;
        ivec3 specular;
    };
    #define uniformNumber 228
    uniform ivec3 tri_point[225];
    uniform ivec2 text_point[225];
    uniform ivec3 nor_point[225];
    uniform ivec4 vPositionVary[225];
    uniform int tri_number;
    struct tri_p {
        int x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
    };
    struct txt_p {
        int x1, y1, x2, y2, x3,  y3;
    };
    struct txt_coord{
        int x, y;
    };
    #define init tri_p tri; txt_p texcoord; int z; z = -512;gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);int z0; txt_coord fragTexCoord;
    #define assign tri.x0 = int(gl_FragCoord.x); tri.y0 = int(gl_FragCoord.y); tri.x1 = tri_point[i][0]; tri.y1 = tri_point[i][1]; tri.z1 = tri_point[i][2]; tri.x2 = tri_point[i+1][0]; tri.y2 = tri_point[i+1][1]; tri.z2 = tri_point[i+1][2]; tri.x3 = tri_point[i+2][0]; tri.y3 = tri_point[i+2][1]; tri.z3 = tri_point[i+2][2];texcoord.x1 = text_point[i][0]; texcoord.y1 = text_point[i][1];texcoord.x2 = text_point[i+1][0]; texcoord.y2 = text_point[i+1][1];texcoord.x3 = text_point[i+2][0]; texcoord.y3 = text_point[i+2][1];
    #define changePosition tri = changevalue(tri); 
    #define cal_Zbuffer z0 = cal_z(tri);
    #define pixel_on_triangle ( i < (tri_number * 3) ) && (judge(tri) == 1)
    #define draw_pixel (z0 >= -512) && (z0 <= 512) && (z0 > bot)
    #define renew_Zbuffer fragTexCoord = calCoord(texcoord, tri);
    int judge(tri_p t);
    int f_judge(tri_p t);
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2);   
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2);
    int cal_z(tri_p tri);
    int division(int a, int b);  
    int mod(int a, int b);  
    int isqrt(int a);
    int D_dot(ivec3 x, ivec3 y);
    int D_max(int a, int b);
    int D_multiple(int a, int b);
    ivec3 D_multiple(ivec3 x, int b);
    ivec3 D_multiple(ivec3 x, ivec3 y);
    ivec3 D_division(ivec3 x, int y);
    int D_division(int x, int y);
    tri_p changevalue(tri_p tri);
    
    
    txt_coord calCoord(txt_p f, tri_p t);
    ivec4 D_texture2D(sampler2D sampler,txt_coord t); 
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y); 
    ivec3 D_normalize(ivec3 a);
    vec4 col_transfer(ivec4 color); 
    vec4 col_transfer(ivec3 color, int a);   
    vec3 col_transfer(ivec3 color);
    ivec3 D_reflect(ivec3 x, ivec3 y);  
    int D_pow(int a, int b); 
    // r,g,b 0 - 255   a 0 - 100   
    
    uniform ivec3 ambientLightIntensity;
    uniform DirectionalLight sun;
    uniform sampler2D sampler;
    int  wei_1, wei_2, wei_3;
    ivec4 result[80];
    int zbuffer[80];
    int z1, z2, z3;
    int j;
    ivec4 result1, result2, result3;
    int bot , top;
    ivec4 resultbot, resulttop;
    
    void main()
    {
        bot = -512;
        top = -512;
        resultbot = ivec4(0 ,0 ,0 ,0);
        resulttop = ivec4(0 ,0 ,0 ,0);
        init;
        for (int i = 0; i < uniformNumber; i+= 3){
        assign;
        //changePosition;
        if ( pixel_on_triangle ){
            cal_Zbuffer;
            if ( draw_pixel ){
            renew_Zbuffer;
            ivec3 fragNormal = ivec3 ( D_multiple( wei_1 , nor_point[i][0]) + D_multiple(wei_2 , nor_point[i+1][0]) + D_multiple(wei_3 , nor_point[i+2][0])   ,           D_multiple(wei_1 , nor_point[i][1]) + D_multiple(wei_2 , nor_point[i+1][1]) + D_multiple(wei_3 , nor_point[i+2][1]) ,             D_multiple(wei_1 , nor_point[i][2]) + D_multiple(wei_2 , nor_point[i+1][2]) + D_multiple(wei_3 , nor_point[i+2][2])    );
            ivec4 vPosition = ivec4 ( D_multiple(wei_1 , vPositionVary[i][0]) + D_multiple(wei_2 , vPositionVary[i+1][0]) + D_multiple(wei_3 , vPositionVary[i+2][0])   , D_multiple(wei_1 , vPositionVary[i][1]) + D_multiple(wei_2 , vPositionVary[i+1][1]) + D_multiple(wei_3 , vPositionVary[i+2][1]) , D_multiple(wei_1 , vPositionVary[i][2]) + D_multiple(wei_2 , vPositionVary[i+1][2]) + D_multiple(wei_3 , vPositionVary[i+2][2]),  D_multiple(wei_1 , vPositionVary[i][3]) + D_multiple(wei_2 , vPositionVary[i+1][3]) + D_multiple(wei_3 , vPositionVary[i+2][3])    );
            ivec3 lightDirection = D_normalize(sun.direction - vPosition.xyz);
            ivec3 normSunDir = D_normalize(sun.direction);
            ivec3 surfaceNormal = D_normalize(fragNormal);
            ivec4 texel = D_texture2D(sampler, fragTexCoord);
    
            int specularLightWeighting = 0;
            ivec3 eyeDirection = D_normalize(-vPosition.xyz);
            ivec3 reflectionDirection = D_reflect(-lightDirection, surfaceNormal);
            specularLightWeighting = D_pow(D_max(D_dot(reflectionDirection, eyeDirection), 0), 16);
    
            int diffuseLightWeighting = D_max(D_dot(surfaceNormal, sun.direction), 0);
    
            ivec3 lightIntensity = ambientLightIntensity +
                    D_multiple(sun.specular , specularLightWeighting)  + 
                    D_multiple(sun.diffuse , diffuseLightWeighting);
                    
            if (z0 > top){
                bot = top;
                resultbot = resulttop;
                top = z0;
                resulttop = ivec4(D_multiple(texel.rgb , lightIntensity), 1);
            }else{
                bot = z0;
                resultbot = ivec4(D_multiple(texel.rgb , lightIntensity), 1);
            }
            } 
        }
        }
        gl_FragColor = vec4 ( col_transfer(D_multiple(resulttop.xyz , 900) + D_multiple(resultbot.xyz , 900) ), 1.0 );
        
    }
    
    int judge(tri_p t) {
        if (( PinAB(t.x0 - t.x1, t.y0 - t.y1, t.x2 - t.x1, t.y2 - t.y1, t.x3 - t.x1, t.y3 - t.y1)+ PinAB(t.x0 - t.x2, t.y0 - t.y2, t.x3 - t.x2, t.y3 - t.y2, t.x1 - t.x2, t.y1 - t.y2) 
        + PinAB(t.x0 - t.x3, t.y0 - t.y3, t.x2 - t.x3, t.y2 - t.y3, t.x1 - t.x3, t.y1 - t.y3) == 3)  )
            {return 1;}
        else
            {return 0;}
    }
    
    int PinAB(int tx0, int ty0, int tx1, int ty1, int tx2, int ty2){ 
    int kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
    if  ( ((0 >= kb ) && (0 <= kc )) || ((0  <= kb ) && (0 >= kc)) ) 
        return 1;
        return 0;
    }
    
    int f_judge(tri_p t){
        if ( f_PinAB( float(t.x0 - t.x1), float(t.y0 - t.y1), float(t.x2 - t.x1), float(t.y2 - t.y1), float(t.x3 - t.x1), float(t.y3 - t.y1))
        + f_PinAB( float(t.x0 - t.x2), float(t.y0 - t.y2), float(t.x3 - t.x2), float(t.y3 - t.y2), float(t.x1 - t.x2), float(t.y1 - t.y2)) 
        + f_PinAB( float(t.x0 - t.x3), float(t.y0 - t.y3), float(t.x2 - t.x3), float(t.y2 - t.y3), float(t.x1 - t.x3), float(t.y1 - t.y3))
        == 3){return 1;}
        else{return 0;}
    }
    
    int f_PinAB(float tx0, float ty0, float tx1, float ty1, float tx2, float ty2){ 
        float kb, kc; kb = tx0*ty1 - tx1*ty0; kc = tx0*ty2 - tx2*ty0;
        if  ( ((0.0001 > kb) && (-0.0001 < kc)) || ((-0.0001 < kb) && (0.0001 > kc)) ) {return 1;} return 0; 
    }
    
    int cal_z(tri_p t){
        int A, B, C , D , K;
        A = (t.y3 - t.y1)*(t.z3 - t.z1) - (t.z2 - t.z1)*(t.y3 - t.y1);
        B = (t.x3 - t.x1)*(t.z2 - t.z1) - (t.x2 - t.x1)*(t.z3 - t.z1);
        C = (t.x2 - t.x1)*(t.y3 - t.y1) - (t.x3 - t.x1)*(t.y2 - t.y1);
        D = -1 * (A * t.x1 + B * t.y1 + C * t.z1);
        return (-1 *  division( (A * t.x0 + B * t.y0 + D) , C));
    }
    
    int division(int a, int b){
        int n = a / b;
        if ( (n - 2) * b >= a )
        return (n - 3);
        else if ( (n - 1) * b >= a )
        return (n - 2);
        else if ( b * n >= a )
        return (n - 1);
        else if ( (n + 1) * b >= a )
        return n ;
        else
        return (n + 1);
    }
    
    int mod(int a, int b){
        int n = a / b;
        if ( (n - 2) * b >= a )
        return a - (n - 3) * b;
        else if ( (n - 1) * b >= a )
        return a - (n - 2) * b;
        else if ( b * n >= a )
        return a - (n - 1) * b;
        else if ( (n + 1) * b >= a )
        return a - n * b;
        else
        return a - (n + 1) * b;
    }
    
    txt_coord calCoord(txt_p f, tri_p t){
        txt_coord tt;
        int bcs1, bcs2, bcs3, cs1, cs2, cs3;
        bcs1 = (t.x0 * t.y2 + t.x2 * t.y3 + t.x3 * t.y0) - (t.x3 * t.y2 + t.x2 * t.y0 + t.x0 * t.y3);
        cs1 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
        wei_1 = division(bcs1 * 1000, cs1);
    
        bcs2 = (t.x1 * t.y0 + t.x0 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y0 + t.x0 * t.y1 + t.x1 * t.y3);
        cs2 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
        wei_2 = division(bcs2 * 1000, cs2);
    
        bcs3 = (t.x1 * t.y2 + t.x2 * t.y0 + t.x0 * t.y1) - (t.x0 * t.y2 + t.x2 * t.y1 + t.x1 * t.y0);
        cs3 =  (t.x1 * t.y2 + t.x2 * t.y3 + t.x3 * t.y1) - (t.x3 * t.y2 + t.x2 * t.y1 + t.x1 * t.y3);
        wei_3 = division(bcs3 * 1000, cs3);
        // 在这里还是256000这样一个系数
    
        f.x1 = division( f.x1 * 51, 200);
        f.y1 = division( f.y1 * 51, 200);
        f.x2 = division( f.x2 * 51, 200);
        f.y2 = division( f.y2 * 51, 200);
        f.x3 = division( f.x3 * 51, 200);
        f.y3 = division( f.y3 * 51, 200); 
    
        tt.x = wei_1 * f.x1 + wei_2 * f.x2 + wei_3 * f.x3;
        tt.y = wei_1 * f.y1 + wei_2 * f.y2 + wei_3 * f.y3;
        return tt;
    }
    
    
    ivec4 D_texture2D(sampler2D sampler,txt_coord t){
        int tx0, ty0, wei_x, wei_y;
        vec4 color0, color1, color2, color3;
        tx0 = division ( t.x, 1000);
        ty0 = division ( t.y, 1000);
        color0 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0     )/ 255.0));
        color1 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0     )/ 255.0));
        color2 = texture2D(sampler, vec2 ( float(tx0    )/ 255.0 , float(ty0  + 1)/ 255.0));
        color3 = texture2D(sampler, vec2 ( float(tx0 + 1)/ 255.0 , float(ty0  + 1)/ 255.0));
    
        wei_x = mod (t.x, 1000);
        wei_y = mod (t.y, 1000);
        return cal_color(color0, color1, color2, color3, wei_x, wei_y);
    }
    
    ivec4 cal_color(vec4 color0, vec4 color1, vec4 color2, vec4 color3, int wei_x, int wei_y){
        int r, g, b;
        r = division( int(color0[0] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[0] * 255.0) * wei_x * (1000 - wei_y) + int(color2[0] * 255.0) * (1000 - wei_x) * wei_y + int(color3[0] * 255.0) * wei_x * wei_y, 1000000);
        g = division( int(color0[1] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[1] * 255.0) * wei_x * (1000 - wei_y) + int(color2[1] * 255.0) * (1000 - wei_x) * wei_y + int(color3[1] * 255.0) * wei_x * wei_y, 1000000);
        b = division( int(color0[2] * 255.0) * (1000 - wei_x) * (1000 - wei_y) + int(color1[2] * 255.0) * wei_x * (1000 - wei_y) + int(color2[2] * 255.0) * (1000 - wei_x) * wei_y + int(color3[2] * 255.0) * wei_x * wei_y, 1000000);
        return ivec4( r, g, b, 100 );
    }
    
    vec4 col_transfer( ivec4 c){
        return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(c[3])/ 100.0);
    }
    
    vec4 col_transfer(ivec3 c, int a){
        return vec4 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0, float(a)/ 100.0);
    }
    
    vec3 col_transfer(ivec3 c){
        return vec3 (  float(c[0])/255.0, float(c[1])/255.0, float(c[2])/255.0);
    }
    
    ivec3 D_normalize(ivec3 a){
        int rate = isqrt (division(100000, D_multiple(a[0],a[0]) + D_multiple(a[1],a[1]) + D_multiple(a[2],a[2]))) ;
        return ivec3(division(a[0] * rate, 10), division(a[1] * rate,10), division(a[2] * rate,10));
    }
    
    int isqrt(int a){
        for (int i = 0; i < 1000; i++)
        if (i * i >= a)
            return i;
    }
    
    int D_multiple(int a, int b)
    {
        if (division(b, 1000) > 100)
        {
        return a * division(b, 1000);
        }	
        else if (division(a, 1000) > 100)
        {
        return b * division(a, 1000);
        }	
        else
        {
        return division(a * b, 1000);
        }
    }
    
    
    ivec3 D_multiple(ivec3 x, int b)
    {
        return ivec3(D_multiple(x[0] ,b), D_multiple(x[1] ,b), D_multiple(x[2] ,b));
    }
    
    ivec3 D_multiple(ivec3 x, ivec3 y)
    {
        return ivec3(D_multiple(x[0] ,y[0]), D_multiple(x[1] ,y[1]), D_multiple(x[2] ,y[2]));
    }
    
    int D_max(int a, int b)
    {
        if (a > b)
        return a;
        else
        return b;
    }
    
    int D_dot(ivec3 x, ivec3 y)
    {
        int sum = 0;
        for (int i = 0; i < 3; i++)
        {
        sum += D_multiple(x[i], y[i]);
        }
        return sum;
    }
    
    tri_p changevalue(tri_p t)
    {
        t.x1 = division( (t.x1 + 1000) * 32, 250);
        t.y1 = division( (t.y1 + 1000) * 32, 250);
        t.z1 = division( (t.z1 + 1000) * 32, 250);
        t.x2 = division( (t.x2 + 1000) * 32, 250);
        t.y2 = division( (t.y2 + 1000) * 32, 250);
        t.z2 = division( (t.z2 + 1000) * 32, 250);
        t.x3 = division( (t.x3 + 1000) * 32, 250);
        t.y3 = division( (t.y3 + 1000) * 32, 250);
        t.z3 = division( (t.z3 + 1000) * 32, 250);
        return t;
    }
    
    //I - 2.0 * dot(N, I) * N
    ivec3 D_reflect(ivec3 x, ivec3 y)
    {
        return ivec3(x[0] - 2 * D_multiple(D_dot(x,y),y[0]),x[1] - 2 * D_multiple(D_dot(x,y),y[1]), x[2] - 2 * D_multiple(D_dot(x,y),y[2]));
    }
    
    int D_pow(int a, int b)
    {
        int ans = 1;
        for (int i = 0; i < 16; i++) {
            ans = D_multiple(ans, a);
        }
        return ans;
    }
    `;
    }
    
    
    
    
    
    
    
    
    
    }    

    var handle_gl_Position = function (gl_Position) {
        gl_Position = gl_Position.map(x => 
            [
            Math.floor((x[0] / x[3] + 1) * 128),
            Math.floor((x[1] / x[3] + 1) * 128),
            - Math.floor((x[2] / x[3] + 1) * 128)
            ]);
        //gl_Position = math.flatten(gl_Position);
        return gl_Position;
      }
      // var my_multiple = function(a, b) {
      //   a = math.matrix(a);
      //   b = math.matrix(b);
      //   return math.multiply(b, a);
      // }
      map1 = new Map;
      
      map2 = new Map;
      
      var my_multiple = function(a, b) { 
        //if (!a || !b) return a;
        
        if (map1.get(a)!=undefined) {
          out = map2.get(b); 
          if (out!=undefined) 
            return out;
        } 
        
        map1.set(a,b);
        if (a.length==16 && b.length==16) {
         out = new Float32Array(16);
         mat4.multiply(out, a, b);
         map2.set(b,out); 
         return out;
        }
      
        if (a.length == 4 && b.length == 16) {
      
         out = new Float32Array(4);
      
         vec4.transformMat4(out, a, b);
      
         map2.set(b,out); 
      
         return out;
      
        } 
      
        if (b.length == 4 && a.length == 16) {
         out = new Float32Array(4);
         vec4.transformMat4(out, b, a);
         map2.set(b,out); 
         return out;
        } 
      }
      
      
      
      var my_add = function(a, b) {
        a = math.matrix(a);
        b = math.matrix(b);
        return math.add(a, b);
      }
      
      var my_divide = function(a, b) {
        a = math.matrix(a);
        b = math.matrix(b);
        return math.divide(a, b);
      }
      
      var my_subtract = function(a, b) {
        a = math.matrix(a);
        b = math.matrix(b);
        return math.subtract(a, b);
      }
      
      // all values have to be assigned once
      var set_values = function(values, js_str, num_attrs) {
        js_str_lines = js_str.split('\n');
        js_str_lines.unshift('var gl_Position = [0, 0, 0, 0];');
        var var_re = RegExp('^var ([a-zA-Z$_][a-zA-Z0-9$_]*) = (.*);');
        var res = "";
        // update the attr value and uniform value
        for (var line in js_str_lines) {
          cur_line = js_str_lines[line];
          res_line = cur_line;
          if (cur_line.match(var_re)) {
            val = var_re.exec(cur_line);
            if (val[1] in values) {
              res_line = res_line.replace(val[2], JSON.stringify(values[val[1]]));
            } else {
              var cur_val = (val[2] + ',').repeat(num_attrs).slice(0, -1);
              res_line = res_line.replace(val[2], `[${cur_val}]`);
            }
          }
          res += res_line + '\n';
        }
        
        return res;
      }


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.math=t():e.math=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=149)}([function(e,t,r){"use strict";e.exports=function e(t,r,n){return t&&"function"==typeof t.map?t.map(function(t){return e(t,r,n)}):r(t)}},function(e,t,r){"use strict";t.name="matrix",t.factory=function(e,t,r,n){var i=n("matrix",{"":function(){return a([])},string:function(e){return a([],e)},"string, string":function(e,t){return a([],e,t)},Array:function(e){return a(e)},Matrix:function(e){return a(e,e.storage())},"Array | Matrix, string":a,"Array | Matrix, string, string":a});return i.toTex={0:"\\begin{bmatrix}\\end{bmatrix}",1:"\\left(${args[0]}\\right)",2:"\\left(${args[0]}\\right)"},i;function a(t,r,n){return new(e.Matrix.storage(r||"default"))(t,n)}}},function(e,t,r){"use strict";var n=r(3),i=r(9),a=r(10),o=r(53);t.size=function(e){for(var t=[];Array.isArray(e);)t.push(e.length),e=e[0];return t},t.validate=function(e,t){if(0==t.length){if(Array.isArray(e))throw new a(e.length,0)}else!function e(t,r,n){var i,o=t.length;if(o!=r[n])throw new a(o,r[n]);if(n<r.length-1){var s=n+1;for(i=0;i<o;i++){var u=t[i];if(!Array.isArray(u))throw new a(r.length-1,r.length,"<");e(t[i],r,s)}}else for(i=0;i<o;i++)if(Array.isArray(t[i]))throw new a(r.length+1,r.length,">")}(e,t,0)},t.validateIndex=function(e,t){if(!n.isNumber(e)||!n.isInteger(e))throw new TypeError("Index must be an integer (value: "+e+")");if(e<0||"number"==typeof t&&e>=t)throw new o(e,t)},t.resize=function(e,t,r){if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError("Array expected");if(0===t.length)throw new Error("Resizing to scalar is not supported");return t.forEach(function(e){if(!n.isNumber(e)||!n.isInteger(e)||e<0)throw new TypeError("Invalid size, must contain positive integers (size: "+i.format(t)+")")}),function e(t,r,n,i){var a;var o;var s=t.length;var u=r[n];var c=Math.min(s,u);t.length=u;if(n<r.length-1){var f=n+1;for(a=0;a<c;a++)o=t[a],Array.isArray(o)||(o=[o],t[a]=o),e(o,r,f,i);for(a=c;a<u;a++)o=[],t[a]=o,e(o,r,f,i)}else{for(a=0;a<c;a++)for(;Array.isArray(t[a]);)t[a]=t[a][0];for(a=c;a<u;a++)t[a]=i}}(e,t,0,void 0!==r?r:0),e},t.reshape=function(e,r){var n,i=t.flatten(e),o=function(e){return e.reduce(function(e,t){return e*t})};if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Array expected");if(0===r.length)throw new a(0,o(t.size(e)),"!=");try{n=function e(t,r){var n=[];var i;if(0===r.length){if(0===t.length)throw new a(null,null,"!=");return t.shift()}for(i=0;i<r[0];i+=1)n.push(e(t,r.slice(1)));return n}(i,r)}catch(n){if(n instanceof a)throw new a(o(r),o(t.size(e)),"!=");throw n}if(i.length>0)throw new a(o(r),o(t.size(e)),"!=");return n},t.squeeze=function(e,r){for(var n=r||t.size(e);Array.isArray(e)&&1===e.length;)e=e[0],n.shift();for(var i=n.length;1===n[i-1];)i--;return i<n.length&&(e=function e(t,r,n){var i,a;if(n<r){var o=n+1;for(i=0,a=t.length;i<a;i++)t[i]=e(t[i],r,o)}else for(;Array.isArray(t);)t=t[0];return t}(e,i,0),n.length=i),e},t.unsqueeze=function(e,r,n,i){var a=i||t.size(e);if(n)for(var o=0;o<n;o++)e=[e],a.unshift(1);for(e=function e(t,r,n){var i,a;if(Array.isArray(t)){var o=n+1;for(i=0,a=t.length;i<a;i++)t[i]=e(t[i],r,o)}else for(var s=n;s<r;s++)t=[t];return t}(e,r,0);a.length<r;)a.push(1);return e},t.flatten=function(e){if(!Array.isArray(e))return e;var t=[];return e.forEach(function e(r){Array.isArray(r)?r.forEach(e):t.push(r)}),t},t.map=function(e,t){return Array.prototype.map.call(e,t)},t.forEach=function(e,t){Array.prototype.forEach.call(e,t)},t.filter=function(e,r){if(1!==t.size(e).length)throw new Error("Only one dimensional matrices supported");return Array.prototype.filter.call(e,r)},t.filterRegExp=function(e,r){if(1!==t.size(e).length)throw new Error("Only one dimensional matrices supported");return Array.prototype.filter.call(e,function(e){return r.test(e)})},t.join=function(e,t){return Array.prototype.join.call(e,t)},t.identify=function(e){if(!Array.isArray(e))throw new TypeError("Array input expected");if(0===e.length)return e;var t=[],r=0;t[0]={value:e[0],identifier:0};for(var n=1;n<e.length;n++)e[n]===e[n-1]?r++:r=0,t.push({value:e[n],identifier:r});return t},t.generalize=function(e){if(!Array.isArray(e))throw new TypeError("Array input expected");if(0===e.length)return e;for(var t=[],r=0;r<e.length;r++)t.push(e[r].value);return t},t.isArray=Array.isArray},function(e,t,r){"use strict";function n(e){for(var t=[],r=0;r<e;r++)t.push(0);return t}t.isNumber=function(e){return"number"==typeof e},t.isInteger=function(e){return!!isFinite(e)&&e==Math.round(e)},t.sign=Math.sign||function(e){return e>0?1:e<0?-1:0},t.format=function(e,r){if("function"==typeof r)return r(e);if(e===1/0)return"Infinity";if(e===-1/0)return"-Infinity";if(isNaN(e))return"NaN";var n="auto",i=void 0;switch(r&&(r.notation&&(n=r.notation),t.isNumber(r)?i=r:r.precision&&(i=r.precision)),n){case"fixed":return t.toFixed(e,i);case"exponential":return t.toExponential(e,i);case"engineering":return t.toEngineering(e,i);case"auto":if(r&&r.exponential&&(void 0!==r.exponential.lower||void 0!==r.exponential.upper)){var a=Object.assign({},r);return a.exponential=void 0,void 0!==r.exponential.lower&&(a.lowerExp=Math.round(Math.log(r.exponential.lower)/Math.LN10)),void 0!==r.exponential.upper&&(a.upperExp=Math.round(Math.log(r.exponential.upper)/Math.LN10)),console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace "+JSON.stringify(r)+" with "+JSON.stringify(a)),t.toPrecision(e,i,a)}return t.toPrecision(e,i,r&&r).replace(/((\.\d*?)(0+))($|e)/,function(){var e=arguments[2],t=arguments[4];return"."!==e?e+t:t});default:throw new Error('Unknown notation "'+n+'". Choose "auto", "exponential", or "fixed".')}},t.splitNumber=function(e){var t=String(e).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!t)throw new SyntaxError("Invalid number "+e);var r=t[1],n=t[2],i=parseFloat(t[4]||"0"),a=n.indexOf(".");i+=-1!==a?a-1:n.length-1;var o=n.replace(".","").replace(/^0*/,function(e){return i-=e.length,""}).replace(/0*$/,"").split("").map(function(e){return parseInt(e)});return 0===o.length&&(o.push(0),i++),{sign:r,coefficients:o,exponent:i}},t.toEngineering=function(e,r){if(isNaN(e)||!isFinite(e))return String(e);var i=t.roundDigits(t.splitNumber(e),r),a=i.exponent,o=i.coefficients,s=a%3==0?a:a<0?a-3-a%3:a-a%3,u=a>=0?a:Math.abs(s);o.length-1<u&&(o=o.concat(n(u-(o.length-1))));for(var c=Math.abs(a-s),f=1;--c>=0;)f++;var l=o.slice(f).join(""),p=l.match(/[1-9]/)?"."+l:"",m=o.slice(0,f).join("")+p+"e"+(a>=0?"+":"")+s.toString();return i.sign+m},t.toFixed=function(e,r){if(isNaN(e)||!isFinite(e))return String(e);var i=t.splitNumber(e),a="number"==typeof r?t.roundDigits(i,i.exponent+1+r):i,o=a.coefficients,s=a.exponent+1,u=s+(r||0);return o.length<u&&(o=o.concat(n(u-o.length))),s<0&&(o=n(1-s).concat(o),s=1),s<o.length&&o.splice(s,0,0===s?"0.":"."),a.sign+o.join("")},t.toExponential=function(e,r){if(isNaN(e)||!isFinite(e))return String(e);var i=t.splitNumber(e),a=r?t.roundDigits(i,r):i,o=a.coefficients,s=a.exponent;o.length<r&&(o=o.concat(n(r-o.length)));var u=o.shift();return a.sign+u+(o.length>0?"."+o.join(""):"")+"e"+(s>=0?"+":"")+s},t.toPrecision=function(e,r,i){if(isNaN(e)||!isFinite(e))return String(e);var a=i&&void 0!==i.lowerExp?i.lowerExp:-3,o=i&&void 0!==i.upperExp?i.upperExp:5,s=t.splitNumber(e);if(s.exponent<a||s.exponent>=o)return t.toExponential(e,r);var u=r?t.roundDigits(s,r):s,c=u.coefficients,f=u.exponent;c.length<r&&(c=c.concat(n(r-c.length))),c=c.concat(n(f-c.length+1+(c.length<r?r-c.length:0)));var l=f>0?f:0;return l<(c=n(-f).concat(c)).length-1&&c.splice(l+1,0,"."),u.sign+c.join("")},t.roundDigits=function(e,t){for(var r={sign:e.sign,coefficients:e.coefficients,exponent:e.exponent},n=r.coefficients;t<=0;)n.unshift(0),r.exponent++,t++;if(n.length>t&&n.splice(t,n.length-t)[0]>=5){var i=t-1;for(n[i]++;10===n[i];)n.pop(),0===i&&(n.unshift(0),r.exponent++,i++),n[--i]++}return r},t.digits=function(e){return e.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length},t.DBL_EPSILON=Number.EPSILON||2.220446049250313e-16,t.nearlyEqual=function(e,r,n){if(null==n)return e==r;if(e==r)return!0;if(isNaN(e)||isNaN(r))return!1;if(isFinite(e)&&isFinite(r)){var i=Math.abs(e-r);return i<t.DBL_EPSILON||i<=Math.max(Math.abs(e),Math.abs(r))*n}return!1}},function(e,t,r){"use strict";var n=r(171);t.symbols={Alpha:"A",alpha:"\\alpha",Beta:"B",beta:"\\beta",Gamma:"\\Gamma",gamma:"\\gamma",Delta:"\\Delta",delta:"\\delta",Epsilon:"E",epsilon:"\\epsilon",varepsilon:"\\varepsilon",Zeta:"Z",zeta:"\\zeta",Eta:"H",eta:"\\eta",Theta:"\\Theta",theta:"\\theta",vartheta:"\\vartheta",Iota:"I",iota:"\\iota",Kappa:"K",kappa:"\\kappa",varkappa:"\\varkappa",Lambda:"\\Lambda",lambda:"\\lambda",Mu:"M",mu:"\\mu",Nu:"N",nu:"\\nu",Xi:"\\Xi",xi:"\\xi",Omicron:"O",omicron:"o",Pi:"\\Pi",pi:"\\pi",varpi:"\\varpi",Rho:"P",rho:"\\rho",varrho:"\\varrho",Sigma:"\\Sigma",sigma:"\\sigma",varsigma:"\\varsigma",Tau:"T",tau:"\\tau",Upsilon:"\\Upsilon",upsilon:"\\upsilon",Phi:"\\Phi",phi:"\\phi",varphi:"\\varphi",Chi:"X",chi:"\\chi",Psi:"\\Psi",psi:"\\psi",Omega:"\\Omega",omega:"\\omega",true:"\\mathrm{True}",false:"\\mathrm{False}",i:"i",inf:"\\infty",Inf:"\\infty",infinity:"\\infty",Infinity:"\\infty",oo:"\\infty",lim:"\\lim",undefined:"\\mathbf{?}"},t.operators={transpose:"^\\top",factorial:"!",pow:"^",dotPow:".^\\wedge",unaryPlus:"+",unaryMinus:"-",bitNot:"~",not:"\\neg",multiply:"\\cdot",divide:"\\frac",dotMultiply:".\\cdot",dotDivide:".:",mod:"\\mod",add:"+",subtract:"-",to:"\\rightarrow",leftShift:"<<",rightArithShift:">>",rightLogShift:">>>",equal:"=",unequal:"\\neq",smaller:"<",larger:">",smallerEq:"\\leq",largerEq:"\\geq",bitAnd:"\\&",bitXor:"\\underline{|}",bitOr:"|",and:"\\wedge",xor:"\\veebar",or:"\\vee"},t.defaultTemplate="\\mathrm{${name}}\\left(${args}\\right)";var i={deg:"^\\circ"};t.escape=function(e){return n(e,{preserveFormatting:!0})},t.toSymbol=function(e,r){return(r=void 0!==r&&r)?i.hasOwnProperty(e)?i[e]:"\\mathrm{"+t.escape(e)+"}":t.symbols.hasOwnProperty(e)?t.symbols[e]:t.escape(e)}},function(e,t,r){"use strict";var n=r(72);t.clone=function e(r){var i=typeof r;if("number"===i||"string"===i||"boolean"===i||null==r)return r;if("function"==typeof r.clone)return r.clone();if(Array.isArray(r))return r.map(function(t){return e(t)});if(r instanceof Number)return new Number(r.valueOf());if(r instanceof String)return new String(r.valueOf());if(r instanceof Boolean)return new Boolean(r.valueOf());if(r instanceof Date)return new Date(r.valueOf());if(n(r))return r;if(r instanceof RegExp)throw new TypeError("Cannot clone "+r);return t.map(r,e)},t.map=function(e,r){var n={};for(var i in e)t.hasOwnProperty(e,i)&&(n[i]=r(e[i]));return n},t.extend=function(e,r){for(var n in r)t.hasOwnProperty(r,n)&&(e[n]=r[n]);return e},t.deepExtend=function e(r,n){if(Array.isArray(n))throw new TypeError("Arrays are not supported by deepExtend");for(var i in n)if(t.hasOwnProperty(n,i))if(n[i]&&n[i].constructor===Object)void 0===r[i]&&(r[i]={}),r[i].constructor===Object?e(r[i],n[i]):r[i]=n[i];else{if(Array.isArray(n[i]))throw new TypeError("Arrays are not supported by deepExtend");r[i]=n[i]}return r},t.deepEqual=function(e,r){var n,i,a;if(Array.isArray(e)){if(!Array.isArray(r))return!1;if(e.length!=r.length)return!1;for(i=0,a=e.length;i<a;i++)if(!t.deepEqual(e[i],r[i]))return!1;return!0}if(e instanceof Object){if(Array.isArray(r)||!(r instanceof Object))return!1;for(n in e)if(!t.deepEqual(e[n],r[n]))return!1;for(n in r)if(!t.deepEqual(e[n],r[n]))return!1;return!0}return typeof e==typeof r&&e==r},t.canDefineProperty=function(){try{if(Object.defineProperty)return Object.defineProperty({},"x",{get:function(){}}),!0}catch(e){}return!1},t.lazy=function(e,r,n){if(t.canDefineProperty()){var i,a=!0;Object.defineProperty(e,r,{get:function(){return a&&(i=n(),a=!1),i},set:function(e){i=e,a=!1},configurable:!0,enumerable:!0})}else e[r]=n()},t.traverse=function(e,t){var r=e;if(t)for(var n=t.split("."),i=0;i<n.length;i++){var a=n[i];a in r||(r[a]={}),r=r[a]}return r},t.hasOwnProperty=function(e,t){return e&&Object.hasOwnProperty.call(e,t)},t.isFactory=function(e){return e&&"function"==typeof e.factory}},function(e,t,r){"use strict";var n=r(5).clone;t.name="algorithm14",t.factory=function(e,t,r,i){var a=e.DenseMatrix,o=function(e,t,r,n,i,a,s){var u=[];if(t===r.length-1)for(var c=0;c<n;c++)u[c]=s?e(a,i[c]):e(i[c],a);else for(var f=0;f<n;f++)u[f]=o(e,t+1,r,r[t+1],i[f],a,s);return u};return function(e,t,r,s){var u,c=e._data,f=e._size,l=e._datatype,p=r;"string"==typeof l&&(u=l,t=i.convert(t,u),p=i.find(r,[u,u]));var m=f.length>0?o(p,0,f,f[0],c,t,s):[];return new a({data:m,size:n(f),datatype:u})}}},function(e,t,r){"use strict";var n=r(24),i=r(10);n.string.isString;t.name="algorithm13",t.factory=function(e,t,r,n){var a=e.DenseMatrix,o=function(e,t,r,n,i,a){var s=[];if(t===r.length-1)for(var u=0;u<n;u++)s[u]=e(i[u],a[u]);else for(var c=0;c<n;c++)s[c]=o(e,t+1,r,r[t+1],i[c],a[c]);return s};return function(e,t,r){var s,u=e._data,c=e._size,f=e._datatype,l=t._data,p=t._size,m=t._datatype,h=[];if(c.length!==p.length)throw new i(c.length,p.length);for(var d=0;d<c.length;d++){if(c[d]!==p[d])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+p+")");h[d]=c[d]}var y=r;"string"==typeof f&&f===m&&(s=f,t=n.convert(t,s),y=n.find(r,[s,s]));var g=h.length>0?o(y,0,h,h[0],u,l):[];return new a({data:g,size:h,datatype:s})}}},function(e,t,r){"use strict";var n=r(3).nearlyEqual,i=r(35);t.factory=function(e,t,r,a){var o=a("equalScalar",{"boolean, boolean":function(e,t){return e===t},"number, number":function(e,r){return e===r||n(e,r,t.epsilon)},"BigNumber, BigNumber":function(e,r){return e.eq(r)||i(e,r,t.epsilon)},"Fraction, Fraction":function(e,t){return e.equals(t)},"Complex, Complex":function(e,t){return e.equals(t)},"Unit, Unit":function(e,t){if(!e.equalBase(t))throw new Error("Cannot compare units with different base");return o(e.value,t.value)}});return o}},function(e,t,r){"use strict";var n=r(3).format,i=r(166).format,a=r(72);t.isString=function(e){return"string"==typeof e},t.endsWith=function(e,t){var r=e.length-t.length,n=e.length;return e.substring(r,n)===t},t.format=function(e,r){if("number"==typeof e)return n(e,r);if(a(e))return i(e,r);if((o=e)&&"object"==typeof o&&"number"==typeof o.s&&"number"==typeof o.n&&"number"==typeof o.d)return r&&"decimal"===r.fraction?e.toString():e.s*e.n+"/"+e.d;var o;if(Array.isArray(e))return function e(r,n){{if(Array.isArray(r)){for(var i="[",a=r.length,o=0;o<a;o++)0!=o&&(i+=", "),i+=e(r[o],n);return i+="]"}return t.format(r,n)}}(e,r);if(t.isString(e))return'"'+e+'"';if("function"==typeof e)return e.syntax?String(e.syntax):"function";if(e&&"object"==typeof e){if("function"==typeof e.format)return e.format(r);if(e&&e.toString()!=={}.toString())return e.toString();var s=[];for(var u in e)e.hasOwnProperty(u)&&s.push('"'+u+'": '+t.format(e[u],r));return"{"+s.join(", ")+"}"}return String(e)},t.stringify=function(e){for(var t=String(e),r="",n=0;n<t.length;){var i=t.charAt(n);"\\"===i?(r+=i,n++,""!==(i=t.charAt(n))&&-1!=='"\\/bfnrtu'.indexOf(i)||(r+="\\"),r+=i):r+='"'===i?'\\"':i,n++}return'"'+r+'"'},t.escape=function(e){var t=String(e);return t=t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}},function(e,t,r){"use strict";function n(e,t,r){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");this.actual=e,this.expected=t,this.relation=r,this.message="Dimension mismatch ("+(Array.isArray(e)?"["+e.join(", ")+"]":e)+" "+(this.relation||"!=")+" "+(Array.isArray(t)?"["+t.join(", ")+"]":t)+")",this.stack=(new Error).stack}n.prototype=new RangeError,n.prototype.constructor=RangeError,n.prototype.name="DimensionError",n.prototype.isDimensionError=!0,e.exports=n},function(e,t,r){"use strict";var n=r(5).extend,i=r(2);t.name="multiply",t.factory=function(e,t,a,o){var s=r(4),u=a(r(1)),c=a(r(16)),f=a(r(21)),l=a(r(8)),p=a(r(20)),m=a(r(6)),h=e.DenseMatrix,d=e.SparseMatrix,y=o("multiply",n({"Array, Array":function(t,r){g(i.size(t),i.size(r));var n=y(u(t),u(r));return e.isMatrix(n)?n.valueOf():n},"Matrix, Matrix":function(e,t){var r=e.size(),n=t.size();return g(r,n),1===r.length?1===n.length?v(e,t,r[0]):x(e,t):1===n.length?b(e,t):N(e,t)},"Matrix, Array":function(e,t){return y(e,u(t))},"Array, Matrix":function(e,t){return y(u(e,t.storage()),t)},"SparseMatrix, any":function(e,t){return p(e,t,f,!1)},"DenseMatrix, any":function(e,t){return m(e,t,f,!1)},"any, SparseMatrix":function(e,t){return p(t,e,f,!0)},"any, DenseMatrix":function(e,t){return m(t,e,f,!0)},"Array, any":function(e,t){return m(u(e),t,f,!1).valueOf()},"any, Array":function(e,t){return m(u(t),e,f,!0).valueOf()},"any, any":f,"any, any, ...any":function(e,t,r){for(var n=y(e,t),i=0;i<r.length;i++)n=y(n,r[i]);return n}},f.signatures)),g=function(e,t){switch(e.length){case 1:switch(t.length){case 1:if(e[0]!==t[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(e[0]!==t[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+e[0]+") must match Matrix rows ("+t[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+t.length+" dimensions)")}break;case 2:switch(t.length){case 1:if(e[1]!==t[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+e[1]+") must match Vector length ("+t[0]+")");break;case 2:if(e[1]!==t[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+e[1]+") must match Matrix B rows ("+t[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+t.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+e.length+" dimensions)")}},v=function(e,t,r){if(0===r)throw new Error("Cannot multiply two empty vectors");var n,i=e._data,a=e._datatype,s=t._data,u=t._datatype,l=c,p=f;a&&u&&a===u&&"string"==typeof a&&(n=a,l=o.find(c,[n,n]),p=o.find(f,[n,n]));for(var m=p(i[0],s[0]),h=1;h<r;h++)m=l(m,p(i[h],s[h]));return m},x=function(e,t){if("dense"!==t.storage())throw new Error("Support for SparseMatrix not implemented");return w(e,t)},w=function(e,t){var r,n=e._data,i=e._size,a=e._datatype,s=t._data,u=t._size,l=t._datatype,p=i[0],m=u[1],d=c,y=f;a&&l&&a===l&&"string"==typeof a&&(r=a,d=o.find(c,[r,r]),y=o.find(f,[r,r]));for(var g=[],v=0;v<m;v++){for(var x=y(n[0],s[0][v]),w=1;w<p;w++)x=d(x,y(n[w],s[w][v]));g[v]=x}return new h({data:g,size:[m],datatype:r})},b=o("_multiplyMatrixVector",{"DenseMatrix, any":function(e,t){var r,n=e._data,i=e._size,a=e._datatype,s=t._data,u=t._datatype,l=i[0],p=i[1],m=c,d=f;a&&u&&a===u&&"string"==typeof a&&(r=a,m=o.find(c,[r,r]),d=o.find(f,[r,r]));for(var y=[],g=0;g<l;g++){for(var v=n[g],x=d(v[0],s[0]),w=1;w<p;w++)x=m(x,d(v[w],s[w]));y[g]=x}return new h({data:y,size:[l],datatype:r})},"SparseMatrix, any":function(e,t){var r=e._values,n=e._index,i=e._ptr,a=e._datatype;if(!r)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var s,u=t._data,p=t._datatype,m=e._size[0],h=t._size[0],y=[],g=[],v=[],x=c,w=f,b=l,N=0;a&&p&&a===p&&"string"==typeof a&&(s=a,x=o.find(c,[s,s]),w=o.find(f,[s,s]),b=o.find(l,[s,s]),N=o.convert(0,s));var M=[],E=[];v[0]=0;for(var A=0;A<h;A++){var O=u[A];if(!b(O,N))for(var S=i[A],_=i[A+1],T=S;T<_;T++){var C=n[T];E[C]?M[C]=x(M[C],w(O,r[T])):(E[C]=!0,g.push(C),M[C]=w(O,r[T]))}}for(var z=g.length,B=0;B<z;B++){var I=g[B];y[B]=M[I]}return v[1]=g.length,new d({values:y,index:g,ptr:v,size:[m,1],datatype:s})}}),N=o("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":function(e,t){var r,n=e._data,i=e._size,a=e._datatype,s=t._data,u=t._size,l=t._datatype,p=i[0],m=i[1],d=u[1],y=c,g=f;a&&l&&a===l&&"string"==typeof a&&(r=a,y=o.find(c,[r,r]),g=o.find(f,[r,r]));for(var v=[],x=0;x<p;x++){var w=n[x];v[x]=[];for(var b=0;b<d;b++){for(var N=g(w[0],s[0][b]),M=1;M<m;M++)N=y(N,g(w[M],s[M][b]));v[x][b]=N}}return new h({data:v,size:[p,d],datatype:r})},"DenseMatrix, SparseMatrix":function(e,t){var r=e._data,n=e._size,i=e._datatype,a=t._values,s=t._index,u=t._ptr,p=t._size,m=t._datatype;if(!a)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var h,y=n[0],g=p[1],v=c,x=f,w=l,b=0;i&&m&&i===m&&"string"==typeof i&&(h=i,v=o.find(c,[h,h]),x=o.find(f,[h,h]),w=o.find(l,[h,h]),b=o.convert(0,h));for(var N=[],M=[],E=[],A=new d({values:N,index:M,ptr:E,size:[y,g],datatype:h}),O=0;O<g;O++){E[O]=M.length;var S=u[O],_=u[O+1];if(_>S)for(var T=0,C=0;C<y;C++){for(var z,B=C+1,I=S;I<_;I++){var P=s[I];T!==B?(z=x(r[C][P],a[I]),T=B):z=v(z,x(r[C][P],a[I]))}T!==B||w(z,b)||(M.push(C),N.push(z))}}return E[g]=M.length,A},"SparseMatrix, DenseMatrix":function(e,t){var r=e._values,n=e._index,i=e._ptr,a=e._datatype;if(!r)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var s,u=t._data,p=t._datatype,m=e._size[0],h=t._size[0],y=t._size[1],g=c,v=f,x=l,w=0;a&&p&&a===p&&"string"==typeof a&&(s=a,g=o.find(c,[s,s]),v=o.find(f,[s,s]),x=o.find(l,[s,s]),w=o.convert(0,s));for(var b=[],N=[],M=[],E=new d({values:b,index:N,ptr:M,size:[m,y],datatype:s}),A=[],O=[],S=0;S<y;S++){M[S]=N.length;for(var _=S+1,T=0;T<h;T++){var C=u[T][S];if(!x(C,w))for(var z=i[T],B=i[T+1],I=z;I<B;I++){var P=n[I];O[P]!==_?(O[P]=_,N.push(P),A[P]=v(C,r[I])):A[P]=g(A[P],v(C,r[I]))}}for(var R=M[S],U=N.length,k=R;k<U;k++){var D=N[k];b[k]=A[D]}}return M[y]=N.length,E},"SparseMatrix, SparseMatrix":function(e,t){var r,n=e._values,i=e._index,a=e._ptr,s=e._datatype,u=t._values,l=t._index,p=t._ptr,m=t._datatype,h=e._size[0],y=t._size[1],g=n&&u,v=c,x=f;s&&m&&s===m&&"string"==typeof s&&(r=s,v=o.find(c,[r,r]),x=o.find(f,[r,r]));for(var w,b,N,M,E,A,O,S,_=g?[]:void 0,T=[],C=[],z=new d({values:_,index:T,ptr:C,size:[h,y],datatype:r}),B=g?[]:void 0,I=[],P=0;P<y;P++){C[P]=T.length;var R=P+1;for(E=p[P],A=p[P+1],M=E;M<A;M++)if(S=l[M],g)for(b=a[S],N=a[S+1],w=b;w<N;w++)O=i[w],I[O]!==R?(I[O]=R,T.push(O),B[O]=x(u[M],n[w])):B[O]=v(B[O],x(u[M],n[w]));else for(b=a[S],N=a[S+1],w=b;w<N;w++)O=i[w],I[O]!==R&&(I[O]=R,T.push(O));if(g)for(var U=C[P],k=T.length,D=U;D<k;D++){var q=T[D];_[D]=B[q]}}return C[y]=T.length,z}});return y.toTex={2:"\\left(${args[0]}"+s.operators.multiply+"${args[1]}\\right)"},y}},function(e,t,r){"use strict";t.factory=function(e,t,n,i){var a=n(r(21)),o=i("divide",{"number, number":function(e,t){return e/t},"Complex, Complex":function(e,t){return e.div(t)},"BigNumber, BigNumber":function(e,t){return e.div(t)},"Fraction, Fraction":function(e,t){return e.div(t)},"Unit, number | Fraction | BigNumber":function(e,t){var r=e.clone();return r.value=o(null===r.value?r._normalize(1):r.value,t),r},"number | Fraction | BigNumber, Unit":function(e,t){var r=t.pow(-1);return r.value=a(null===r.value?r._normalize(1):r.value,e),r},"Unit, Unit":function(e,t){return e.divide(t)}});return o}},function(e,t,r){"use strict";var n=r(5).hasOwnProperty;function i(e,t){return!(!e||"object"!=typeof e)&&(!!n(s,t)||!(t in Object.prototype)&&!(t in Function.prototype))}function a(e,t){return!(!e||"function"!=typeof e[t])&&(!(n(e,t)&&e.__proto__&&t in e.__proto__)&&(!!n(u,t)||!(t in Object.prototype)&&!(t in Function.prototype)))}function o(e){return"object"==typeof e&&e&&e.constructor===Object}var s={length:!0,name:!0},u={toString:!0,valueOf:!0,toLocaleString:!0};t.getSafeProperty=function(e,t){if(o(e)&&i(e,t))return e[t];if("function"==typeof e[t]&&a(e,t))throw new Error('Cannot access method "'+t+'" as a property');throw new Error('No access to property "'+t+'"')},t.setSafeProperty=function(e,t,r){if(o(e)&&i(e,t))return e[t]=r;throw new Error('No access to property "'+t+'"')},t.isSafeProperty=i,t.validateSafeMethod=function(e,t){if(!a(e,t))throw new Error('No access to method "'+t+'"')},t.isSafeMethod=a,t.isPlainObject=o},function(e,t,r){"use strict";var n=r(101),i=r(5).deepEqual,a=r(5).hasOwnProperty;t.name="Node",t.path="expression.node",t.math=!0,t.factory=function(e,t,r,o,s){function u(){if(!(this instanceof u))throw new SyntaxError("Constructor must be called with the new operator")}return u.prototype.eval=function(e){return this.compile().eval(e)},u.prototype.type="Node",u.prototype.isNode=!0,u.prototype.comment="",u.prototype.compile=function(){var e=this._compile(s.expression.mathWithTransform,{}),t={};return{eval:function(r){var i=r||{};return function(e){for(var t in e)if(a(e,t)&&t in n)throw new Error('Scope contains an illegal symbol, "'+t+'" is a reserved keyword')}(i),e(i,t,null)}}},u.prototype._compile=function(e,t){throw new Error("Method _compile should be implemented by type "+this.type)},u.prototype.forEach=function(e){throw new Error("Cannot run forEach on a Node interface")},u.prototype.map=function(e){throw new Error("Cannot run map on a Node interface")},u.prototype._ifNode=function(t){if(!e.isNode(t))throw new TypeError("Callback function must return a Node");return t},u.prototype.traverse=function(e){e(this,null,null),function e(t,r){t.forEach(function(t,n,i){r(t,n,i),e(t,r)})}(this,e)},u.prototype.transform=function(e){return function e(t,r){return t.map(function(t,n,i){return e(r(t,n,i),r)})}(e(this,null,null),e)},u.prototype.filter=function(e){var t=[];return this.traverse(function(r,n,i){e(r,n,i)&&t.push(r)}),t},u.prototype.find=function(){throw new Error("Function Node.find is deprecated. Use Node.filter instead.")},u.prototype.match=function(){throw new Error("Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.")},u.prototype.clone=function(){throw new Error("Cannot clone a Node interface")},u.prototype.cloneDeep=function(){return this.map(function(e){return e.cloneDeep()})},u.prototype.equals=function(e){return!!e&&i(this,e)},u.prototype.toString=function(e){var t;if(e&&"object"==typeof e)switch(typeof e.handler){case"object":case"undefined":break;case"function":t=e.handler(this,e);break;default:throw new TypeError("Object or function expected as callback")}return void 0!==t?t:this._toString(e)},u.prototype.toJSON=function(){throw new Error("Cannot serialize object: toJSON not implemented by "+this.type)},u.prototype.toHTML=function(e){var t;if(e&&"object"==typeof e)switch(typeof e.handler){case"object":case"undefined":break;case"function":t=e.handler(this,e);break;default:throw new TypeError("Object or function expected as callback")}return void 0!==t?t:this.toHTML(e)},u.prototype._toString=function(){throw new Error("_toString not implemented for "+this.type)},u.prototype.toTex=function(e){var t;if(e&&"object"==typeof e)switch(typeof e.handler){case"object":case"undefined":break;case"function":t=e.handler(this,e);break;default:throw new TypeError("Object or function expected as callback")}return void 0!==t?t:this._toTex(e)},u.prototype._toTex=function(e){throw new Error("_toTex not implemented for "+this.type)},u.prototype.getIdentifier=function(){return this.type},u.prototype.getContent=function(){return this},u}},function(e,t,r){"use strict";var n=r(5).extend;t.name="add",t.factory=function(e,t,i,a){var o=i(r(1)),s=i(r(16)),u=r(4),c=i(r(31)),f=i(r(74)),l=i(r(36)),p=i(r(7)),m=i(r(6)),h=a("add",n({"DenseMatrix, DenseMatrix":function(e,t){return p(e,t,s)},"DenseMatrix, SparseMatrix":function(e,t){return c(e,t,s,!1)},"SparseMatrix, DenseMatrix":function(e,t){return c(t,e,s,!0)},"SparseMatrix, SparseMatrix":function(e,t){return f(e,t,s)},"Array, Array":function(e,t){return h(o(e),o(t)).valueOf()},"Array, Matrix":function(e,t){return h(o(e),t)},"Matrix, Array":function(e,t){return h(e,o(t))},"DenseMatrix, any":function(e,t){return m(e,t,s,!1)},"SparseMatrix, any":function(e,t){return l(e,t,s,!1)},"any, DenseMatrix":function(e,t){return m(t,e,s,!0)},"any, SparseMatrix":function(e,t){return l(t,e,s,!0)},"Array, any":function(e,t){return m(o(e),t,s,!1).valueOf()},"any, Array":function(e,t){return m(o(t),e,s,!0).valueOf()},"any, any":s,"any, any, ...any":function(e,t,r){for(var n=h(e,t),i=0;i<r.length;i++)n=h(n,r[i]);return n}},s.signatures));return h.toTex={2:"\\left(${args[0]}"+u.operators.add+"${args[1]}\\right)"},h}},function(e,t,r){"use strict";t.factory=function(e,t,r,n){var i=n("add",{"number, number":function(e,t){return e+t},"Complex, Complex":function(e,t){return e.add(t)},"BigNumber, BigNumber":function(e,t){return e.plus(t)},"Fraction, Fraction":function(e,t){return e.add(t)},"Unit, Unit":function(e,t){if(null==e.value)throw new Error("Parameter x contains a unit with undefined value");if(null==t.value)throw new Error("Parameter y contains a unit with undefined value");if(!e.equalBase(t))throw new Error("Units do not match");var r=e.clone();return r.value=i(r.value,t.value),r.fixPrefix=!1,r}});return i}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm03",t.factory=function(e,t,r,i){var a=e.DenseMatrix;return function(e,t,r,o){var s=e._data,u=e._size,c=e._datatype,f=t._values,l=t._index,p=t._ptr,m=t._size,h=t._datatype;if(u.length!==m.length)throw new n(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!f)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var d,y=u[0],g=u[1],v=0,x=r;"string"==typeof c&&c===h&&(d=c,v=i.convert(0,d),x=i.find(r,[d,d]));for(var w=[],b=0;b<y;b++)w[b]=[];for(var N=[],M=[],E=0;E<g;E++){for(var A=E+1,O=p[E],S=p[E+1],_=O;_<S;_++){var T=l[_];N[T]=o?x(f[_],s[T][E]):x(s[T][E],f[_]),M[T]=A}for(var C=0;C<y;C++)M[C]===A?w[C][E]=N[C]:w[C][E]=o?x(v,s[C][E]):x(s[C][E],v)}return new a({data:w,size:[y,g],datatype:d})}}},function(e,t,r){"use strict";t.name="algorithm12",t.factory=function(e,t,r,n){var i=e.DenseMatrix;return function(e,t,r,a){var o=e._values,s=e._index,u=e._ptr,c=e._size,f=e._datatype;if(!o)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var l,p=c[0],m=c[1],h=r;"string"==typeof f&&(l=f,t=n.convert(t,l),h=n.find(r,[l,l]));for(var d=[],y=new i({data:d,size:[p,m],datatype:l}),g=[],v=[],x=0;x<m;x++){for(var w=x+1,b=u[x],N=u[x+1],M=b;M<N;M++){var E=s[M];g[E]=o[M],v[E]=w}for(var A=0;A<p;A++)0===x&&(d[A]=[]),v[A]===w?d[A][x]=a?h(t,g[A]):h(g[A],t):d[A][x]=a?h(t,0):h(0,t)}return y}}},function(e,t,r){"use strict";var n=r(10);function i(e,t){var r=e.size(),i=t.size();if(r.length!==i.length)throw new n(r.length,i.length)}t.name="subtract",t.factory=function(e,t,n,a){var o=r(4),s=n(r(1)),u=n(r(16)),c=n(r(33)),f=n(r(31)),l=n(r(17)),p=n(r(62)),m=n(r(36)),h=n(r(7)),d=n(r(6)),y=a("subtract",{"number, number":function(e,t){return e-t},"Complex, Complex":function(e,t){return e.sub(t)},"BigNumber, BigNumber":function(e,t){return e.minus(t)},"Fraction, Fraction":function(e,t){return e.sub(t)},"Unit, Unit":function(e,t){if(null==e.value)throw new Error("Parameter x contains a unit with undefined value");if(null==t.value)throw new Error("Parameter y contains a unit with undefined value");if(!e.equalBase(t))throw new Error("Units do not match");var r=e.clone();return r.value=y(r.value,t.value),r.fixPrefix=!1,r},"SparseMatrix, SparseMatrix":function(e,t){return i(e,t),p(e,t,y)},"SparseMatrix, DenseMatrix":function(e,t){return i(e,t),l(t,e,y,!0)},"DenseMatrix, SparseMatrix":function(e,t){return i(e,t),f(e,t,y,!1)},"DenseMatrix, DenseMatrix":function(e,t){return i(e,t),h(e,t,y)},"Array, Array":function(e,t){return y(s(e),s(t)).valueOf()},"Array, Matrix":function(e,t){return y(s(e),t)},"Matrix, Array":function(e,t){return y(e,s(t))},"SparseMatrix, any":function(e,t){return m(e,c(t),u)},"DenseMatrix, any":function(e,t){return d(e,t,y)},"any, SparseMatrix":function(e,t){return m(t,e,y,!0)},"any, DenseMatrix":function(e,t){return d(t,e,y,!0)},"Array, any":function(e,t){return d(s(e),t,y,!1).valueOf()},"any, Array":function(e,t){return d(s(t),e,y,!0).valueOf()}});return y.toTex={2:"\\left(${args[0]}"+o.operators.subtract+"${args[1]}\\right)"},y}},function(e,t,r){"use strict";t.name="algorithm11",t.factory=function(e,t,n,i){var a=n(r(8)),o=e.SparseMatrix;return function(e,t,r,n){var s=e._values,u=e._index,c=e._ptr,f=e._size,l=e._datatype;if(!s)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var p,m=f[0],h=f[1],d=a,y=0,g=r;"string"==typeof l&&(p=l,d=i.find(a,[p,p]),y=i.convert(0,p),t=i.convert(t,p),g=i.find(r,[p,p]));for(var v=[],x=[],w=[],b=new o({values:v,index:x,ptr:w,size:[m,h],datatype:p}),N=0;N<h;N++){w[N]=x.length;for(var M=c[N],E=c[N+1],A=M;A<E;A++){var O=u[A],S=n?g(t,s[A]):g(s[A],t);d(S,y)||(x.push(O),v.push(S))}}return w[h]=x.length,b}}},function(e,t,r){"use strict";t.factory=function(e,t,r,n){var i=n("multiplyScalar",{"number, number":function(e,t){return e*t},"Complex, Complex":function(e,t){return e.mul(t)},"BigNumber, BigNumber":function(e,t){return e.times(t)},"Fraction, Fraction":function(e,t){return e.mul(t)},"number | Fraction | BigNumber | Complex, Unit":function(e,t){var r=t.clone();return r.value=null===r.value?r._normalize(e):i(r.value,e),r},"Unit, number | Fraction | BigNumber | Complex":function(e,t){var r=e.clone();return r.value=null===r.value?r._normalize(t):i(r.value,t),r},"Unit, Unit":function(e,t){return e.multiply(t)}});return i}},function(e,t,r){"use strict";var n=r(5).clone,i=r(2).validateIndex,a=r(13).getSafeProperty,o=r(13).setSafeProperty,s=r(10);function u(e,t){if(1!==t.size().length)throw new s(t.size(),1);var r=t.dimension(0);if("string"!=typeof r)throw new TypeError("String expected as index to retrieve an object property");return a(e,r)}function c(e,t,r){if(1!==t.size().length)throw new s(t.size(),1);var i=t.dimension(0);if("string"!=typeof i)throw new TypeError("String expected as index to retrieve an object property");var a=n(e);return o(a,i,r),a}t.name="subset",t.factory=function(e,t,a,o){var f=a(r(1)),l=o("subset",{"Array, Index":function(e,t){var r=f(e).subset(t);return t.isScalar()?r:r.valueOf()},"Matrix, Index":function(e,t){return e.subset(t)},"Object, Index":u,"string, Index":function(t,r){if(!e.isIndex(r))throw new TypeError("Index expected");if(1!=r.size().length)throw new s(r.size().length,1);var n=t.length;i(r.min()[0],n),i(r.max()[0],n);var a=r.dimension(0),o="";return a.forEach(function(e){o+=t.charAt(e)}),o},"Array, Index, any":function(e,t,r){return f(n(e)).subset(t,r,void 0).valueOf()},"Array, Index, any, any":function(e,t,r,i){return f(n(e)).subset(t,r,i).valueOf()},"Matrix, Index, any":function(e,t,r){return e.clone().subset(t,r)},"Matrix, Index, any, any":function(e,t,r,n){return e.clone().subset(t,r,n)},"string, Index, string":p,"string, Index, string, string":p,"Object, Index, any":c});return l.toTex=void 0,l;function p(e,t,r,n){if(!t||!0!==t.isIndex)throw new TypeError("Index expected");if(1!=t.size().length)throw new s(t.size().length,1);if(void 0!==n){if("string"!=typeof n||1!==n.length)throw new TypeError("Single character expected as defaultValue")}else n=" ";var a=t.dimension(0),o=a.size()[0];if(o!=r.length)throw new s(a.size()[0],r.length);var u=e.length;i(t.min()[0]),i(t.max()[0]);for(var c=[],f=0;f<u;f++)c[f]=e.charAt(f);if(a.forEach(function(e,t){c[e]=r.charAt(t[0])}),c.length>u)for(f=u-1,o=c.length;f<o;f++)c[f]||(c[f]=n);return c.join("")}}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm02",t.factory=function(e,t,i,a){var o=i(r(8)),s=e.SparseMatrix;return function(e,t,r,i){var u=e._data,c=e._size,f=e._datatype,l=t._values,p=t._index,m=t._ptr,h=t._size,d=t._datatype;if(c.length!==h.length)throw new n(c.length,h.length);if(c[0]!==h[0]||c[1]!==h[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+h+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var y,g=c[0],v=c[1],x=o,w=0,b=r;"string"==typeof f&&f===d&&(y=f,x=a.find(o,[y,y]),w=a.convert(0,y),b=a.find(r,[y,y]));for(var N=[],M=[],E=[],A=0;A<v;A++){E[A]=M.length;for(var O=m[A],S=m[A+1],_=O;_<S;_++){var T=p[_],C=i?b(l[_],u[T][A]):b(u[T][A],l[_]);x(C,w)||(M.push(T),N.push(C))}}return E[v]=M.length,new s({values:N,index:M,ptr:E,size:[g,v],datatype:y})}}},function(e,t,r){"use strict";t.array=r(2),t.boolean=r(176),t.function=r(30),t.number=r(3),t.object=r(5),t.string=r(9),t.emitter=r(87)},function(e,t,r){"use strict";var n=r(10);t.name="algorithm07",t.factory=function(e,t,r,i){var a=e.DenseMatrix,o=function(e,t,r,n,i){for(var a=e._values,o=e._index,s=e._ptr,u=s[t],c=s[t+1];u<c;u++){var f=o[u];r[f]=i,n[f]=a[u]}};return function(e,t,r){var s=e._size,u=e._datatype,c=t._size,f=t._datatype;if(s.length!==c.length)throw new n(s.length,c.length);if(s[0]!==c[0]||s[1]!==c[1])throw new RangeError("Dimension mismatch. Matrix A ("+s+") must match Matrix B ("+c+")");var l,p,m,h=s[0],d=s[1],y=0,g=r;"string"==typeof u&&u===f&&(l=u,y=i.convert(0,l),g=i.find(r,[l,l]));var v=[];for(p=0;p<h;p++)v[p]=[];var x=new a({data:v,size:[h,d],datatype:l}),w=[],b=[],N=[],M=[];for(m=0;m<d;m++){var E=m+1;for(o(e,m,N,w,E),o(t,m,M,b,E),p=0;p<h;p++){var A=N[p]===E?w[p]:y,O=M[p]===E?b[p]:y;v[p][m]=g(A,O)}}return x}}},function(e,t,r){"use strict";var n=r(5).clone,i=r(3).isInteger;t.name="Index",t.path="type",t.factory=function(e){function t(n){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");this._dimensions=[],this._isScalar=!0;for(var i=0,a=arguments.length;i<a;i++){var o=arguments[i];if(e.isRange(o))this._dimensions.push(o),this._isScalar=!1;else if(Array.isArray(o)||e.isMatrix(o)){var s=r(o.valueOf());this._dimensions.push(s);var u=s.size();1===u.length&&1===u[0]||(this._isScalar=!1)}else if("number"==typeof o)this._dimensions.push(r([o]));else{if("string"!=typeof o)throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");this._dimensions.push(o)}}}function r(t){for(var r=0,n=t.length;r<n;r++)if("number"!=typeof t[r]||!i(t[r]))throw new TypeError("Index parameters must be positive integer numbers");return new e.ImmutableDenseMatrix(t)}return t.prototype.type="Index",t.prototype.isIndex=!0,t.prototype.clone=function(){var e=new t;return e._dimensions=n(this._dimensions),e._isScalar=this._isScalar,e},t.create=function(e){var r=new t;return t.apply(r,e),r},t.prototype.size=function(){for(var e=[],t=0,r=this._dimensions.length;t<r;t++){var n=this._dimensions[t];e[t]="string"==typeof n?1:n.size()[0]}return e},t.prototype.max=function(){for(var e=[],t=0,r=this._dimensions.length;t<r;t++){var n=this._dimensions[t];e[t]="string"==typeof n?n:n.max()}return e},t.prototype.min=function(){for(var e=[],t=0,r=this._dimensions.length;t<r;t++){var n=this._dimensions[t];e[t]="string"==typeof n?n:n.min()}return e},t.prototype.forEach=function(e){for(var t=0,r=this._dimensions.length;t<r;t++)e(this._dimensions[t],t,this)},t.prototype.dimension=function(e){return this._dimensions[e]||null},t.prototype.isObjectProperty=function(){return 1===this._dimensions.length&&"string"==typeof this._dimensions[0]},t.prototype.getObjectProperty=function(){return this.isObjectProperty()?this._dimensions[0]:null},t.prototype.isScalar=function(){return this._isScalar},t.prototype.toArray=function(){for(var e=[],t=0,r=this._dimensions.length;t<r;t++){var n=this._dimensions[t];e.push("string"==typeof n?n:n.toArray())}return e},t.prototype.valueOf=t.prototype.toArray,t.prototype.toString=function(){for(var e=[],t=0,r=this._dimensions.length;t<r;t++){var n=this._dimensions[t];"string"==typeof n?e.push(JSON.stringify(n)):e.push(n.toString())}return"["+e.join(", ")+"]"},t.prototype.toJSON=function(){return{mathjs:"Index",dimensions:this._dimensions}},t.fromJSON=function(e){return t.create(e.dimensions)},t}},function(e,t,r){"use strict";var n=r(0);t.name="abs",t.factory=function(e,t,r,i){var a=i("abs",{number:Math.abs,Complex:function(e){return e.abs()},BigNumber:function(e){return e.abs()},Fraction:function(e){return e.abs()},"Array | Matrix":function(e){return n(e,a,!0)},Unit:function(e){return e.abs()}});return a.toTex={1:"\\left|${args[0]}\\right|"},a}},function(e,t,r){"use strict";var n=r(2);t.name="size",t.factory=function(e,t,i,a){var o=i(r(1)),s=a("size",{Matrix:function(e){return o(e.size())},Array:n.size,string:function(e){return"Array"===t.matrix?[e.length]:o([e.length])},"number | Complex | BigNumber | Unit | boolean | null":function(e){return"Array"===t.matrix?[]:o([])}});return s.toTex=void 0,s}},function(e,t,r){"use strict";var n=r(485);t.name="compareNatural",t.factory=function(e,t,i,a){var o=i(r(47)),s=i(r(52)),u=s.signatures["boolean,boolean"],c=a("compareNatural",{"any, any":function(t,r){var i,a,l,p=o(t),m=o(r);if(!("number"!==p&&"BigNumber"!==p&&"Fraction"!==p||"number"!==m&&"BigNumber"!==m&&"Fraction"!==m))return"0"!==(i=s(t,r)).toString()?i>0?1:-1:n(p,m);if("Array"===p||"Matrix"===p||"Array"===m||"Matrix"===m)return 0!==(i=function t(r,n){return e.isSparseMatrix(r)&&e.isSparseMatrix(n)?f(r.toJSON().values,n.toJSON().values):e.isSparseMatrix(r)?t(r.toArray(),n):e.isSparseMatrix(n)?t(r,n.toArray()):e.isDenseMatrix(r)?t(r.toJSON().data,n):e.isDenseMatrix(n)?t(r,n.toJSON().data):Array.isArray(r)?Array.isArray(n)?f(r,n):t(r,[n]):t([r],n)}(t,r))?i:n(p,m);if(p!==m)return n(p,m);if("Complex"===p)return l=r,(a=t).re>l.re?1:a.re<l.re?-1:a.im>l.im?1:a.im<l.im?-1:0;if("Unit"===p)return t.equalBase(r)?c(t.value,r.value):f(t.formatUnits(),r.formatUnits());if("boolean"===p)return u(t,r);if("string"===p)return n(t,r);if("Object"===p)return function(e,t){var r=Object.keys(e),i=Object.keys(t);r.sort(n),i.sort(n);var a=f(r,i);if(0!==a)return a;for(var o=0;o<r.length;o++){var s=c(e[r[o]],t[i[o]]);if(0!==s)return s}return 0}(t,r);if("null"===p)return 0;if("undefined"===p)return 0;throw new TypeError('Unsupported type of value "'+p+'"')}});function f(e,t){for(var r=0,n=Math.min(e.length,t.length);r<n;r++){var i=c(e[r],t[r]);if(0!==i)return i}return e.length>t.length?1:e.length<t.length?-1:0}return c.toTex=void 0,c}},function(e,t){t.memoize=function(e,t){return function r(){"object"!=typeof r.cache&&(r.cache={});for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var a=t?t(n):JSON.stringify(n);return a in r.cache?r.cache[a]:r.cache[a]=e.apply(e,n)}},t.maxArgumentCount=function(e){return Object.keys(e.signatures||{}).reduce(function(e,t){var r=(t.match(/,/g)||[]).length+1;return Math.max(e,r)},-1)},t.callWithRightArgumentCount=function(e,t,r){return Object.keys(e.signatures||{}).reduce(function(e,t){var r=(t.match(/,/g)||[]).length+1;return Math.max(e,r)},-1)}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm01",t.factory=function(e,t,r,i){var a=e.DenseMatrix;return function(e,t,r,o){var s=e._data,u=e._size,c=e._datatype,f=t._values,l=t._index,p=t._ptr,m=t._size,h=t._datatype;if(u.length!==m.length)throw new n(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!f)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var d,y,g=u[0],v=u[1],x="string"==typeof c&&c===h?c:void 0,w=x?i.find(r,[x,x]):r,b=[];for(d=0;d<g;d++)b[d]=[];var N=[],M=[];for(y=0;y<v;y++){for(var E=y+1,A=p[y],O=p[y+1],S=A;S<O;S++)N[d=l[S]]=o?w(f[S],s[d][y]):w(s[d][y],f[S]),M[d]=E;for(d=0;d<g;d++)M[d]===E?b[d][y]=N[d]:b[d][y]=s[d][y]}return new a({data:b,size:[g,v],datatype:x})}}},function(e,t,r){"use strict";var n=r(3).nearlyEqual,i=r(35);t.name="larger",t.factory=function(e,t,a,o){var s=a(r(1)),u=a(r(17)),c=a(r(25)),f=a(r(18)),l=a(r(7)),p=a(r(6)),m=r(4),h=o("larger",{"boolean, boolean":function(e,t){return e>t},"number, number":function(e,r){return e>r&&!n(e,r,t.epsilon)},"BigNumber, BigNumber":function(e,r){return e.gt(r)&&!i(e,r,t.epsilon)},"Fraction, Fraction":function(e,t){return 1===e.compare(t)},"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")},"Unit, Unit":function(e,t){if(!e.equalBase(t))throw new Error("Cannot compare units with different base");return h(e.value,t.value)},"SparseMatrix, SparseMatrix":function(e,t){return c(e,t,h)},"SparseMatrix, DenseMatrix":function(e,t){return u(t,e,h,!0)},"DenseMatrix, SparseMatrix":function(e,t){return u(e,t,h,!1)},"DenseMatrix, DenseMatrix":function(e,t){return l(e,t,h)},"Array, Array":function(e,t){return h(s(e),s(t)).valueOf()},"Array, Matrix":function(e,t){return h(s(e),t)},"Matrix, Array":function(e,t){return h(e,s(t))},"SparseMatrix, any":function(e,t){return f(e,t,h,!1)},"DenseMatrix, any":function(e,t){return p(e,t,h,!1)},"any, SparseMatrix":function(e,t){return f(t,e,h,!0)},"any, DenseMatrix":function(e,t){return p(t,e,h,!0)},"Array, any":function(e,t){return p(s(e),t,h,!1).valueOf()},"any, Array":function(e,t){return p(s(t),e,h,!0).valueOf()}});return h.toTex={2:"\\left(${args[0]}"+m.operators.larger+"${args[1]}\\right)"},h}},function(e,t,r){"use strict";var n=r(0);t.name="unaryMinus",t.factory=function(e,t,i,a){var o=r(4),s=a("unaryMinus",{number:function(e){return-e},Complex:function(e){return e.neg()},BigNumber:function(e){return e.neg()},Fraction:function(e){return e.neg()},Unit:function(e){var t=e.clone();return t.value=s(e.value),t},"Array | Matrix":function(e){return n(e,s,!0)}});return s.toTex={1:o.operators.unaryMinus+"\\left(${args[0]}\\right)"},s}},function(e,t,r){t.factory=function(e,t,n,i){var a=n(r(47));return function(e,t,r){var n;return-1!==String(e).indexOf("Unexpected type")?(n=arguments.length>2?" (type: "+a(r)+", value: "+JSON.stringify(r)+")":" (type: "+e.data.actual+")",new TypeError("Cannot calculate "+t+", unexpected type of argument"+n)):-1!==String(e).indexOf("complex numbers")?(n=arguments.length>2?" (type: "+a(r)+", value: "+JSON.stringify(r)+")":"",new TypeError("Cannot calculate "+t+", no ordering relation is defined for complex numbers"+n)):e}}},function(e,t,r){"use strict";e.exports=function(e,t,r){if(null==r)return e.eq(t);if(e.eq(t))return!0;if(e.isNaN()||t.isNaN())return!1;if(e.isFinite()&&t.isFinite()){var n=e.minus(t).abs();if(n.isZero())return!0;var i=e.constructor.max(e.abs(),t.abs());return n.lte(i.times(r))}return!1}},function(e,t,r){"use strict";t.name="algorithm10",t.factory=function(e,t,r,n){var i=e.DenseMatrix;return function(e,t,r,a){var o=e._values,s=e._index,u=e._ptr,c=e._size,f=e._datatype;if(!o)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var l,p=c[0],m=c[1],h=r;"string"==typeof f&&(l=f,t=n.convert(t,l),h=n.find(r,[l,l]));for(var d=[],y=new i({data:d,size:[p,m],datatype:l}),g=[],v=[],x=0;x<m;x++){for(var w=x+1,b=u[x],N=u[x+1],M=b;M<N;M++){var E=s[M];g[E]=o[M],v[E]=w}for(var A=0;A<p;A++)0===x&&(d[A]=[]),v[A]===w?d[A][x]=a?h(t,g[A]):h(g[A],t):d[A][x]=t}return y}}},function(e,t,r){"use strict";var n=r(3).nearlyEqual,i=r(35);t.name="smaller",t.factory=function(e,t,a,o){var s=a(r(1)),u=a(r(17)),c=a(r(25)),f=a(r(18)),l=a(r(7)),p=a(r(6)),m=r(4),h=o("smaller",{"boolean, boolean":function(e,t){return e<t},"number, number":function(e,r){return e<r&&!n(e,r,t.epsilon)},"BigNumber, BigNumber":function(e,r){return e.lt(r)&&!i(e,r,t.epsilon)},"Fraction, Fraction":function(e,t){return-1===e.compare(t)},"Complex, Complex":function(e,t){throw new TypeError("No ordering relation is defined for complex numbers")},"Unit, Unit":function(e,t){if(!e.equalBase(t))throw new Error("Cannot compare units with different base");return h(e.value,t.value)},"SparseMatrix, SparseMatrix":function(e,t){return c(e,t,h)},"SparseMatrix, DenseMatrix":function(e,t){return u(t,e,h,!0)},"DenseMatrix, SparseMatrix":function(e,t){return u(e,t,h,!1)},"DenseMatrix, DenseMatrix":function(e,t){return l(e,t,h)},"Array, Array":function(e,t){return h(s(e),s(t)).valueOf()},"Array, Matrix":function(e,t){return h(s(e),t)},"Matrix, Array":function(e,t){return h(e,s(t))},"SparseMatrix, any":function(e,t){return f(e,t,h,!1)},"DenseMatrix, any":function(e,t){return p(e,t,h,!1)},"any, SparseMatrix":function(e,t){return f(t,e,h,!0)},"any, DenseMatrix":function(e,t){return p(t,e,h,!0)},"Array, any":function(e,t){return p(s(e),t,h,!1).valueOf()},"any, Array":function(e,t){return p(s(t),e,h,!0).valueOf()}});return h.toTex={2:"\\left(${args[0]}"+m.operators.smaller+"${args[1]}\\right)"},h}},function(e,t,r){"use strict";var n=r(3).isInteger,i=r(2).size;t.name="pow",t.factory=function(e,t,a,o){var s=r(4),u=a(r(63)),c=a(r(11)),f=a(r(1)),l=a(r(89)),p=a(r(75)),m=o("pow",{"number, number":h,"Complex, Complex":function(e,t){return e.pow(t)},"BigNumber, BigNumber":function(r,n){return n.isInteger()||r>=0||t.predictable?r.pow(n):new e.Complex(r.toNumber(),0).pow(n.toNumber(),0)},"Fraction, Fraction":function(e,r){if(1!==r.d){if(t.predictable)throw new Error("Function pow does not support non-integer exponents for fractions.");return h(e.valueOf(),r.valueOf())}return e.pow(r)},"Array, number":d,"Array, BigNumber":function(e,t){return d(e,t.toNumber())},"Matrix, number":y,"Matrix, BigNumber":function(e,t){return y(e,t.toNumber())},"Unit, number":function(e,t){return e.pow(t)}});function h(r,i){if(t.predictable&&!n(i)&&r<0)try{var a=l(i),o=p(a);if((i===o||Math.abs((i-o)/i)<1e-14)&&a.d%2==1)return(a.n%2==0?1:-1)*Math.pow(-r,i)}catch(e){}return r*r<1&&i===1/0||r*r>1&&i===-1/0?0:t.predictable&&(r<-1&&i===1/0||r>-1&&r<0&&i===-1/0)?NaN:n(i)||r>=0||t.predictable?Math.pow(r,i):new e.Complex(r,0).pow(i,0)}function d(e,t){if(!n(t)||t<0)throw new TypeError("For A^b, b must be a positive integer (value is "+t+")");var r=i(e);if(2!=r.length)throw new Error("For A^b, A must be 2 dimensional (A has "+r.length+" dimensions)");if(r[0]!=r[1])throw new Error("For A^b, A must be square (size is "+r[0]+"x"+r[1]+")");for(var a=u(r[0]).valueOf(),o=e;t>=1;)1==(1&t)&&(a=c(o,a)),t>>=1,o=c(o,o);return a}function y(e,t){return f(d(e.valueOf(),t))}return m.toTex={2:"\\left(${args[0]}\\right)"+s.operators.pow+"{${args[1]}}"},m}},function(e,t,r){"use strict";var n=r(3).isInteger,i=r(2).resize;t.name="zeros",t.factory=function(e,t,a,o){var s=a(r(1)),u=o("zeros",{"":function(){return"Array"===t.matrix?c([]):c([],"default")},"...number | BigNumber | string":function(e){return"string"==typeof e[e.length-1]?c(e,e.pop()):"Array"===t.matrix?c(e):c(e,"default")},Array:c,Matrix:function(e){var t=e.storage();return c(e.valueOf(),t)},"Array | Matrix, string":function(e,t){return c(e.valueOf(),t)}});return u.toTex=void 0,u;function c(t,r){var a,o=(a=!1,t.forEach(function(t,r,n){e.isBigNumber(t)&&(a=!0,n[r]=t.toNumber())}),a?new e.BigNumber(0):0);if(t.forEach(function(e){if("number"!=typeof e||!n(e)||e<0)throw new Error("Parameters in function zeros must be positive integers")}),r){var u=s(r);return t.length>0?u.resize(t,o):u}var c=[];return t.length>0?i(c,t,o):c}}},function(e,t,r){"use strict";var n=r(44),i=r(0);t.name="parse",t.path="expression",t.factory=function(e,t,a,o){var s=a(r(99)),u=a(r(100)),c=a(r(103)),f=a(r(104)),l=a(r(105)),p=a(r(106)),m=a(r(56)),h=a(r(107)),d=a(r(76)),y=a(r(108)),g=a(r(57)),v=a(r(64)),x=a(r(65)),w=a(r(109)),b=a(r(48));function N(t,r){if(1!==arguments.length&&2!==arguments.length)throw new n("parse",arguments.length,1,2);if(_=r&&r.nodes?r.nodes:{},"string"==typeof t)return T=t,Z();if(Array.isArray(t)||t instanceof e.Matrix)return i(t,function(e){if("string"!=typeof e)throw new TypeError("String expected");return T=e,Z()});throw new TypeError("String or matrix expected")}var M={NULL:0,DELIMITER:1,NUMBER:2,SYMBOL:3,UNKNOWN:4},E={",":!0,"(":!0,")":!0,"[":!0,"]":!0,"{":!0,"}":!0,'"':!0,";":!0,"+":!0,"-":!0,"*":!0,".*":!0,"/":!0,"./":!0,"%":!0,"^":!0,".^":!0,"~":!0,"!":!0,"&":!0,"|":!0,"^|":!0,"'":!0,"=":!0,":":!0,"?":!0,"==":!0,"!=":!0,"<":!0,">":!0,"<=":!0,">=":!0,"<<":!0,">>":!0,">>>":!0},A={mod:!0,to:!0,in:!0,and:!0,xor:!0,or:!0,not:!0},O={true:!0,false:!1,null:null,undefined:void 0},S=["NaN","Infinity"],_={},T="",C="",z=0,B="",I="",P=M.NULL,R=0,U=null,k=[];function D(){z++,B=T.charAt(z)}function q(){return T.charAt(z-1)}function L(){return T.charAt(z+1)}function F(){k.push({token_type:P,token:I,comment:C,index:z,c:B})}function j(){var e=k.pop();P=e.token_type,I=e.token,C=e.comment,z=e.index,B=e.c}function H(){for(P=M.NULL,I="",C="";N.isWhitespace(B,R);)D();if("#"===B)for(;"\n"!==B&&""!==B;)C+=B,D();if(""!==B){if("\n"===B&&!R)return P=M.DELIMITER,I=B,void D();var e=B+L(),t=e+T.charAt(z+2);if(3===t.length&&E[t])return P=M.DELIMITER,I=t,D(),D(),void D();if(2===e.length&&E[e])return P=M.DELIMITER,I=e,D(),void D();if(E[B])return P=M.DELIMITER,I=B,void D();if(N.isDigitDot(B)){if(P=M.NUMBER,"."===B)I+=B,D(),N.isDigit(B)||(P=M.DELIMITER);else{for(;N.isDigit(B);)I+=B,D();N.isDecimalMark(B,L())&&(I+=B,D())}for(;N.isDigit(B);)I+=B,D();if(e=L(),"E"===B||"e"===B)if(N.isDigit(e)||"-"===e||"+"===e){if(I+=B,D(),"+"!==B&&"-"!==B||(I+=B,D()),!N.isDigit(B))throw me('Digit expected, got "'+B+'"');for(;N.isDigit(B);)I+=B,D();if(N.isDecimalMark(B,L()))throw me('Digit expected, got "'+B+'"')}else if("."===e)throw D(),me('Digit expected, got "'+B+'"')}else{if(!N.isAlpha(B,q(),L())){for(P=M.UNKNOWN;""!==B;)I+=B,D();throw me('Syntax error in part "'+I+'"')}for(;N.isAlpha(B,q(),L())||N.isDigit(B);)I+=B,D();P=A.hasOwnProperty(I)?M.DELIMITER:M.SYMBOL}}else P=M.DELIMITER}function $(){for(;H(),"\n"===I;);}function G(){R++}function V(){R--}function Z(){z=0,B=T.charAt(0),R=0,U=null,H();var e=function(){var e,t,r=[];for(""!==I&&"\n"!==I&&";"!==I&&((e=W()).comment=C);"\n"===I||";"===I;)0===r.length&&e&&(t=";"!==I,r.push({node:e,visible:t})),H(),"\n"!==I&&";"!==I&&""!==I&&((e=W()).comment=C,t=";"!==I,r.push({node:e,visible:t}));return r.length>0?new l(r):(e||((e=new m(void 0)).comment=C),e)}();if(""!==I)throw P===M.DELIMITER?he("Unexpected operator "+I):me('Unexpected part "'+I+'"');return e}function W(){var t,r,n,i,a=function(){for(var e=function(){for(var e=J();"or"===I;)$(),e=new g("or","or",[e,J()]);return e}();"?"===I;){var t=U;U=R,$();var r=e,n=W();if(":"!==I)throw me("False part of conditional expression expected");U=null,$();var i=W();e=new p(r,n,i),U=t}return e}();if("="===I){if(e.isSymbolNode(a))return t=a.name,$(),n=W(),new f(new b(t),n);if(e.isAccessorNode(a))return $(),n=W(),new f(a.object,a.index,n);if(e.isFunctionNode(a)&&e.isSymbolNode(a.fn)&&(i=!0,r=[],t=a.name,a.args.forEach(function(t,n){e.isSymbolNode(t)?r[n]=t.name:i=!1}),i))return $(),n=W(),new h(t,r,n);throw me("Invalid left hand side of assignment operator =")}return a}function J(){for(var e=Y();"xor"===I;)$(),e=new g("xor","xor",[e,Y()]);return e}function Y(){for(var e=X();"and"===I;)$(),e=new g("and","and",[e,X()]);return e}function X(){for(var e=Q();"|"===I;)$(),e=new g("|","bitOr",[e,Q()]);return e}function Q(){for(var e=K();"^|"===I;)$(),e=new g("^|","bitXor",[e,K()]);return e}function K(){for(var e=ee();"&"===I;)$(),e=new g("&","bitAnd",[e,ee()]);return e}function ee(){var e,t,r,n,i;for(e=te(),t={"==":"equal","!=":"unequal","<":"smaller",">":"larger","<=":"smallerEq",">=":"largerEq"};t.hasOwnProperty(I);)n=t[r=I],$(),i=[e,te()],e=new g(r,n,i);return e}function te(){var e,t,r,n,i;for(e=re(),t={"<<":"leftShift",">>":"rightArithShift",">>>":"rightLogShift"};t.hasOwnProperty(I);)n=t[r=I],$(),i=[e,re()],e=new g(r,n,i);return e}function re(){var e,t,r,n,i;for(e=ne(),t={to:"to",in:"to"};t.hasOwnProperty(I);)n=t[r=I],$(),"in"===r&&""===I?e=new g("*","multiply",[e,new b("in")],!0):(i=[e,ne()],e=new g(r,n,i));return e}function ne(){var e,t=[];if(e=":"===I?new m(1):ie(),":"===I&&U!==R){for(t.push(e);":"===I&&t.length<3;)$(),")"===I||"]"===I||","===I||""===I?t.push(new b("end")):t.push(ie());e=3===t.length?new w(t[0],t[2],t[1]):new w(t[0],t[1])}return e}function ie(){var e,t,r,n,i;for(e=ae(),t={"+":"add","-":"subtract"};t.hasOwnProperty(I);)n=t[r=I],$(),i=[e,ae()],e=new g(r,n,i);return e}function ae(){var e,t,r,n,i;for(t=e=oe(),r={"*":"multiply",".*":"dotMultiply","/":"divide","./":"dotDivide","%":"mod",mod:"mod"};r.hasOwnProperty(I);)i=r[n=I],$(),t=oe(),e=new g(n,i,[e,t]);return e}function oe(){var t,r;for(r=t=se();P===M.SYMBOL||"in"===I&&e.isConstantNode(t)||!(P!==M.NUMBER||e.isConstantNode(r)||e.isOperatorNode(r)&&"!"!==r.op)||"("===I;)r=se(),t=new g("*","multiply",[t,r],!0);return t}function se(){var t,r;for(r=t=ue();"/"===I&&e.isConstantNode(r);){if(F(),$(),P!==M.NUMBER){j();break}if(F(),$(),P!==M.SYMBOL&&"("!==I){j(),j();break}j(),k.pop(),r=ue(),t=new g("/","divide",[t,r])}return t}function ue(){var e,r,n,i,a,o,u,f={"-":"unaryMinus","+":"unaryPlus","~":"bitNot",not:"not"};return f.hasOwnProperty(I)?(n=f[I],e=I,$(),r=[ue()],new g(e,n,r)):(i=function(){var e,r,n,i;for(e=function(){var e,r,n=[];if(P===M.SYMBOL&&_.hasOwnProperty(I)){var i=_[I];if(H(),"("===I){if(n=[],G(),H(),")"!==I)for(n.push(W());","===I;)H(),n.push(W());if(")"!==I)throw me("Parenthesis ) expected");V(),H()}return new i(n)}return P===M.SYMBOL||P===M.DELIMITER&&I in A?(e=I,H(),ce(O.hasOwnProperty(e)?new m(O[e]):-1!==S.indexOf(e)?new m(s(e)):new b(e))):'"'===I?(r=fe(),ce(new m(r))):function(){var e,r,n,i;if("["===I){if(G(),H(),"]"!==I){var a=le();if(";"===I){for(n=1,r=[a];";"===I;)H(),r[n]=le(),n++;if("]"!==I)throw me("End of matrix ] expected");V(),H(),i=r[0].items.length;for(var o=1;o<n;o++)if(r[o].items.length!==i)throw he("Column dimensions mismatch ("+r[o].items.length+" !== "+i+")");e=new c(r)}else{if("]"!==I)throw me("End of matrix ] expected");V(),H(),e=a}}else V(),H(),e=new c([]);return ce(e)}return function(){if("{"===I){var e,r={};do{if(H(),"}"!==I){if('"'===I)e=fe();else{if(P!==M.SYMBOL)throw me("Symbol or string expected as object key");e=I,H()}if(":"!==I)throw me("Colon : expected after object key");H(),r[e]=W()}}while(","===I);if("}"!==I)throw me("Comma , or bracket } expected after object value");H();var n=new y(r);return n=ce(n)}return P===M.NUMBER?(i=I,H(),new m(s(i,t.number))):function(){var e;if("("===I){if(G(),H(),e=W(),")"!==I)throw me("Parenthesis ) expected");return V(),H(),e=ce(e=new v(e))}return function(){throw me(""===I?"Unexpected end of expression":"'"===I?"Value expected. Note: strings must be enclosed by double quotes":"Value expected")}()}();var i}()}()}(),r={"!":"factorial","'":"transpose"};r.hasOwnProperty(I);)i=r[n=I],H(),e=ce(e=new g(n,i,[e]));return e}(),("^"===I||".^"===I)&&(o="^"===(a=I)?"pow":"dotPow",$(),u=[i,ue()],i=new g(a,o,u)),i)}function ce(t,r){for(var n;!("("!==I&&"["!==I&&"."!==I||r&&-1===r.indexOf(I));)if(n=[],"("===I){if(!e.isSymbolNode(t)&&!e.isAccessorNode(t))return t;if(G(),H(),")"!==I)for(n.push(W());","===I;)H(),n.push(W());if(")"!==I)throw me("Parenthesis ) expected");V(),H(),t=new x(t,n)}else if("["===I){if(G(),H(),"]"!==I)for(n.push(W());","===I;)H(),n.push(W());if("]"!==I)throw me("Parenthesis ] expected");V(),H(),t=new u(t,new d(n))}else{if(H(),P!==M.SYMBOL)throw me("Property name expected after dot");n.push(new m(I)),H(),t=new u(t,new d(n,!0))}return t}function fe(){for(var e="";""!==B&&'"'!==B;)"\\"===B&&(e+=B,D()),e+=B,D();if(H(),'"'!==I)throw me('End of string " expected');return H(),JSON.parse('"'+e+'"')}function le(){for(var e=[W()],t=1;","===I;)H(),e[t]=W(),t++;return new c(e)}function pe(){return z-I.length+1}function me(e){var t=pe(),r=new SyntaxError(e+" (char "+t+")");return r.char=t,r}function he(e){var t=pe(),r=new SyntaxError(e+" (char "+t+")");return r.char=t,r}return N.isAlpha=function(e,t,r){return N.isValidLatinOrGreek(e)||N.isValidMathSymbol(e,r)||N.isValidMathSymbol(t,e)},N.isValidLatinOrGreek=function(e){return/^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e)},N.isValidMathSymbol=function(e,t){return/^[\uD835]$/.test(e)&&/^[\uDC00-\uDFFF]$/.test(t)&&/^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t)},N.isWhitespace=function(e,t){return" "===e||"\t"===e||"\n"===e&&t>0},N.isDecimalMark=function(e,t){return"."===e&&"/"!==t&&"*"!==t&&"^"!==t},N.isDigitDot=function(e){return e>="0"&&e<="9"||"."===e},N.isDigit=function(e){return e>="0"&&e<="9"},N}},function(e,t,r){var n=r(53);t.transform=function(e){return e&&e.isIndexError?new n(e.index+1,e.min+1,void 0!==e.max?e.max+1:void 0):e}},function(e,t,r){"use strict";var n=r(61);e.exports=function e(t,r){n(t)&&(t=t.valueOf());for(var i=0,a=t.length;i<a;i++){var o=t[i];Array.isArray(o)?e(o,r):r(o)}}},function(e,t,r){"use strict";var n=r(5).extend;t.name="divide",t.factory=function(e,t,i,a){var o=i(r(12)),s=i(r(11)),u=i(r(115)),c=i(r(1)),f=i(r(20)),l=i(r(6)),p=a("divide",n({"Array | Matrix, Array | Matrix":function(e,t){return s(e,u(t))},"DenseMatrix, any":function(e,t){return l(e,t,o,!1)},"SparseMatrix, any":function(e,t){return f(e,t,o,!1)},"Array, any":function(e,t){return l(c(e),t,o,!1).valueOf()},"any, Array | Matrix":function(e,t){return s(e,u(t))}},o.signatures));return p.toTex={2:"\\frac{${args[0]}}{${args[1]}}"},p}},function(e,t,r){"use strict";function n(e,t,r,i){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");this.fn=e,this.count=t,this.min=r,this.max=i,this.message="Wrong number of arguments in function "+e+" ("+t+" provided, "+r+(null!=i?"-"+i:"")+" expected)",this.stack=(new Error).stack}n.prototype=new Error,n.prototype.constructor=Error,n.prototype.name="ArgumentsError",n.prototype.isArgumentsError=!0,e.exports=n},function(e,t,r){"use strict";var n=r(24),i=r(10),a=n.string,o=n.array,s=n.object,u=n.number,c=Array.isArray,f=u.isNumber,l=u.isInteger,p=a.isString,m=o.validateIndex;t.name="DenseMatrix",t.path="type",t.factory=function(e,t,u,h){var d=u(r(73));function y(t,r){if(!(this instanceof y))throw new SyntaxError("Constructor must be called with the new operator");if(r&&!p(r))throw new Error("Invalid datatype: "+r);if(e.isMatrix(t))"DenseMatrix"===t.type?(this._data=s.clone(t._data),this._size=s.clone(t._size),this._datatype=r||t._datatype):(this._data=t.toArray(),this._size=t.size(),this._datatype=r||t._datatype);else if(t&&c(t.data)&&c(t.size))this._data=t.data,this._size=t.size,this._datatype=r||t.datatype;else if(c(t))this._data=function e(t){for(var r=0,n=t.length;r<n;r++){var i=t[r];c(i)?t[r]=e(i):i&&!0===i.isMatrix&&(t[r]=e(i.valueOf()))}return t}(t),this._size=o.size(this._data),o.validate(this._data,this._size),this._datatype=r;else{if(t)throw new TypeError("Unsupported type of data ("+n.types.type(t)+")");this._data=[],this._size=[0],this._datatype=r}}y.prototype=new d,y.prototype.type="DenseMatrix",y.prototype.isDenseMatrix=!0,y.prototype.storage=function(){return"dense"},y.prototype.datatype=function(){return this._datatype},y.prototype.create=function(e,t){return new y(e,t)},y.prototype.subset=function(t,r,n){switch(arguments.length){case 1:return function(t,r){if(!e.isIndex(r))throw new TypeError("Invalid index");if(r.isScalar())return t.get(r.min());var n=r.size();if(n.length!=t._size.length)throw new i(n.length,t._size.length);for(var a=r.min(),o=r.max(),s=0,u=t._size.length;s<u;s++)m(a[s],t._size[s]),m(o[s],t._size[s]);return new y(function e(t,r,n,i){var a=i===n-1,o=r.dimension(i);return a?o.map(function(e){return m(e,t.length),t[e]}).valueOf():o.map(function(a){m(a,t.length);var o=t[a];return e(o,r,n,i+1)}).valueOf()}(t._data,r,n.length,0),t._datatype)}(this,t);case 2:case 3:return function(t,r,n,a){if(!r||!0!==r.isIndex)throw new TypeError("Invalid index");var u,c=r.size(),f=r.isScalar();if(e.isMatrix(n)?(u=n.size(),n=n.valueOf()):u=o.size(n),f){if(0!==u.length)throw new TypeError("Scalar expected");t.set(r.min(),n,a)}else{if(c.length<t._size.length)throw new i(c.length,t._size.length,"<");if(u.length<c.length){for(var l=0,p=0;1===c[l]&&1===u[l];)l++;for(;1===c[l];)p++,l++;n=o.unsqueeze(n,c.length,p,u)}if(!s.deepEqual(c,u))throw new i(c,u,">");var h=r.max().map(function(e){return e+1});v(t,h,a);var d=c.length;!function e(t,r,n,i,a){var o=a===i-1,s=r.dimension(a);o?s.forEach(function(e,r){m(e),t[e]=n[r[0]]}):s.forEach(function(o,s){m(o),e(t[o],r,n[s[0]],i,a+1)})}(t._data,r,n,d,0)}return t}(this,t,r,n);default:throw new SyntaxError("Wrong number of arguments")}},y.prototype.get=function(e){if(!c(e))throw new TypeError("Array expected");if(e.length!=this._size.length)throw new i(e.length,this._size.length);for(var t=0;t<e.length;t++)m(e[t],this._size[t]);for(var r=this._data,n=0,a=e.length;n<a;n++){var o=e[n];m(o,r.length),r=r[o]}return r},y.prototype.set=function(e,t,r){if(!c(e))throw new TypeError("Array expected");if(e.length<this._size.length)throw new i(e.length,this._size.length,"<");var n,a,o;v(this,e.map(function(e){return e+1}),r);var s=this._data;for(n=0,a=e.length-1;n<a;n++)o=e[n],m(o,s.length),s=s[o];return o=e[e.length-1],m(o,s.length),s[o]=t,this},y.prototype.resize=function(e,t,r){if(!c(e))throw new TypeError("Array expected");var n=r?this.clone():this;return g(n,e,t)};var g=function(e,t,r){if(0===t.length){for(var n=e._data;c(n);)n=n[0];return n}return e._size=t.slice(0),e._data=o.resize(e._data,e._size,r),e};function v(e,t,r){for(var n=e._size.slice(0),i=!1;n.length<t.length;)n.push(0),i=!0;for(var a=0,o=t.length;a<o;a++)t[a]>n[a]&&(n[a]=t[a],i=!0);i&&g(e,n,r)}return y.prototype.reshape=function(e,t){var r=t?this.clone():this;return r._data=o.reshape(r._data,e),r._size=e.slice(0),r},y.prototype.clone=function(){return new y({data:s.clone(this._data),size:s.clone(this._size),datatype:this._datatype})},y.prototype.size=function(){return this._size.slice(0)},y.prototype.map=function(e){var t=this,r=function(n,i){return c(n)?n.map(function(e,t){return r(e,i.concat(t))}):e(n,i,t)};return new y({data:r(this._data,[]),size:s.clone(this._size),datatype:this._datatype})},y.prototype.forEach=function(e){var t=this,r=function(n,i){c(n)?n.forEach(function(e,t){r(e,i.concat(t))}):e(n,i,t)};r(this._data,[])},y.prototype.toArray=function(){return s.clone(this._data)},y.prototype.valueOf=function(){return this._data},y.prototype.format=function(e){return a.format(this._data,e)},y.prototype.toString=function(){return a.format(this._data)},y.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},y.prototype.diagonal=function(t){if(t){if(e.isBigNumber(t)&&(t=t.toNumber()),!f(t)||!l(t))throw new TypeError("The parameter k must be an integer number")}else t=0;for(var r=t>0?t:0,n=t<0?-t:0,i=this._size[0],a=this._size[1],o=Math.min(i-n,a-r),s=[],u=0;u<o;u++)s[u]=this._data[u+n][u+r];return new y({data:s,size:[o],datatype:this._datatype})},y.diagonal=function(t,r,n,i,a){if(!c(t))throw new TypeError("Array expected, size parameter");if(2!==t.length)throw new Error("Only two dimensions matrix are supported");if(t=t.map(function(t){if(e.isBigNumber(t)&&(t=t.toNumber()),!f(t)||!l(t)||t<1)throw new Error("Size values must be positive integers");return t}),n){if(e.isBigNumber(n)&&(n=n.toNumber()),!f(n)||!l(n))throw new TypeError("The parameter k must be an integer number")}else n=0;i&&p(a)&&(i=h.convert(i,a));var s,u=n>0?n:0,m=n<0?-n:0,d=t[0],g=t[1],v=Math.min(d-m,g-u);if(c(r)){if(r.length!==v)throw new Error("Invalid value array length");s=function(e){return r[e]}}else if(e.isMatrix(r)){var x=r.size();if(1!==x.length||x[0]!==v)throw new Error("Invalid matrix length");s=function(e){return r.get([e])}}else s=function(){return r};i||(i=e.isBigNumber(s(0))?new e.BigNumber(0):0);var w=[];if(t.length>0){w=o.resize(w,t,i);for(var b=0;b<v;b++)w[b+m][b+u]=s(b)}return new y({data:w,size:[d,g]})},y.fromJSON=function(e){return new y(e)},y.prototype.swapRows=function(e,t){if(!(f(e)&&l(e)&&f(t)&&l(t)))throw new Error("Row index must be positive integers");if(2!==this._size.length)throw new Error("Only two dimensional matrix is supported");return m(e,this._size[0]),m(t,this._size[0]),y._swapRows(e,t,this._data),this},y._swapRows=function(e,t,r){var n=r[e];r[e]=r[t],r[t]=n},e.Matrix._storage.dense=y,e.Matrix._storage.default=y,y},t.lazy=!1},function(e,t,r){"use strict";t.name="equal",t.factory=function(e,t,n,i){var a=n(r(1)),o=n(r(8)),s=n(r(17)),u=n(r(25)),c=n(r(18)),f=n(r(7)),l=n(r(6)),p=r(4),m=i("equal",{"any, any":function(e,t){return null===e?null===t:null===t?null===e:void 0===e?void 0===t:void 0===t?void 0===e:o(e,t)},"SparseMatrix, SparseMatrix":function(e,t){return u(e,t,o)},"SparseMatrix, DenseMatrix":function(e,t){return s(t,e,o,!0)},"DenseMatrix, SparseMatrix":function(e,t){return s(e,t,o,!1)},"DenseMatrix, DenseMatrix":function(e,t){return f(e,t,o)},"Array, Array":function(e,t){return m(a(e),a(t)).valueOf()},"Array, Matrix":function(e,t){return m(a(e),t)},"Matrix, Array":function(e,t){return m(e,a(t))},"SparseMatrix, any":function(e,t){return c(e,t,o,!1)},"DenseMatrix, any":function(e,t){return l(e,t,o,!1)},"any, SparseMatrix":function(e,t){return c(t,e,o,!0)},"any, DenseMatrix":function(e,t){return l(t,e,o,!0)},"Array, any":function(e,t){return l(a(e),t,o,!1).valueOf()},"any, Array":function(e,t){return l(a(t),e,o,!0).valueOf()}});return m.toTex={2:"\\left(${args[0]}"+p.operators.equal+"${args[1]}\\right)"},m}},function(e,t,r){"use strict";t.name="typeof",t.factory=function(e,t,r,n){var i=n("_typeof",{any:function(t){var r=typeof t;return"object"===r?null===t?"null":Array.isArray(t)?"Array":t instanceof Date?"Date":t instanceof RegExp?"RegExp":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":e.isBigNumber(t)?"BigNumber":e.isComplex(t)?"Complex":e.isFraction(t)?"Fraction":e.isMatrix(t)?"Matrix":e.isUnit(t)?"Unit":e.isIndex(t)?"Index":e.isRange(t)?"Range":e.isResultSet(t)?"ResultSet":e.isNode(t)?t.type:e.isChain(t)?"Chain":e.isHelp(t)?"Help":"Object":"function"===r?"Function":r}});return i.toTex=void 0,i}},function(e,t,r){"use strict";var n=r(4),i=r(9).escape,a=r(5).hasOwnProperty,o=r(13).getSafeProperty;t.name="SymbolNode",t.path="expression.node",t.math=!0,t.factory=function(e,t,s,u,c){var f=s(r(14));function l(t){return!!e.Unit&&e.Unit.isValuelessUnit(t)}function p(e){if(!(this instanceof p))throw new SyntaxError("Constructor must be called with the new operator");if("string"!=typeof e)throw new TypeError('String expected for parameter "name"');this.name=e}return p.prototype=new f,p.prototype.type="SymbolNode",p.prototype.isSymbolNode=!0,p.prototype._compile=function(t,r){var n=this.name;if(a(r,n))return function(e,t,r){return t[n]};if(n in t)return function(e,r,i){return o(n in e?e:t,n)};var i=l(n);return function(t,r,a){return n in t?o(t,n):i?new e.Unit(null,n):function(e){throw new Error("Undefined symbol "+e)}(n)}},p.prototype.forEach=function(e){},p.prototype.map=function(e){return this.clone()},p.prototype.clone=function(){return new p(this.name)},p.prototype._toString=function(e){return this.name},p.prototype.toHTML=function(e){var t=i(this.name);return"true"==t||"false"==t?'<span class="math-symbol math-boolean">'+t+"</span>":"i"==t?'<span class="math-symbol math-imaginary-symbol">'+t+"</span>":"Infinity"==t?'<span class="math-symbol math-infinity-symbol">'+t+"</span>":"NaN"==t?'<span class="math-symbol math-nan-symbol">'+t+"</span>":"null"==t?'<span class="math-symbol math-null-symbol">'+t+"</span>":"undefined"==t?'<span class="math-symbol math-undefined-symbol">'+t+"</span>":'<span class="math-symbol">'+t+"</span>"},p.prototype.toJSON=function(){return{mathjs:"SymbolNode",name:this.name}},p.fromJSON=function(e){return new p(e.name)},p.prototype._toTex=function(e){var t=!1;void 0===c[this.name]&&l(this.name)&&(t=!0);var r=n.toSymbol(this.name,t);return"\\"===r[0]?r:" "+r},p}},function(e,t,r){"use strict";var n=r(61);e.exports=function(e){return Array.isArray(e)||n(e)}},function(e,t,r){"use strict";var n=r(0);t.name="sqrt",t.factory=function(e,t,r,i){var a=i("sqrt",{number:o,Complex:function(e){return e.sqrt()},BigNumber:function(e){return!e.isNegative()||t.predictable?e.sqrt():o(e.toNumber())},"Array | Matrix":function(e){return n(e,a,!0)},Unit:function(e){return e.pow(.5)}});function o(r){return r>=0||t.predictable?Math.sqrt(r):new e.Complex(r,0).sqrt()}return a.toTex={1:"\\sqrt{${args[0]}}"},a}},function(e,t,r){"use strict";var n=r(0),i=r(3);t.name="isInteger",t.factory=function(e,t,r,a){var o=a("isInteger",{number:i.isInteger,BigNumber:function(e){return e.isInt()},Fraction:function(e){return 1===e.d&&isFinite(e.n)},"Array | Matrix":function(e){return n(e,o)}});return o}},function(e,t,r){"use strict";var n=r(3).nearlyEqual,i=r(35);t.name="compare",t.factory=function(e,t,a,o){var s=a(r(1)),u=a(r(17)),c=a(r(62)),f=a(r(18)),l=a(r(7)),p=a(r(6)),m=o("compare",{"boolean, boolean":function(e,t){return e===t?0:e>t?1:-1},"number, number":function(e,r){return e===r||n(e,r,t.epsilon)?0:e>r?1:-1},"BigNumber, BigNumber":function(r,n){return r.eq(n)||i(r,n,t.epsilon)?new e.BigNumber(0):new e.BigNumber(r.cmp(n))},"Fraction, Fraction":function(t,r){return new e.Fraction(t.compare(r))},"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")},"Unit, Unit":function(e,t){if(!e.equalBase(t))throw new Error("Cannot compare units with different base");return m(e.value,t.value)},"SparseMatrix, SparseMatrix":function(e,t){return c(e,t,m)},"SparseMatrix, DenseMatrix":function(e,t){return u(t,e,m,!0)},"DenseMatrix, SparseMatrix":function(e,t){return u(e,t,m,!1)},"DenseMatrix, DenseMatrix":function(e,t){return l(e,t,m)},"Array, Array":function(e,t){return m(s(e),s(t)).valueOf()},"Array, Matrix":function(e,t){return m(s(e),t)},"Matrix, Array":function(e,t){return m(e,s(t))},"SparseMatrix, any":function(e,t){return f(e,t,m,!1)},"DenseMatrix, any":function(e,t){return p(e,t,m,!1)},"any, SparseMatrix":function(e,t){return f(t,e,m,!0)},"any, DenseMatrix":function(e,t){return p(t,e,m,!0)},"Array, any":function(e,t){return p(s(e),t,m,!1).valueOf()},"any, Array":function(e,t){return p(s(t),e,m,!0).valueOf()}});return m.toTex=void 0,m}},function(e,t,r){"use strict";function n(e,t,r){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");this.index=e,arguments.length<3?(this.min=0,this.max=t):(this.min=t,this.max=r),void 0!==this.min&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":void 0!==this.max&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=(new Error).stack}n.prototype=new RangeError,n.prototype.constructor=RangeError,n.prototype.name="IndexError",n.prototype.isIndexError=!0,e.exports=n},function(e,t,r){"use strict";var n=r(0);r(3);t.name="isNumeric",t.factory=function(e,t,r,i){var a=i("isNumeric",{"number | BigNumber | Fraction | boolean":function(){return!0},"Complex | Unit | string":function(){return!1},"Array | Matrix":function(e){return n(e,a)}});return a}},function(e,t,r){"use strict";var n=[{AssignmentNode:{},FunctionAssignmentNode:{}},{ConditionalNode:{latexLeftParens:!1,latexRightParens:!1,latexParens:!1}},{"OperatorNode:or":{associativity:"left",associativeWith:[]}},{"OperatorNode:xor":{associativity:"left",associativeWith:[]}},{"OperatorNode:and":{associativity:"left",associativeWith:[]}},{"OperatorNode:bitOr":{associativity:"left",associativeWith:[]}},{"OperatorNode:bitXor":{associativity:"left",associativeWith:[]}},{"OperatorNode:bitAnd":{associativity:"left",associativeWith:[]}},{"OperatorNode:equal":{associativity:"left",associativeWith:[]},"OperatorNode:unequal":{associativity:"left",associativeWith:[]},"OperatorNode:smaller":{associativity:"left",associativeWith:[]},"OperatorNode:larger":{associativity:"left",associativeWith:[]},"OperatorNode:smallerEq":{associativity:"left",associativeWith:[]},"OperatorNode:largerEq":{associativity:"left",associativeWith:[]}},{"OperatorNode:leftShift":{associativity:"left",associativeWith:[]},"OperatorNode:rightArithShift":{associativity:"left",associativeWith:[]},"OperatorNode:rightLogShift":{associativity:"left",associativeWith:[]}},{"OperatorNode:to":{associativity:"left",associativeWith:[]}},{RangeNode:{}},{"OperatorNode:add":{associativity:"left",associativeWith:["OperatorNode:add","OperatorNode:subtract"]},"OperatorNode:subtract":{associativity:"left",associativeWith:[]}},{"OperatorNode:multiply":{associativity:"left",associativeWith:["OperatorNode:multiply","OperatorNode:divide","Operator:dotMultiply","Operator:dotDivide"]},"OperatorNode:divide":{associativity:"left",associativeWith:[],latexLeftParens:!1,latexRightParens:!1,latexParens:!1},"OperatorNode:dotMultiply":{associativity:"left",associativeWith:["OperatorNode:multiply","OperatorNode:divide","OperatorNode:dotMultiply","OperatorNode:doDivide"]},"OperatorNode:dotDivide":{associativity:"left",associativeWith:[]},"OperatorNode:mod":{associativity:"left",associativeWith:[]}},{"OperatorNode:unaryPlus":{associativity:"right"},"OperatorNode:unaryMinus":{associativity:"right"},"OperatorNode:bitNot":{associativity:"right"},"OperatorNode:not":{associativity:"right"}},{"OperatorNode:pow":{associativity:"right",associativeWith:[],latexRightParens:!1},"OperatorNode:dotPow":{associativity:"right",associativeWith:[]}},{"OperatorNode:factorial":{associativity:"left"}},{"OperatorNode:transpose":{associativity:"left"}}];function i(e,t){var r=e;"keep"!==t&&(r=e.getContent());for(var i=r.getIdentifier(),a=0;a<n.length;a++)if(i in n[a])return a;return null}e.exports.properties=n,e.exports.getPrecedence=i,e.exports.getAssociativity=function(e,t){var r=e;"keep"!==t&&(r=e.getContent());var a=r.getIdentifier(),o=i(r,t);if(null===o)return null;var s=n[o][a];if(s.hasOwnProperty("associativity")){if("left"===s.associativity)return"left";if("right"===s.associativity)return"right";throw Error("'"+a+"' has the invalid associativity '"+s.associativity+"'.")}return null},e.exports.isAssociativeWith=function(e,t,r){var a=e,o=t;"keep"!==r&&(a=e.getContent(),o=t.getContent());var s=a.getIdentifier(),u=o.getIdentifier(),c=i(a,r);if(null===c)return null;var f=n[c][s];if(f.hasOwnProperty("associativeWith")&&f.associativeWith instanceof Array){for(var l=0;l<f.associativeWith.length;l++)if(f.associativeWith[l]===u)return!0;return!1}return null}},function(e,t,r){"use strict";var n=r(9).format,i=r(4).escape;t.name="ConstantNode",t.path="expression.node",t.factory=function(e,t,a,o){var s=a(r(14)),u=a(r(47));function c(e){if(!(this instanceof c))throw new SyntaxError("Constructor must be called with the new operator");if(2===arguments.length)throw new SyntaxError("new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.");this.value=e}return c.prototype=new s,c.prototype.type="ConstantNode",c.prototype.isConstantNode=!0,c.prototype._compile=function(e,t){var r=this.value;return function(){return r}},c.prototype.forEach=function(e){},c.prototype.map=function(e){return this.clone()},c.prototype.clone=function(){return new c(this.value)},c.prototype._toString=function(e){return n(this.value,e)},c.prototype.toHTML=function(e){var t=this._toString(e);switch(u(this.value)){case"number":case"BigNumber":case"Fraction":return'<span class="math-number">'+t+"</span>";case"string":return'<span class="math-string">'+t+"</span>";case"boolean":return'<span class="math-boolean">'+t+"</span>";case"null":return'<span class="math-null-symbol">'+t+"</span>";case"undefined":return'<span class="math-undefined">'+t+"</span>";default:return'<span class="math-symbol">'+t+"</span>"}},c.prototype.toJSON=function(){return{mathjs:"ConstantNode",value:this.value}},c.fromJSON=function(e){return new c(e.value)},c.prototype._toTex=function(e){var t=this._toString(e);switch(u(this.value)){case"string":return"\\mathtt{"+i(t)+"}";case"number":case"BigNumber":var r=t.toLowerCase().indexOf("e");return-1!==r?t.substring(0,r)+"\\cdot10^{"+t.substring(r+1)+"}":t;case"Fraction":return this.value.toLatex();default:return t}},c}},function(e,t,r){"use strict";var n=r(4),i=r(2).map,a=r(9).escape,o=r(13).isSafeMethod,s=r(13).getSafeProperty,u=r(55);t.name="OperatorNode",t.path="expression.node",t.factory=function(e,t,c,f){var l=c(r(14));function p(t,r,n,i){if(!(this instanceof p))throw new SyntaxError("Constructor must be called with the new operator");if("string"!=typeof t)throw new TypeError('string expected for parameter "op"');if("string"!=typeof r)throw new TypeError('string expected for parameter "fn"');if(!Array.isArray(n)||!n.every(e.isNode))throw new TypeError('Array containing Nodes expected for parameter "args"');this.implicit=!0===i,this.op=t,this.fn=r,this.args=n||[]}function m(e,t,r,n,i){var a=u.getPrecedence(e,t),o=u.getAssociativity(e,t);if("all"===t||n.length>2&&"OperatorNode:add"!==e.getIdentifier()&&"OperatorNode:multiply"!==e.getIdentifier())return n.map(function(e){switch(e.getContent().type){case"ArrayNode":case"ConstantNode":case"SymbolNode":case"ParenthesisNode":return!1;default:return!0}});var s=void 0;switch(n.length){case 0:s=[];break;case 1:var c=u.getPrecedence(n[0],t);if(i&&null!==c){var f;if("keep"===t?(f=n[0].getIdentifier(),d=e.getIdentifier()):(f=n[0].getContent().getIdentifier(),d=e.getContent().getIdentifier()),!1===u.properties[a][d].latexLeftParens){s=[!1];break}if(!1===u.properties[c][f].latexParens){s=[!1];break}}if(null===c){s=[!1];break}if(c<=a){s=[!0];break}s=[!1];break;case 2:var l,p,m=u.getPrecedence(n[0],t),h=u.isAssociativeWith(e,n[0],t);l=null!==m&&(m===a&&"right"===o&&!h||m<a);var d,y,g,v=u.getPrecedence(n[1],t),x=u.isAssociativeWith(e,n[1],t);p=null!==v&&(v===a&&"left"===o&&!x||v<a),i&&("keep"===t?(d=e.getIdentifier(),y=e.args[0].getIdentifier(),g=e.args[1].getIdentifier()):(d=e.getContent().getIdentifier(),y=e.args[0].getContent().getIdentifier(),g=e.args[1].getContent().getIdentifier()),null!==m&&(!1===u.properties[a][d].latexLeftParens&&(l=!1),!1===u.properties[m][y].latexParens&&(l=!1)),null!==v&&(!1===u.properties[a][d].latexRightParens&&(p=!1),!1===u.properties[v][g].latexParens&&(p=!1))),s=[l,p];break;default:"OperatorNode:add"!==e.getIdentifier()&&"OperatorNode:multiply"!==e.getIdentifier()||(s=n.map(function(r){var n=u.getPrecedence(r,t),i=u.isAssociativeWith(e,r,t),s=u.getAssociativity(r,t);return null!==n&&(a===n&&o===s&&!i||n<a)}))}return n.length>=2&&"OperatorNode:multiply"===e.getIdentifier()&&e.implicit&&"auto"===t&&"hide"===r&&(s=n.map(function(e,t){var r="ParenthesisNode"===e.getIdentifier();return!(!s[t]&&!r)})),s}return p.prototype=new l,p.prototype.type="OperatorNode",p.prototype.isOperatorNode=!0,p.prototype._compile=function(e,t){if("string"!=typeof this.fn||!o(e,this.fn))throw e[this.fn]?new Error('No access to function "'+this.fn+'"'):new Error("Function "+this.fn+' missing in provided namespace "math"');var r=s(e,this.fn),n=i(this.args,function(r){return r._compile(e,t)});if(1===n.length){var a=n[0];return function(e,t,n){return r(a(e,t,n))}}if(2===n.length){a=n[0];var u=n[1];return function(e,t,n){return r(a(e,t,n),u(e,t,n))}}return function(e,t,a){return r.apply(null,i(n,function(r){return r(e,t,a)}))}},p.prototype.forEach=function(e){for(var t=0;t<this.args.length;t++)e(this.args[t],"args["+t+"]",this)},p.prototype.map=function(e){for(var t=[],r=0;r<this.args.length;r++)t[r]=this._ifNode(e(this.args[r],"args["+r+"]",this));return new p(this.op,this.fn,t,this.implicit)},p.prototype.clone=function(){return new p(this.op,this.fn,this.args.slice(0),this.implicit)},p.prototype.isUnary=function(){return 1===this.args.length},p.prototype.isBinary=function(){return 2===this.args.length},p.prototype._toString=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=e&&e.implicit?e.implicit:"hide",n=this.args,i=m(this,t,r,n,!1);if(1===n.length){var a=u.getAssociativity(this,t),o=n[0].toString(e);return i[0]&&(o="("+o+")"),"right"===a?this.op+o:o+this.op}if(2==n.length){var s=n[0].toString(e),c=n[1].toString(e);return i[0]&&(s="("+s+")"),i[1]&&(c="("+c+")"),this.implicit&&"OperatorNode:multiply"===this.getIdentifier()&&"hide"==r?s+" "+c:s+" "+this.op+" "+c}if(n.length>2&&("OperatorNode:add"===this.getIdentifier()||"OperatorNode:multiply"===this.getIdentifier())){var f=n.map(function(t,r){return t=t.toString(e),i[r]&&(t="("+t+")"),t});return this.implicit&&"OperatorNode:multiply"===this.getIdentifier()&&"hide"===r?f.join(" "):f.join(" "+this.op+" ")}return this.fn+"("+this.args.join(", ")+")"},p.prototype.toJSON=function(){return{mathjs:"OperatorNode",op:this.op,fn:this.fn,args:this.args,implicit:this.implicit}},p.fromJSON=function(e){return new p(e.op,e.fn,e.args,e.implicit)},p.prototype.toHTML=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=e&&e.implicit?e.implicit:"hide",n=this.args,i=m(this,t,r,n,!1);if(1===n.length){var o=u.getAssociativity(this,t),s=n[0].toHTML(e);return i[0]&&(s='<span class="math-parenthesis math-round-parenthesis">(</span>'+s+'<span class="math-parenthesis math-round-parenthesis">)</span>'),"right"===o?'<span class="math-operator math-unary-operator math-lefthand-unary-operator">'+a(this.op)+"</span>"+s:'<span class="math-operator math-unary-operator math-righthand-unary-operator">'+a(this.op)+"</span>"+s}if(2==n.length){var c=n[0].toHTML(e),f=n[1].toHTML(e);return i[0]&&(c='<span class="math-parenthesis math-round-parenthesis">(</span>'+c+'<span class="math-parenthesis math-round-parenthesis">)</span>'),i[1]&&(f='<span class="math-parenthesis math-round-parenthesis">(</span>'+f+'<span class="math-parenthesis math-round-parenthesis">)</span>'),this.implicit&&"OperatorNode:multiply"===this.getIdentifier()&&"hide"==r?c+'<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>'+f:c+'<span class="math-operator math-binary-operator math-explicit-binary-operator">'+a(this.op)+"</span>"+f}if(n.length>2&&("OperatorNode:add"===this.getIdentifier()||"OperatorNode:multiply"===this.getIdentifier())){var l=n.map(function(t,r){return t=t.toHTML(e),i[r]&&(t='<span class="math-parenthesis math-round-parenthesis">(</span>'+t+'<span class="math-parenthesis math-round-parenthesis">)</span>'),t});return this.implicit&&"OperatorNode:multiply"===this.getIdentifier()&&"hide"===r?l.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>'):l.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">'+a(this.op)+"</span>")}return'<span class="math-function">'+a(this.fn)+'</span><span class="math-paranthesis math-round-parenthesis">(</span>'+l.join('<span class="math-separator">,</span>')+'<span class="math-paranthesis math-round-parenthesis">)</span>'},p.prototype._toTex=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=e&&e.implicit?e.implicit:"hide",i=this.args,a=m(this,t,r,i,!0),o=n.operators[this.fn];if(o=void 0===o?this.op:o,1===i.length){var s=u.getAssociativity(this,t),c=i[0].toTex(e);return a[0]&&(c="\\left("+c+"\\right)"),"right"===s?o+c:c+o}if(2===i.length){var f=i[0],l=f.toTex(e);a[0]&&(l="\\left("+l+"\\right)");var p,h=i[1].toTex(e);switch(a[1]&&(h="\\left("+h+"\\right)"),p="keep"===t?f.getIdentifier():f.getContent().getIdentifier(),this.getIdentifier()){case"OperatorNode:divide":return o+"{"+l+"}{"+h+"}";case"OperatorNode:pow":switch(l="{"+l+"}",h="{"+h+"}",p){case"ConditionalNode":case"OperatorNode:divide":l="\\left("+l+"\\right)"}case"OperatorNode:multiply":if(this.implicit&&"hide"===r)return l+"~"+h}return l+o+h}if(i.length>2&&("OperatorNode:add"===this.getIdentifier()||"OperatorNode:multiply"===this.getIdentifier())){var d=i.map(function(t,r){return t=t.toTex(e),a[r]&&(t="\\left("+t+"\\right)"),t});return"OperatorNode:multiply"===this.getIdentifier()&&this.implicit?d.join("~"):d.join(o)}return"\\mathrm{"+this.fn+"}\\left("+i.map(function(t){return t.toTex(e)}).join(",")+"\\right)"},p.prototype.getIdentifier=function(){return this.type+":"+this.fn},p}},function(e,t,r){"use strict";var n=r(0);r(3);t.name="isZero",t.factory=function(e,t,r,i){var a=i("isZero",{number:function(e){return 0===e},BigNumber:function(e){return e.isZero()},Complex:function(e){return 0===e.re&&0===e.im},Fraction:function(e){return 1===e.d&&0===e.n},Unit:function(e){return a(e.value)},"Array | Matrix":function(e){return n(e,a)}});return a}},function(e,t,r){"use strict";var n=r(0);r(3);t.name="isPositive",t.factory=function(e,t,r,i){var a=i("isPositive",{number:function(e){return e>0},BigNumber:function(e){return!e.isNeg()&&!e.isZero()&&!e.isNaN()},Fraction:function(e){return e.s>0&&e.n>0},Unit:function(e){return a(e.value)},"Array | Matrix":function(e){return n(e,a)}});return a}},function(e,t,r){"use strict";var n=r(0);r(3);t.name="isNegative",t.factory=function(e,t,r,i){var a=i("isNegative",{number:function(e){return e<0},BigNumber:function(e){return e.isNeg()&&!e.isZero()&&!e.isNaN()},Fraction:function(e){return e.s<0},Unit:function(e){return a(e.value)},"Array | Matrix":function(e){return n(e,a)}});return a}},function(e,t,r){"use strict";e.exports=function(e){return e&&e.constructor.prototype.isMatrix||!1}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm05",t.factory=function(e,t,i,a){var o=i(r(8)),s=e.SparseMatrix;return function(e,t,r){var i=e._values,u=e._index,c=e._ptr,f=e._size,l=e._datatype,p=t._values,m=t._index,h=t._ptr,d=t._size,y=t._datatype;if(f.length!==d.length)throw new n(f.length,d.length);if(f[0]!==d[0]||f[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+f+") must match Matrix B ("+d+")");var g,v=f[0],x=f[1],w=o,b=0,N=r;"string"==typeof l&&l===y&&(g=l,w=a.find(o,[g,g]),b=a.convert(0,g),N=a.find(r,[g,g]));var M,E,A,O,S=i&&p?[]:void 0,_=[],T=[],C=new s({values:S,index:_,ptr:T,size:[v,x],datatype:g}),z=S?[]:void 0,B=S?[]:void 0,I=[],P=[];for(E=0;E<x;E++){T[E]=_.length;var R=E+1;for(A=c[E],O=c[E+1];A<O;A++)M=u[A],_.push(M),I[M]=R,z&&(z[M]=i[A]);for(A=h[E],O=h[E+1];A<O;A++)I[M=m[A]]!==R&&_.push(M),P[M]=R,B&&(B[M]=p[A]);if(S)for(A=T[E];A<_.length;){var U=I[M=_[A]],k=P[M];if(U===R||k===R){var D=N(U===R?z[M]:b,k===R?B[M]:b);w(D,b)?_.splice(A,1):(S.push(D),A++)}}}return T[x]=_.length,C}}},function(e,t,r){"use strict";var n=r(2),i=r(3).isInteger;t.name="eye",t.factory=function(e,t,a,o){var s=a(r(1)),u=o("eye",{"":function(){return"Matrix"===t.matrix?s([]):[]},string:function(e){return s(e)},"number | BigNumber":function(e){return f(e,e,"Matrix"===t.matrix?"default":void 0)},"number | BigNumber, string":function(e,t){return f(e,e,t)},"number | BigNumber, number | BigNumber":function(e,r){return f(e,r,"Matrix"===t.matrix?"default":void 0)},"number | BigNumber, number | BigNumber, string":function(e,t,r){return f(e,t,r)},Array:function(e){return c(e)},"Array, string":function(e,t){return c(e,t)},Matrix:function(e){return c(e.valueOf(),e.storage())},"Matrix, string":function(e,t){return c(e.valueOf(),t)}});return u.toTex=void 0,u;function c(e,t){switch(e.length){case 0:return t?s(t):[];case 1:return f(e[0],e[0],t);case 2:return f(e[0],e[1],t);default:throw new Error("Vector containing two values expected")}}function f(t,r,a){var o=e.isBigNumber(t)||e.isBigNumber(r)?e.BigNumber:null;if(e.isBigNumber(t)&&(t=t.toNumber()),e.isBigNumber(r)&&(r=r.toNumber()),!i(t)||t<1)throw new Error("Parameters in function eye must be positive integers");if(!i(r)||r<1)throw new Error("Parameters in function eye must be positive integers");var s=o?new e.BigNumber(1):1,u=o?new o(0):0,c=[t,r];if(a)return e.Matrix.storage(a).diagonal(c,s,0,u);for(var f=n.resize([],c,u),l=t<r?t:r,p=0;p<l;p++)f[p][p]=s;return f}}},function(e,t,r){"use strict";t.name="ParenthesisNode",t.path="expression.node",t.factory=function(e,t,n,i){var a=n(r(14));function o(t){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");if(!e.isNode(t))throw new TypeError('Node expected for parameter "content"');this.content=t}return o.prototype=new a,o.prototype.type="ParenthesisNode",o.prototype.isParenthesisNode=!0,o.prototype._compile=function(e,t){return this.content._compile(e,t)},o.prototype.getContent=function(){return this.content.getContent()},o.prototype.forEach=function(e){e(this.content,"content",this)},o.prototype.map=function(e){return new o(e(this.content,"content",this))},o.prototype.clone=function(){return new o(this.content)},o.prototype._toString=function(e){return!e||e&&!e.parenthesis||e&&"keep"===e.parenthesis?"("+this.content.toString(e)+")":this.content.toString(e)},o.prototype.toJSON=function(){return{mathjs:"ParenthesisNode",content:this.content}},o.fromJSON=function(e){return new o(e.content)},o.prototype.toHTML=function(e){return!e||e&&!e.parenthesis||e&&"keep"===e.parenthesis?'<span class="math-parenthesis math-round-parenthesis">(</span>'+this.content.toHTML(e)+'<span class="math-parenthesis math-round-parenthesis">)</span>':this.content.toHTML(e)},o.prototype._toTex=function(e){return!e||e&&!e.parenthesis||e&&"keep"===e.parenthesis?"\\left("+this.content.toTex(e)+"\\right)":this.content.toTex(e)},o}},function(e,t,r){"use strict";var n=r(4),i=r(9).escape,a=r(5).hasOwnProperty,o=r(2).map,s=r(13).validateSafeMethod,u=r(13).getSafeProperty;t.name="FunctionNode",t.path="expression.node",t.math=!0,t.factory=function(e,t,c,f,l){var p=c(r(14)),m=c(r(48));function h(t,r){if(!(this instanceof h))throw new SyntaxError("Constructor must be called with the new operator");if("string"==typeof t&&(t=new m(t)),!e.isNode(t))throw new TypeError('Node expected as parameter "fn"');if(!Array.isArray(r)||!r.every(e.isNode))throw new TypeError('Array containing Nodes expected for parameter "args"');this.fn=t,this.args=r||[],Object.defineProperty(this,"name",{get:function(){return this.fn.name||""}.bind(this),set:function(){throw new Error("Cannot assign a new name, name is read-only")}});var n=function(){throw new Error("Property `FunctionNode.object` is deprecated, use `FunctionNode.fn` instead")};Object.defineProperty(this,"object",{get:n,set:n})}h.prototype=new p,h.prototype.type="FunctionNode",h.prototype.isFunctionNode=!0,h.prototype._compile=function(t,r){if(!(this instanceof h))throw new TypeError("No valid FunctionNode");var n=o(this.args,function(e){return e._compile(t,r)});if(e.isSymbolNode(this.fn)){var i=this.fn.name,a=i in t?u(t,i):void 0;if("function"==typeof a&&1==a.rawArgs){var c=this.args;return function(e,r,n){return(i in e?u(e,i):a)(c,t,e)}}if(1===n.length){var f=n[0];return function(e,t,r){return(i in e?u(e,i):a)(f(e,t,r))}}if(2===n.length){f=n[0];var l=n[1];return function(e,t,r){return(i in e?u(e,i):a)(f(e,t,r),l(e,t,r))}}return function(e,t,r){return(i in e?u(e,i):a).apply(null,o(n,function(n){return n(e,t,r)}))}}if(e.isAccessorNode(this.fn)&&e.isIndexNode(this.fn.index)&&this.fn.index.isObjectProperty()){var p=this.fn.object._compile(t,r),m=this.fn.index.getObjectProperty();return c=this.args,function(e,r,i){var a=p(e,r,i);return s(a,m),a[m]&&a[m].rawArgs?a[m](c,t,e):a[m].apply(a,o(n,function(t){return t(e,r,i)}))}}var d=this.fn._compile(t,r);return function(e,r,i){var a=d(e,r,i);return a&&a.rawArgs?a(c,t,e):a.apply(a,o(n,function(t){return t(e,r,i)}))}},h.prototype.forEach=function(e){for(var t=0;t<this.args.length;t++)e(this.args[t],"args["+t+"]",this)},h.prototype.map=function(e){for(var t=this.fn.map(e),r=[],n=0;n<this.args.length;n++)r[n]=this._ifNode(e(this.args[n],"args["+n+"]",this));return new h(t,r)},h.prototype.clone=function(){return new h(this.fn,this.args.slice(0))};var d=h.prototype.toString;function y(t,r,n){for(var i,a="",o=new RegExp("\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)","ig"),s=0;null!==(i=o.exec(t));)if(a+=t.substring(s,i.index),s=i.index,"$$"===i[0])a+="$",s++;else{s+=i[0].length;var u=r[i[1]];if(!u)throw new ReferenceError("Template: Property "+i[1]+" does not exist.");if(void 0===i[2])switch(typeof u){case"string":a+=u;break;case"object":if(e.isNode(u))a+=u.toTex(n);else{if(!Array.isArray(u))throw new TypeError("Template: "+i[1]+" has to be a Node, String or array of Nodes");a+=u.map(function(t,r){if(e.isNode(t))return t.toTex(n);throw new TypeError("Template: "+i[1]+"["+r+"] is not a Node.")}).join(",")}break;default:throw new TypeError("Template: "+i[1]+" has to be a Node, String or array of Nodes")}else{if(!e.isNode(u[i[2]]&&u[i[2]]))throw new TypeError("Template: "+i[1]+"["+i[2]+"] is not a Node.");a+=u[i[2]].toTex(n)}}return a+=t.slice(s)}h.prototype.toString=function(e){var t,r=this.fn.toString(e);return e&&"object"==typeof e.handler&&a(e.handler,r)&&(t=e.handler[r](this,e)),void 0!==t?t:d.call(this,e)},h.prototype._toString=function(t){var r=this.args.map(function(e){return e.toString(t)});return(e.isFunctionAssignmentNode(this.fn)?"("+this.fn.toString(t)+")":this.fn.toString(t))+"("+r.join(", ")+")"},h.prototype.toJSON=function(){return{mathjs:"FunctionNode",fn:this.fn,args:this.args}},h.fromJSON=function(e){return new h(e.fn,e.args)},h.prototype.toHTML=function(e){var t=this.args.map(function(t){return t.toHTML(e)});return'<span class="math-function">'+i(this.fn)+'</span><span class="math-paranthesis math-round-parenthesis">(</span>'+t.join('<span class="math-separator">,</span>')+'<span class="math-paranthesis math-round-parenthesis">)</span>'};var g=h.prototype.toTex;return h.prototype.toTex=function(e){var t;return e&&"object"==typeof e.handler&&a(e.handler,this.name)&&(t=e.handler[this.name](this,e)),void 0!==t?t:g.call(this,e)},h.prototype._toTex=function(e){var t,r,i=this.args.map(function(t){return t.toTex(e)});switch(!l[this.name]||"function"!=typeof l[this.name].toTex&&"object"!=typeof l[this.name].toTex&&"string"!=typeof l[this.name].toTex||(t=l[this.name].toTex),typeof t){case"function":r=t(this,e);break;case"string":r=y(t,this,e);break;case"object":switch(typeof t[i.length]){case"function":r=t[i.length](this,e);break;case"string":r=y(t[i.length],this,e)}}return void 0!==r?r:y(n.defaultTemplate,this,e)},h.prototype.getIdentifier=function(){return this.type+":"+this.name},h}},function(e,t,r){"use strict";var n=r(5).clone,i=r(3).isInteger,a=r(2),o=r(53),s=r(10);function u(e,t,r,n){if(n<r){if(e.length!=t.length)throw new s(e.length,t.length);for(var i=[],a=0;a<e.length;a++)i[a]=u(e[a],t[a],r,n+1);return i}return e.concat(t)}t.name="concat",t.factory=function(e,t,c,f){var l=c(r(1)),p=f("concat",{"...Array | Matrix | number | BigNumber":function(t){var r,c,f=t.length,p=-1,m=!1,h=[];for(r=0;r<f;r++){var d=t[r];if(e.isMatrix(d)&&(m=!0),e.isNumber(d)||e.isBigNumber(d)){if(r!==f-1)throw new Error("Dimension must be specified as last argument");if(c=p,p=d.valueOf(),!i(p))throw new TypeError("Integer number expected for dimension");if(p<0||r>0&&p>c)throw new o(p,c+1)}else{var y=n(d).valueOf(),g=a.size(y);if(h[r]=y,c=p,p=g.length-1,r>0&&p!=c)throw new s(c+1,p+1)}}if(0==h.length)throw new SyntaxError("At least one matrix expected");for(var v=h.shift();h.length;)v=u(v,h.shift(),p,0);return m?l(v):v},"...string":function(e){return e.join("")}});return p.toTex=void 0,p}},function(e,t,r){"use strict";var n=r(49);e.exports=function(e){for(var t=0;t<e.length;t++)if(n(e[t]))return!0;return!1}},function(e,t,r){"use strict";var n=r(5).clone,i=r(9).format;t.name="transpose",t.factory=function(e,t,a,o){var s=r(4),u=a(r(1)),c=e.DenseMatrix,f=e.SparseMatrix,l=o("transpose",{Array:function(e){return l(u(e)).valueOf()},Matrix:function(e){var t,r=e.size();switch(r.length){case 1:t=e.clone();break;case 2:var n=r[0],a=r[1];if(0===a)throw new RangeError("Cannot transpose a 2D matrix with no columns (size: "+i(r)+")");switch(e.storage()){case"dense":t=p(e,n,a);break;case"sparse":t=m(e,n,a)}break;default:throw new RangeError("Matrix must be a vector or two dimensional (size: "+i(this._size)+")")}return t},any:function(e){return n(e)}}),p=function(e,t,r){for(var i,a=e._data,o=[],s=0;s<r;s++){i=o[s]=[];for(var u=0;u<t;u++)i[u]=n(a[u][s])}return new c({data:o,size:[r,t],datatype:e._datatype})},m=function(e,t,r){for(var i,a,o,s=e._values,u=e._index,c=e._ptr,l=s?[]:void 0,p=[],m=[],h=[],d=0;d<t;d++)h[d]=0;for(i=0,a=u.length;i<a;i++)h[u[i]]++;for(var y=0,g=0;g<t;g++)m.push(y),y+=h[g],h[g]=m[g];for(m.push(y),o=0;o<r;o++)for(var v=c[o],x=c[o+1],w=v;w<x;w++){var b=h[u[w]]++;p[b]=o,s&&(l[b]=n(s[w]))}return new f({values:l,index:p,ptr:m,size:[r,t],datatype:e._datatype})};return l.toTex={1:"\\left(${args[0]}\\right)"+s.operators.transpose},l}},function(e,t,r){"use strict";var n=r(437),i=r(10);t.name="algorithm06",t.factory=function(e,t,a,o){var s=a(r(8)),u=e.SparseMatrix;return function(e,t,r){var a=e._values,c=e._size,f=e._datatype,l=t._values,p=t._size,m=t._datatype;if(c.length!==p.length)throw new i(c.length,p.length);if(c[0]!==p[0]||c[1]!==p[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+p+")");var h,d=c[0],y=c[1],g=s,v=0,x=r;"string"==typeof f&&f===m&&(h=f,g=o.find(s,[h,h]),v=o.convert(0,h),x=o.find(r,[h,h]));for(var w=a&&l?[]:void 0,b=[],N=[],M=new u({values:w,index:b,ptr:N,size:[d,y],datatype:h}),E=w?[]:void 0,A=[],O=[],S=0;S<y;S++){N[S]=b.length;var _=S+1;if(n(e,S,A,E,O,_,M,x),n(t,S,A,E,O,_,M,x),E)for(var T=N[S];T<b.length;){var C=b[T];if(O[C]===_){var z=E[C];g(z,v)?b.splice(T,1):(w.push(z),T++)}else b.splice(T,1)}else for(var B=N[S];B<b.length;)O[b[B]]!==_?b.splice(B,1):B++}return N[y]=b.length,M}}},function(e,t,r){"use strict";var n=r(0);t.name="factorial",t.factory=function(e,t,i,a){var o=i(r(139)),s=r(4),u=a("factorial",{number:function(e){if(e<0)throw new Error("Value must be non-negative");return o(e+1)},BigNumber:function(e){if(e.isNegative())throw new Error("Value must be non-negative");return o(e.plus(1))},"Array | Matrix":function(e){return n(e,u)}});return u.toTex={1:"\\left(${args[0]}\\right)"+s.operators.factorial},u}},function(e,t,r){"use strict";var n=r(3).isInteger;function i(e){return e.isInteger()&&e.gte(0)}t.name="combinations",t.factory=function(e,t,r,a){var o=a("combinations",{"number, number":function(e,t){var r,i,a;if(!n(e)||e<0)throw new TypeError("Positive integer value expected in function combinations");if(!n(t)||t<0)throw new TypeError("Positive integer value expected in function combinations");if(t>e)throw new TypeError("k must be less than or equal to n");for(r=Math.max(t,e-t),i=1,a=1;a<=e-r;a++)i=i*(r+a)/a;return i},"BigNumber, BigNumber":function(t,r){var n,a,o,s,u=new e.BigNumber(1);if(!i(t)||!i(r))throw new TypeError("Positive integer value expected in function combinations");if(r.gt(t))throw new TypeError("k must be less than n in function combinations");for(n=t.minus(r),r.lt(n)&&(n=r),a=u,o=u,s=t.minus(n);o.lte(s);o=o.plus(1))a=a.times(n.plus(o)).dividedBy(o);return a}});return o.toTex={2:"\\binom{${args[0]}}{${args[1]}}"},o}},function(e,t){e.exports=function(e){return e&&e.constructor.prototype.isBigNumber||!1}},function(e,t,r){"use strict";var n=r(24).string.isString;t.name="Matrix",t.path="type",t.factory=function(e,t,r,i){function a(){if(!(this instanceof a))throw new SyntaxError("Constructor must be called with the new operator")}return a.prototype.type="Matrix",a.prototype.isMatrix=!0,a.storage=function(e){if(!n(e))throw new TypeError("format must be a string value");var t=a._storage[e];if(!t)throw new SyntaxError("Unsupported matrix storage format: "+e);return t},a._storage={},a.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},a.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},a.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},a.prototype.subset=function(e,t,r){throw new Error("Cannot invoke subset on a Matrix interface")},a.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},a.prototype.set=function(e,t,r){throw new Error("Cannot invoke set on a Matrix interface")},a.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},a.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},a.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},a.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},a.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},a.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},a.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},a.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},a.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},a.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},a}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm04",t.factory=function(e,t,i,a){var o=i(r(8)),s=e.SparseMatrix;return function(e,t,r){var i=e._values,u=e._index,c=e._ptr,f=e._size,l=e._datatype,p=t._values,m=t._index,h=t._ptr,d=t._size,y=t._datatype;if(f.length!==d.length)throw new n(f.length,d.length);if(f[0]!==d[0]||f[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+f+") must match Matrix B ("+d+")");var g,v=f[0],x=f[1],w=o,b=0,N=r;"string"==typeof l&&l===y&&(g=l,w=a.find(o,[g,g]),b=a.convert(0,g),N=a.find(r,[g,g]));var M,E,A,O,S,_=i&&p?[]:void 0,T=[],C=[],z=new s({values:_,index:T,ptr:C,size:[v,x],datatype:g}),B=i&&p?[]:void 0,I=i&&p?[]:void 0,P=[],R=[];for(E=0;E<x;E++){C[E]=T.length;var U=E+1;for(O=c[E],S=c[E+1],A=O;A<S;A++)M=u[A],T.push(M),P[M]=U,B&&(B[M]=i[A]);for(O=h[E],S=h[E+1],A=O;A<S;A++)if(P[M=m[A]]===U){if(B){var k=N(B[M],p[A]);w(k,b)?P[M]=null:B[M]=k}}else T.push(M),R[M]=U,I&&(I[M]=p[A]);if(B&&I)for(A=C[E];A<T.length;)P[M=T[A]]===U?(_[A]=B[M],A++):R[M]===U?(_[A]=I[M],A++):T.splice(A,1)}return C[x]=T.length,z}}},function(e,t,r){"use strict";var n=r(0);t.name="number",t.factory=function(e,t,r,i){var a=i("number",{"":function(){return 0},number:function(e){return e},string:function(e){var t=Number(e);if(isNaN(t))throw new SyntaxError('String "'+e+'" is no valid number');return t},BigNumber:function(e){return e.toNumber()},Fraction:function(e){return e.valueOf()},Unit:function(e){throw new Error("Second argument with valueless unit expected")},null:function(e){return 0},"Unit, string | Unit":function(e,t){return e.toNumber(t)},"Array | Matrix":function(e){return n(e,a)}});return a.toTex={0:"0",1:"\\left(${args[0]}\\right)",2:"\\left(\\left(${args[0]}\\right)${args[1]}\\right)"},a}},function(e,t,r){"use strict";var n=r(2).map,i=r(9).escape;t.name="IndexNode",t.path="expression.node",t.factory=function(e,t,a,o){var s=a(r(14)),u=a(r(90)),c=Array.isArray;function f(t,r){if(!(this instanceof f))throw new SyntaxError("Constructor must be called with the new operator");if(this.dimensions=t,this.dotNotation=r||!1,!c(t)||!t.every(e.isNode))throw new TypeError('Array containing Nodes expected for parameter "dimensions"');if(this.dotNotation&&!this.isObjectProperty())throw new Error("dotNotation only applicable for object properties");var n=function(){throw new Error("Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead")};Object.defineProperty(this,"object",{get:n,set:n})}function l(t,r,n){return new u(e.isBigNumber(t)?t.toNumber():t,e.isBigNumber(r)?r.toNumber():r,e.isBigNumber(n)?n.toNumber():n)}return f.prototype=new s,f.prototype.type="IndexNode",f.prototype.isIndexNode=!0,f.prototype._compile=function(t,r){var i=n(this.dimensions,function(n,i){if(e.isRangeNode(n)){if(n.needsEnd()){(u=Object.create(r)).end=!0;var a=n.start._compile(t,u),o=n.end._compile(t,u),s=n.step?n.step._compile(t,u):function(){return 1};return function(e,r,n){var u=t.size(n).valueOf(),c=Object.create(r);return c.end=u[i],l(a(e,c,n),o(e,c,n),s(e,c,n))}}return a=n.start._compile(t,r),o=n.end._compile(t,r),s=n.step?n.step._compile(t,r):function(){return 1},function(e,t,r){return l(a(e,t,r),o(e,t,r),s(e,t,r))}}if(e.isSymbolNode(n)&&"end"===n.name){var u;(u=Object.create(r)).end=!0;var c=n._compile(t,u);return function(e,r,n){var a=t.size(n).valueOf(),o=Object.create(r);return o.end=a[i],c(e,o,n)}}return c=n._compile(t,r),function(e,t,r){return c(e,t,r)}});return function(e,r,a){var o=n(i,function(t){return t(e,r,a)});return t.index.apply(t,o)}},f.prototype.forEach=function(e){for(var t=0;t<this.dimensions.length;t++)e(this.dimensions[t],"dimensions["+t+"]",this)},f.prototype.map=function(e){for(var t=[],r=0;r<this.dimensions.length;r++)t[r]=this._ifNode(e(this.dimensions[r],"dimensions["+r+"]",this));return new f(t)},f.prototype.clone=function(){return new f(this.dimensions.slice(0))},f.prototype.isObjectProperty=function(){return 1===this.dimensions.length&&e.isConstantNode(this.dimensions[0])&&"string"==typeof this.dimensions[0].value},f.prototype.getObjectProperty=function(){return this.isObjectProperty()?this.dimensions[0].value:null},f.prototype._toString=function(e){return this.dotNotation?"."+this.getObjectProperty():"["+this.dimensions.join(", ")+"]"},f.prototype.toJSON=function(){return{mathjs:"IndexNode",dimensions:this.dimensions,dotNotation:this.dotNotation}},f.fromJSON=function(e){return new f(e.dimensions,e.dotNotation)},f.prototype.toHTML=function(e){for(var t=[],r=0;r<this.dimensions.length;r++)t[r]=this.dimensions[r].toHTML();return this.dotNotation?'<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">'+i(this.getObjectProperty())+"</span>":'<span class="math-parenthesis math-square-parenthesis">[</span>'+t.join('<span class="math-separator">,</span>')+'<span class="math-parenthesis math-square-parenthesis">]</span>'},f.prototype._toTex=function(e){var t=this.dimensions.map(function(t){return t.toTex(e)});return this.dotNotation?"."+this.getObjectProperty():"_{"+t.join(",")+"}"},f}},function(e,t){t.factory=function(e,t,r,n){return function(t,r,n){var i=t.filter(function(t){return e.isSymbolNode(t)&&!(t.name in r)&&!(t.name in n)})[0];if(!i)throw new Error('No undefined variable found in inline expression "'+t+'"');var a=i.name,o=Object.create(n),s=t.compile();return function(e){return o[a]=e,s.eval(o)}}}},function(e,t,r){"use strict";var n=r(2).size,i=r(61),a=r(53);function o(e,t,r){var n,i,a,s;if(t<=0){if(Array.isArray(e[0])){for(s=function(e){var t,r,n=e.length,i=e[0].length,a=[];for(r=0;r<i;r++){var o=[];for(t=0;t<n;t++)o.push(e[t][r]);a.push(o)}return a}(e),i=[],n=0;n<s.length;n++)i[n]=o(s[n],t-1,r);return i}for(a=e[0],n=1;n<e.length;n++)a=r(a,e[n]);return a}for(i=[],n=0;n<e.length;n++)i[n]=o(e[n],t-1,r);return i}e.exports=function(e,t,r){var s=Array.isArray(e)?n(e):e.size();if(t<0||t>=s.length)throw new a(t,s.length);return i(e)?e.create(o(e.valueOf(),t,r)):o(e,t,r)}},function(e,t,r){"use strict";t.math=!0,t.name="simplify",t.factory=function(e,t,n,i,a){var o=n(r(40)),s=n(r(46)),u=n(r(56)),c=n(r(65)),f=n(r(57)),l=n(r(64)),p=n(r(48)),m=(n(r(14)),n(r(119))),h=n(r(121)),d=n(r(408)),y=n(r(120)),g=y.isCommutative,v=y.isAssociative,x=y.flatten,w=y.unflattenr,b=y.unflattenl,N=y.createMakeNodeFunction,M=i("simplify",{string:function(e){return M(o(e),M.rules,{})},"string, Object":function(e,t){return M(o(e),M.rules,t)},"string, Array":function(e,t){return M(o(e),t,{})},"string, Array, Object":function(e,t,r){return M(o(e),t,r)},"Node, Object":function(e,t){return M(e,M.rules,t)},Node:function(e){return M(e,M.rules,{})},"Node, Array":function(e,t){return M(e,t,{})},"Node, Array, Object":function(e,t,r){t=function(e){for(var t=[],r=0;r<e.length;r++){var n,i=e[r],a=typeof i;switch(a){case"string":var s=i.split("->");if(2!==s.length)throw SyntaxError("Could not parse rule: "+i);i={l:s[0],r:s[1]};case"object":if(n={l:E(o(i.l)),r:E(o(i.r))},i.context&&(n.evaluate=i.context),i.evaluate&&(n.evaluate=o(i.evaluate)),v(n.l)){var u=N(n.l),c=new p("_p"+O++);n.expanded={},n.expanded.l=u([n.l.clone(),c]),x(n.expanded.l),w(n.expanded.l),n.expanded.r=u([n.r,c])}break;case"function":n=i;break;default:throw TypeError("Unsupported type of rule: "+a)}t.push(n)}return t}(t);for(var n,i={},a=(n=E(n=d(e,r))).toString({parenthesis:"all"});!i[a];){i[a]=!0,O=0;for(var s=0;s<t.length;s++)"function"==typeof t[s]?n=t[s](n):(x(n),n=S(n,t[s])),b(n);a=n.toString({parenthesis:"all"})}return n}});function E(t){return t.transform(function(t,r,n){return e.isParenthesisNode(t)?t.content:t})}M.simplifyCore=h,M.resolve=d;var A={true:!0,false:!0,e:!0,i:!0,Infinity:!0,LN2:!0,LN10:!0,LOG2E:!0,LOG10E:!0,NaN:!0,phi:!0,pi:!0,SQRT1_2:!0,SQRT2:!0,tau:!0};M.rules=[h,{l:"log(e)",r:"1"},{l:"n-n1",r:"n+-n1"},{l:"-(c*v)",r:"(-c) * v"},{l:"-v",r:"(-1) * v"},{l:"n/n1^n2",r:"n*n1^-n2"},{l:"n/n1",r:"n*n1^-1"},{l:"(n ^ n1) ^ n2",r:"n ^ (n1 * n2)"},{l:"n*n",r:"n^2"},{l:"n * n^n1",r:"n^(n1+1)"},{l:"n^n1 * n^n2",r:"n^(n1+n2)"},{l:"n+n",r:"2*n"},{l:"n+-n",r:"0"},{l:"n1*n2 + n2",r:"(n1+1)*n2"},{l:"n1*n3 + n2*n3",r:"(n1+n2)*n3"},{l:"n1 + -1 * (n2 + n3)",r:"n1 + -1 * n2 + -1 * n3"},m,{l:"(-n)*n1",r:"-(n*n1)"},{l:"c+v",r:"v+c",context:{add:{commutative:!1}}},{l:"v*c",r:"c*v",context:{multiply:{commutative:!1}}},{l:"n+-n1",r:"n-n1"},{l:"n*(n1^-1)",r:"n/n1"},{l:"n*n1^-n2",r:"n/n1^n2"},{l:"n1^-1",r:"1/n1"},{l:"n*(n1/n2)",r:"(n*n1)/n2"},{l:"n-(n1+n2)",r:"n-n1-n2"},{l:"1*n",r:"n"}];var O=0,S=i("applyRule",{"Node, Object":function(e,t){var r=e;if(r instanceof f||r instanceof c){if(r.args)for(var n=0;n<r.args.length;n++)r.args[n]=S(r.args[n],t)}else r instanceof l&&r.content&&(r.content=S(r.content,t));var i=t.r,a=C(t.l,r)[0];if(!a&&t.expanded&&(i=t.expanded.r,a=C(t.expanded.l,r)[0]),a){r=i.clone();var o=function(e){return e.isSymbolNode&&a.placeholders.hasOwnProperty(e.name)?a.placeholders[e.name].clone():e.map(o)};r=o(r)}return r}});function _(e,t){var r={placeholders:{}};if(!e.placeholders&&!t.placeholders)return r;if(!e.placeholders)return t;if(!t.placeholders)return e;for(var n in e.placeholders)if(r.placeholders[n]=e.placeholders[n],t.placeholders.hasOwnProperty(n)&&!z(e.placeholders[n],t.placeholders[n]))return null;for(var n in t.placeholders)r.placeholders[n]=t.placeholders[n];return r}function T(e,t){var r,n=[];if(0===e.length||0===t.length)return n;for(var i=0;i<e.length;i++)for(var a=0;a<t.length;a++)(r=_(e[i],t[a]))&&n.push(r);return n}function C(t,r,n){var i=[{placeholders:{}}];if(t instanceof f&&r instanceof f||t instanceof c&&r instanceof c){if(t instanceof f){if(t.op!==r.op||t.fn!==r.fn)return[]}else if(t instanceof c&&t.name!==r.name)return[];if((1!==r.args.length||1!==t.args.length)&&v(r)&&!n){if(r.args.length>=2&&2===t.args.length){var o=function(e,t){var r,n,i=[],a=N(e);if(g(e,t))for(var o=0;o<e.args.length;o++)(n=e.args.slice(0)).splice(o,1),r=1===n.length?n[0]:a(n),i.push(a([e.args[o],r]));else r=1===(n=e.args.slice(1)).length?n[0]:a(n),i.push(a([e.args[0],r]));return i}(r,t.context),l=[];for(d=0;d<o.length;d++){var m=C(t,o[d],!0);l=l.concat(m)}return l}if(t.args.length>2)throw Error("Unexpected non-binary associative function: "+t.toString());return[]}for(var h=[],d=0;d<t.args.length;d++){var y=C(t.args[d],r.args[d]);if(0===y.length)return[];h.push(y)}i=function(e){if(0===e.length)return e;for(var t=e.reduce(T),r=[],n={},i=0;i<t.length;i++){var a=JSON.stringify(t[i]);n[a]||(n[a]=!0,r.push(t[i]))}return r}(h)}else if(t instanceof p){if(0===t.name.length)throw new Error("Symbol in rule has 0 length...!?");if(a.hasOwnProperty(t.name)){if(!A[t.name])throw new Error("Built in constant: "+t.name+" is not supported by simplify.");if(t.name!==r.name)return[]}else if("n"===t.name[0]||"_p"===t.name.substring(0,2))i[0].placeholders[t.name]=r;else if("v"===t.name[0]){if(e.isConstantNode(r))return[];i[0].placeholders[t.name]=r}else{if("c"!==t.name[0])throw new Error("Invalid symbol in rule: "+t.name);if(!(r instanceof u))return[];i[0].placeholders[t.name]=r}}else{if(!(t instanceof u))return[];if(!s(t.value,r.value))return[]}return i}function z(e,t){if(e instanceof u&&t instanceof u){if(!s(e.value,t.value))return!1}else if(e instanceof p&&t instanceof p){if(e.name!==t.name)return!1}else{if(!(e instanceof f&&t instanceof f||e instanceof c&&t instanceof c))return!1;if(e instanceof f){if(e.op!==t.op||e.fn!==t.fn)return!1}else if(e instanceof c&&e.name!==t.name)return!1;if(e.args.length!==t.args.length)return!1;for(var r=0;r<e.args.length;r++)if(!z(e.args[r],t.args[r]))return!1}return!0}return M}},function(e,t,r){"use strict";t.name="cs_flip",t.path="sparse",t.factory=function(){return function(e){return-e-2}}},function(e,t,r){"use strict";var n=r(24),i=n.string,a=n.array,o=Array.isArray;t.factory=function(e){var t=e.DenseMatrix;return function(r,n,s){var u=r.size();if(2!==u.length)throw new RangeError("Matrix must be two dimensional (size: "+i.format(u)+")");var c,f,l,p=u[0];if(p!==u[1])throw new RangeError("Matrix must be square (size: "+i.format(u)+")");if(e.isMatrix(n)){var m=n.size();if(1===m.length){if(m[0]!==p)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(c=[],l=n._data,f=0;f<p;f++)c[f]=[l[f]];return new t({data:c,size:[p,1],datatype:n._datatype})}if(2===m.length){if(m[0]!==p||1!==m[1])throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");if(e.isDenseMatrix(n)){if(s){for(c=[],l=n._data,f=0;f<p;f++)c[f]=[l[f][0]];return new t({data:c,size:[p,1],datatype:n._datatype})}return n}for(c=[],f=0;f<p;f++)c[f]=[0];for(var h=n._values,d=n._index,y=n._ptr,g=y[1],v=y[0];v<g;v++)c[f=d[v]][0]=h[v];return new t({data:c,size:[p,1],datatype:n._datatype})}throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")}if(o(n)){var x=a.size(n);if(1===x.length){if(x[0]!==p)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(c=[],f=0;f<p;f++)c[f]=[n[f]];return new t({data:c,size:[p,1]})}if(2===x.length){if(x[0]!==p||1!==x[1])throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(c=[],f=0;f<p;f++)c[f]=[n[f][0]];return new t({data:c,size:[p,1]})}throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")}}}},function(e,t,r){var n=r(83);function i(e){for(var t=e.d,r=t[0]+"",n=1;n<t.length;++n){for(var i=t[n]+"",a=7-i.length;a--;)i="0"+i;r+=i}for(l=r.length-1;"0"==r.charAt(l);--l);var o=e.e,s=r.slice(0,l+1||1),u=s.length;if(o>0)if(++o>u)for(o-=u;o--;s+="0");else o<u&&(s=s.slice(0,o)+"."+s.slice(o));var c=[0];for(n=0;n<s.length;){for(var f=c.length;f--;c[f]*=10);c[0]+=s.charAt(n++)<<0;for(var l=0;l<c.length;++l)c[l]>1&&(null==c[l+1]&&(c[l+1]=0),c[l+1]+=c[l]>>1,c[l]&=1)}return c.reverse()}e.exports=function(e,t,r){var a,o,s,u,c,f=e.constructor,l=+(e.s<0),p=+(t.s<0);if(l){a=i(n(e));for(var m=0;m<a.length;++m)a[m]^=1}else a=i(e);if(p){o=i(n(t));for(m=0;m<o.length;++m)o[m]^=1}else o=i(t);a.length<=o.length?(s=a,u=o,c=l):(s=o,u=a,c=p);var h=s.length,d=u.length,y=1^r(l,p),g=new f(1^y),v=new f(1),x=new f(2),w=f.precision;for(f.config({precision:1e9});h>0;)r(s[--h],u[--d])==y&&(g=g.plus(v)),v=v.times(x);for(;d>0;)r(c,u[--d])==y&&(g=g.plus(v)),v=v.times(x);return f.config({precision:w}),0==y&&(g.s=-g.s),g}},function(e,t){e.exports=function(e){if(e.isFinite()&&!e.isInteger())throw new Error("Integer expected in function bitNot");var t=e.constructor,r=t.precision;return t.config({precision:1e9}),(e=e.plus(new t(1))).s=-e.s||null,t.config({precision:r}),e}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm08",t.factory=function(e,t,i,a){var o=i(r(8)),s=e.SparseMatrix;return function(e,t,r){var i=e._values,u=e._index,c=e._ptr,f=e._size,l=e._datatype,p=t._values,m=t._index,h=t._ptr,d=t._size,y=t._datatype;if(f.length!==d.length)throw new n(f.length,d.length);if(f[0]!==d[0]||f[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+f+") must match Matrix B ("+d+")");if(!i||!p)throw new Error("Cannot perform operation on Pattern Sparse Matrices");var g,v=f[0],x=f[1],w=o,b=0,N=r;"string"==typeof l&&l===y&&(g=l,w=a.find(o,[g,g]),b=a.convert(0,g),N=a.find(r,[g,g]));for(var M,E,A,O,S=[],_=[],T=[],C=new s({values:S,index:_,ptr:T,size:[v,x],datatype:g}),z=[],B=[],I=0;I<x;I++){T[I]=_.length;var P=I+1;for(E=c[I],A=c[I+1],M=E;M<A;M++)B[O=u[M]]=P,z[O]=i[M],_.push(O);for(E=h[I],A=h[I+1],M=E;M<A;M++)B[O=m[M]]===P&&(z[O]=N(z[O],p[M]));for(M=T[I];M<_.length;){var R=z[O=_[M]];w(R,b)?_.splice(M,1):(S.push(R),M++)}}return T[x]=_.length,C}}},function(e,t,r){"use strict";var n=r(3).isInteger;t.name="partitionSelect",t.factory=function(e,t,i,a){var o=i(r(52));function s(e,t){return-o(e,t)}return a("partitionSelect",{"Array | Matrix, number":function(e,t){return u(e,t,o)},"Array | Matrix, number, string":function(e,t,r){if("asc"===r)return u(e,t,o);if("desc"===r)return u(e,t,s);throw new Error('Compare string must be "asc" or "desc"')},"Array | Matrix, number, function":u});function u(t,r,i){if(!n(r)||r<0)throw new Error("k must be a non-negative integer");if(e.isMatrix(t)){if(t.size().length>1)throw new Error("Only one dimensional matrices supported");return c(t.valueOf(),r,i)}if(Array.isArray(t))return c(t,r,i)}function c(e,t,r){if(t>=e.length)throw new Error("k out of bounds");for(var n=0,i=e.length-1;n<i;){for(var a=n,o=i,s=e[Math.floor(Math.random()*(i-n+1))+n];a<o;)if(r(e[a],s)>=0){var u=e[o];e[o]=e[a],e[a]=u,--o}else++a;r(e[a],s)>0&&--a,t<=a?i=a:n=a+1}return e[t]}}},function(e,t,r){"use strict";var n=r(44),i=r(49),a=r(3).isNumber;t.name="distribution",t.factory=function(e,t,o,s,u){var c=o(r(1)),f=r(2),l=o(r(492));function p(t){if(!m.hasOwnProperty(t))throw new Error("Unknown distribution "+t);var r,o,u,p,h,d,y=Array.prototype.slice.call(arguments,1),g=m[t].apply(this,y);return r=g,o={random:function(t,r,o){var s,u,f;if(arguments.length>3)throw new n("random",arguments.length,0,3);if(1===arguments.length?i(t)?s=t:f=t:2===arguments.length?i(t)?(s=t,f=r):(u=t,f=r):(s=t,u=r,f=o),void 0!==u&&!a(u)||void 0!==f&&!a(f))throw new TypeError("Invalid argument in function random");if(void 0===f&&(f=1),void 0===u&&(u=0),void 0!==s){var l=d(s.valueOf(),u,f,p);return e.isMatrix(s)?c(l):l}return p(u,f)},randomInt:s({"number | Array":function(t){if(i(t)){var r=t,n=1,a=d(r.valueOf(),0,n,h);return e.isMatrix(r)?c(a):a}return h(0,n=t)},"number | Array, number":function(t,r){if(i(t)){var n=t,a=r,o=0,s=d(n.valueOf(),o,a,h);return e.isMatrix(n)?c(s):s}return h(o=t,a=r)},"Array, number, number":function(e,t,r){var n=d(e.valueOf(),t,r,h);return e&&!0===e.isMatrix?c(n):n}}),pickRandom:s({Array:function(e){return u(e)},"Array, number | Array":function(e,t){var r,n;if(Array.isArray(t))n=t;else{if(!a(t))throw new TypeError("Invalid argument in function pickRandom");r=t}return u(e,r,n)},"Array, number | Array, Array | number":function(e,t,r){var n,i;if(Array.isArray(t)?(i=t,n=r):(i=r,n=t),!Array.isArray(i)||!a(n))throw new TypeError("Invalid argument in function pickRandom");return u(e,n,i)}})},u=function(t,r,n){var i=void 0===r;if(i&&(r=1),e.isMatrix(t))t=t.valueOf();else if(!Array.isArray(t))throw new TypeError("Unsupported type of value in function pickRandom");if(f.size(t).length>1)throw new Error("Only one dimensional vectors supported");if(void 0!==n){if(n.length!=t.length)throw new Error("Weights must have the same length as possibles");for(var o=0,s=0,u=n.length;s<u;s++){if(!a(n[s])||n[s]<0)throw new Error("Weights must be an array of positive numbers");o+=n[s]}}var c=t.length;if(0==c)return[];if(r>=c)return r>1?t:t[0];for(var p,m=[];m.length<r;){if(void 0===n)p=t[Math.floor(l()*c)];else{var h=l()*o;for(s=0,u=t.length;s<u;s++)if((h-=n[s])<0){p=t[s];break}}-1==m.indexOf(p)&&m.push(p)}return i?m[0]:m},p=function(e,t){return e+r()*(t-e)},h=function(e,t){return Math.floor(e+r()*(t-e))},d=function(e,t,r,n){var i=[];if((e=e.slice(0)).length>1)for(var a=0,o=e.shift();a<o;a++)i.push(d(e,t,r,n));else for(a=0,o=e.shift();a<o;a++)i.push(n(t,r));return i},o}var m={uniform:function(){return l},normal:function(){return function(){for(var e,t,r=-1;r<0||r>1;)e=l(),t=l(),r=1/6*Math.pow(-2*Math.log(e),.5)*Math.cos(2*Math.PI*t)+.5;return r}}};return p.toTex=void 0,p}},function(e,t,r){var n=r(154);t.mixin=function(e){var t=new n;return e.on=t.on.bind(t),e.off=t.off.bind(t),e.once=t.once.bind(t),e.emit=t.emit.bind(t),e}},function(e,t,r){var n=r(169),i=r(3).format,a=r(3).isNumber;t.name="Complex",t.path="type",t.factory=function(e,t,r,o,s){return n.prototype.type="Complex",n.prototype.isComplex=!0,n.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},n.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},n.prototype.format=function(e){var t=this.im,r=this.re,n=i(this.re,e),o=i(this.im,e),s=a(e)?e:e?e.precision:null;if(null!==s){var u=Math.pow(10,-s);Math.abs(r/t)<u&&(r=0),Math.abs(t/r)<u&&(t=0)}return 0==t?n:0==r?1==t?"i":-1==t?"-i":o+"i":t<0?-1==t?n+" - i":n+" - "+o.substring(1)+"i":1==t?n+" + i":n+" + "+o+"i"},n.fromPolar=function(t){switch(arguments.length){case 1:var r=arguments[0];if("object"==typeof r)return n(r);throw new TypeError("Input has to be an object with r and phi keys.");case 2:var i=arguments[0],o=arguments[1];if(a(i)){if(e.isUnit(o)&&o.hasBase("ANGLE")&&(o=o.toNumber("rad")),a(o))return new n({r:i,phi:o});throw new TypeError("Phi is not a number nor an angle unit.")}throw new TypeError("Radius r is not a number.");default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},n.prototype.valueOf=n.prototype.toString,n.fromJSON=function(e){return new n(e)},n.EPSILON=t.epsilon,s.on("config",function(e,t){e.epsilon!==t.epsilon&&(n.EPSILON=e.epsilon)}),n.compare=function(e,t){return e.re>t.re?1:e.re<t.re?-1:e.im>t.im?1:e.im<t.im?-1:0},n},t.math=!0},function(e,t,r){"use strict";var n=r(0);t.name="fraction",t.factory=function(e,t,r,i){var a=i("fraction",{number:function(t){if(!isFinite(t)||isNaN(t))throw new Error(t+" cannot be represented as a fraction");return new e.Fraction(t)},string:function(t){return new e.Fraction(t)},"number, number":function(t,r){return new e.Fraction(t,r)},null:function(t){return new e.Fraction(0)},BigNumber:function(t){return new e.Fraction(t.toString())},Fraction:function(e){return e},Object:function(t){return new e.Fraction(t)},"Array | Matrix":function(e){return n(e,a)}});return a}},function(e,t,r){"use strict";var n=r(3);t.name="Range",t.path="type",t.factory=function(e,t,r,i){function a(t,r,n){if(!(this instanceof a))throw new SyntaxError("Constructor must be called with the new operator");if(null!=t)if(e.isBigNumber(t))t=t.toNumber();else if("number"!=typeof t)throw new TypeError("Parameter start must be a number");if(null!=r)if(e.isBigNumber(r))r=r.toNumber();else if("number"!=typeof r)throw new TypeError("Parameter end must be a number");if(null!=n)if(e.isBigNumber(n))n=n.toNumber();else if("number"!=typeof n)throw new TypeError("Parameter step must be a number");this.start=null!=t?parseFloat(t):0,this.end=null!=r?parseFloat(r):0,this.step=null!=n?parseFloat(n):1}return a.prototype.type="Range",a.prototype.isRange=!0,a.parse=function(e){if("string"!=typeof e)return null;var t=e.split(":").map(function(e){return parseFloat(e)});if(t.some(function(e){return isNaN(e)}))return null;switch(t.length){case 2:return new a(t[0],t[1]);case 3:return new a(t[0],t[2],t[1]);default:return null}},a.prototype.clone=function(){return new a(this.start,this.end,this.step)},a.prototype.size=function(){var e=0,t=this.start,r=this.step,i=this.end-t;return n.sign(r)==n.sign(i)?e=Math.ceil(i/r):0==i&&(e=0),isNaN(e)&&(e=0),[e]},a.prototype.min=function(){var e=this.size()[0];return e>0?this.step>0?this.start:this.start+(e-1)*this.step:void 0},a.prototype.max=function(){var e=this.size()[0];return e>0?this.step>0?this.start+(e-1)*this.step:this.start:void 0},a.prototype.forEach=function(e){var t=this.start,r=this.step,n=this.end,i=0;if(r>0)for(;t<n;)e(t,[i],this),t+=r,i++;else if(r<0)for(;t>n;)e(t,[i],this),t+=r,i++},a.prototype.map=function(e){var t=[];return this.forEach(function(r,n,i){t[n[0]]=e(r,n,i)}),t},a.prototype.toArray=function(){var e=[];return this.forEach(function(t,r){e[r[0]]=t}),e},a.prototype.valueOf=function(){return this.toArray()},a.prototype.format=function(e){var t=n.format(this.start,e);return 1!=this.step&&(t+=":"+n.format(this.step,e)),t+=":"+n.format(this.end,e)},a.prototype.toString=function(){return this.format()},a.prototype.toJSON=function(){return{mathjs:"Range",start:this.start,end:this.end,step:this.step}},a.fromJSON=function(e){return new a(e.start,e.end,e.step)},a}},function(e,t,r){"use strict";t.name="ResultSet",t.path="type",t.factory=function(e,t,r,n){function i(e){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");this.entries=e||[]}return i.prototype.type="ResultSet",i.prototype.isResultSet=!0,i.prototype.valueOf=function(){return this.entries},i.prototype.toString=function(){return"["+this.entries.join(", ")+"]"},i.prototype.toJSON=function(){return{mathjs:"ResultSet",entries:this.entries}},i.fromJSON=function(e){return new i(e.entries)},i}},function(e,t,r){var n=r(30).memoize;function i(e){return e[0].precision}t.e=n(function(e){return new e(1).exp()},i),t.phi=n(function(e){return new e(1).plus(new e(5).sqrt()).div(2)},i),t.pi=n(function(e){return e.acos(-1)},i),t.tau=n(function(e){return t.pi(e).times(2)},i)},function(e,t,r){"use strict";var n=r(0);t.name="fix",t.factory=function(e,t,r,i){var a=i("fix",{number:function(e){return e>0?Math.floor(e):Math.ceil(e)},Complex:function(t){return new e.Complex(t.re>0?Math.floor(t.re):Math.ceil(t.re),t.im>0?Math.floor(t.im):Math.ceil(t.im))},BigNumber:function(e){return e.isNegative()?e.ceil():e.floor()},Fraction:function(e){return e.s<0?e.ceil():e.floor()},"Array | Matrix":function(e){return n(e,a,!0)}});return a.toTex={1:"\\mathrm{${name}}\\left(${args[0]}\\right)"},a}},function(e,t,r){"use strict";var n=r(3).isInteger,i=r(3).toFixed,a=r(0),o="Number of decimals in function round must be an integer";t.name="round",t.factory=function(e,t,s,u){var c=s(r(1)),f=s(r(8)),l=s(r(39)),p=s(r(20)),m=s(r(18)),h=s(r(6)),d=u("round",{number:Math.round,"number, number":function(e,t){if(!n(t))throw new TypeError(o);if(t<0||t>15)throw new Error("Number of decimals in function round must be in te range of 0-15");return parseFloat(i(e,t))},Complex:function(e){return e.round()},"Complex, number":function(e,t){if(t%1)throw new TypeError(o);return e.round(t)},"Complex, BigNumber":function(e,t){if(!t.isInteger())throw new TypeError(o);var r=t.toNumber();return e.round(r)},"number, BigNumber":function(t,r){if(!r.isInteger())throw new TypeError(o);return new e.BigNumber(t).toDecimalPlaces(r.toNumber())},BigNumber:function(e){return e.toDecimalPlaces(0)},"BigNumber, BigNumber":function(e,t){if(!t.isInteger())throw new TypeError(o);return e.toDecimalPlaces(t.toNumber())},Fraction:function(e){return e.round()},"Fraction, number":function(e,t){if(t%1)throw new TypeError(o);return e.round(t)},"Array | Matrix":function(e){return a(e,d,!0)},"SparseMatrix, number | BigNumber":function(e,t){return p(e,t,d,!1)},"DenseMatrix, number | BigNumber":function(e,t){return h(e,t,d,!1)},"number | Complex | BigNumber, SparseMatrix":function(e,t){return f(e,0)?l(t.size(),t.storage()):m(t,e,d,!0)},"number | Complex | BigNumber, DenseMatrix":function(e,t){return f(e,0)?l(t.size(),t.storage()):h(t,e,d,!0)},"Array, number | BigNumber":function(e,t){return h(c(e),t,d,!1).valueOf()},"number | Complex | BigNumber, Array":function(e,t){return h(c(t),e,d,!0).valueOf()}});return d.toTex={1:"\\left\\lfloor${args[0]}\\right\\rceil",2:void 0},d}},function(e,t,r){"use strict";var n=r(9);t.name="format",t.factory=function(e,t,r,i){var a=i("format",{any:n.format,"any, Object | function | number":n.format});return a.toTex=void 0,a}},function(e,t,r){t.name="docs",t.path="expression",t.factory=function(e,t,n,i){var a={};return a.bignumber=r(194),a.boolean=r(195),a.complex=r(196),a.createUnit=r(197),a.fraction=r(198),a.index=r(199),a.matrix=r(200),a.number=r(201),a.sparse=r(202),a.splitUnit=r(203),a.string=r(204),a.unit=r(205),a.e=r(97),a.E=r(97),a.false=r(206),a.i=r(207),a[1/0]=r(208),a.LN2=r(209),a.LN10=r(210),a.LOG2E=r(211),a.LOG10E=r(212),a.NaN=r(213),a.null=r(214),a.pi=r(98),a.PI=r(98),a.phi=r(215),a.SQRT1_2=r(216),a.SQRT2=r(217),a.tau=r(218),a.true=r(219),a.version=r(220),a.speedOfLight={description:"Speed of light in vacuum",examples:["speedOfLight"]},a.gravitationConstant={description:"Newtonian constant of gravitation",examples:["gravitationConstant"]},a.planckConstant={description:"Planck constant",examples:["planckConstant"]},a.reducedPlanckConstant={description:"Reduced Planck constant",examples:["reducedPlanckConstant"]},a.magneticConstant={description:"Magnetic constant (vacuum permeability)",examples:["magneticConstant"]},a.electricConstant={description:"Electric constant (vacuum permeability)",examples:["electricConstant"]},a.vacuumImpedance={description:"Characteristic impedance of vacuum",examples:["vacuumImpedance"]},a.coulomb={description:"Coulomb's constant",examples:["coulomb"]},a.elementaryCharge={description:"Elementary charge",examples:["elementaryCharge"]},a.bohrMagneton={description:"Borh magneton",examples:["bohrMagneton"]},a.conductanceQuantum={description:"Conductance quantum",examples:["conductanceQuantum"]},a.inverseConductanceQuantum={description:"Inverse conductance quantum",examples:["inverseConductanceQuantum"]},a.magneticFluxQuantum={description:"Magnetic flux quantum",examples:["magneticFluxQuantum"]},a.nuclearMagneton={description:"Nuclear magneton",examples:["nuclearMagneton"]},a.klitzing={description:"Von Klitzing constant",examples:["klitzing"]},a.bohrRadius={description:"Borh radius",examples:["bohrRadius"]},a.classicalElectronRadius={description:"Classical electron radius",examples:["classicalElectronRadius"]},a.electronMass={description:"Electron mass",examples:["electronMass"]},a.fermiCoupling={description:"Fermi coupling constant",examples:["fermiCoupling"]},a.fineStructure={description:"Fine-structure constant",examples:["fineStructure"]},a.hartreeEnergy={description:"Hartree energy",examples:["hartreeEnergy"]},a.protonMass={description:"Proton mass",examples:["protonMass"]},a.deuteronMass={description:"Deuteron Mass",examples:["deuteronMass"]},a.neutronMass={description:"Neutron mass",examples:["neutronMass"]},a.quantumOfCirculation={description:"Quantum of circulation",examples:["quantumOfCirculation"]},a.rydberg={description:"Rydberg constant",examples:["rydberg"]},a.thomsonCrossSection={description:"Thomson cross section",examples:["thomsonCrossSection"]},a.weakMixingAngle={description:"Weak mixing angle",examples:["weakMixingAngle"]},a.efimovFactor={description:"Efimov factor",examples:["efimovFactor"]},a.atomicMass={description:"Atomic mass constant",examples:["atomicMass"]},a.avogadro={description:"Avogadro's number",examples:["avogadro"]},a.boltzmann={description:"Boltzmann constant",examples:["boltzmann"]},a.faraday={description:"Faraday constant",examples:["faraday"]},a.firstRadiation={description:"First radiation constant",examples:["firstRadiation"]},a.loschmidt={description:"Loschmidt constant at T=273.15 K and p=101.325 kPa",examples:["loschmidt"]},a.gasConstant={description:"Gas constant",examples:["gasConstant"]},a.molarPlanckConstant={description:"Molar Planck constant",examples:["molarPlanckConstant"]},a.molarVolume={description:"Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",examples:["molarVolume"]},a.sackurTetrode={description:"Sackur-Tetrode constant at T=1 K and p=101.325 kPa",examples:["sackurTetrode"]},a.secondRadiation={description:"Second radiation constant",examples:["secondRadiation"]},a.stefanBoltzmann={description:"Stefan-Boltzmann constant",examples:["stefanBoltzmann"]},a.wienDisplacement={description:"Wien displacement law constant",examples:["wienDisplacement"]},a.molarMass={description:"Molar mass constant",examples:["molarMass"]},a.molarMassC12={description:"Molar mass constant of carbon-12",examples:["molarMassC12"]},a.gravity={description:"Standard acceleration of gravity (standard acceleration of free-fall on Earth)",examples:["gravity"]},a.planckLength={description:"Planck length",examples:["planckLength"]},a.planckMass={description:"Planck mass",examples:["planckMass"]},a.planckTime={description:"Planck time",examples:["planckTime"]},a.planckCharge={description:"Planck charge",examples:["planckCharge"]},a.planckTemperature={description:"Planck temperature",examples:["planckTemperature"]},a.derivative=r(221),a.lsolve=r(222),a.lup=r(223),a.lusolve=r(224),a.simplify=r(225),a.rationalize=r(226),a.slu=r(227),a.usolve=r(228),a.qr=r(229),a.abs=r(230),a.add=r(231),a.cbrt=r(232),a.ceil=r(233),a.cube=r(234),a.divide=r(235),a.dotDivide=r(236),a.dotMultiply=r(237),a.dotPow=r(238),a.exp=r(239),a.fix=r(240),a.floor=r(241),a.gcd=r(242),a.hypot=r(243),a.lcm=r(244),a.log=r(245),a.log10=r(246),a.mod=r(247),a.multiply=r(248),a.norm=r(249),a.nthRoot=r(250),a.pow=r(251),a.round=r(252),a.sign=r(253),a.sqrt=r(254),a.square=r(255),a.subtract=r(256),a.unaryMinus=r(257),a.unaryPlus=r(258),a.xgcd=r(259),a.bitAnd=r(260),a.bitNot=r(261),a.bitOr=r(262),a.bitXor=r(263),a.leftShift=r(264),a.rightArithShift=r(265),a.rightLogShift=r(266),a.bellNumbers=r(267),a.catalan=r(268),a.composition=r(269),a.stirlingS2=r(270),a.config=r(271),a.import=r(272),a.typed=r(273),a.arg=r(274),a.conj=r(275),a.re=r(276),a.im=r(277),a.eval=r(278),a.help=r(279),a.distance=r(280),a.intersect=r(281),a.and=r(282),a.not=r(283),a.or=r(284),a.xor=r(285),a.concat=r(286),a.cross=r(287),a.det=r(288),a.diag=r(289),a.dot=r(290),a.eye=r(291),a.filter=r(292),a.flatten=r(293),a.forEach=r(294),a.inv=r(295),a.kron=r(296),a.map=r(297),a.ones=r(298),a.partitionSelect=r(299),a.range=r(300),a.resize=r(301),a.reshape=r(302),a.size=r(303),a.sort=r(304),a.squeeze=r(305),a.subset=r(306),a.trace=r(307),a.transpose=r(308),a.zeros=r(309),a.combinations=r(310),a.factorial=r(311),a.gamma=r(312),a.kldivergence=r(313),a.multinomial=r(314),a.permutations=r(315),a.pickRandom=r(316),a.random=r(317),a.randomInt=r(318),a.compare=r(319),a.compareNatural=r(320),a.deepEqual=r(321),a.equal=r(322),a.larger=r(323),a.largerEq=r(324),a.smaller=r(325),a.smallerEq=r(326),a.unequal=r(327),a.setCartesian=r(328),a.setDifference=r(329),a.setDistinct=r(330),a.setIntersect=r(331),a.setIsSubset=r(332),a.setMultiplicity=r(333),a.setPowerset=r(334),a.setSize=r(335),a.setSymDifference=r(336),a.setUnion=r(337),a.erf=r(338),a.mad=r(339),a.max=r(340),a.mean=r(341),a.median=r(342),a.min=r(343),a.mode=r(344),a.prod=r(345),a.quantileSeq=r(346),a.std=r(347),a.sum=r(348),a.var=r(349),a.acos=r(350),a.acosh=r(351),a.acot=r(352),a.acoth=r(353),a.acsc=r(354),a.acsch=r(355),a.asec=r(356),a.asech=r(357),a.asin=r(358),a.asinh=r(359),a.atan=r(360),a.atanh=r(361),a.atan2=r(362),a.cos=r(363),a.cosh=r(364),a.cot=r(365),a.coth=r(366),a.csc=r(367),a.csch=r(368),a.sec=r(369),a.sech=r(370),a.sin=r(371),a.sinh=r(372),a.tan=r(373),a.tanh=r(374),a.to=r(375),a.clone=r(376),a.format=r(377),a.isNaN=r(378),a.isInteger=r(379),a.isNegative=r(380),a.isNumeric=r(381),a.isPositive=r(382),a.isPrime=r(383),a.isZero=r(384),a.typeof=r(385),a}},function(e,t){e.exports={name:"e",category:"Constants",syntax:["e"],description:"Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",examples:["e","e ^ 2","exp(2)","log(e)"],seealso:["exp"]}},function(e,t){e.exports={name:"pi",category:"Constants",syntax:["pi"],description:"The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",examples:["pi","sin(pi/2)"],seealso:["tau"]}},function(e,t,r){"use strict";t.factory=function(e,t,r,n){return function(t,r){if("BigNumber"===r)return new e.BigNumber(t);if("Fraction"===r)return new e.Fraction(t);if("number"==typeof t)return t;if("Infinity"===t)return 1/0;if("NaN"===t)return NaN;if(!/^[\-+]?((\d+\.?\d*)|(\d*\.?\d+))([eE][+\-]?\d+)?$/.test(t))throw new Error('Invalid numeric value "'+t+'"');return parseFloat(t.replace(/^(0*)[0-9]/,function(e,t){return e.substring(t.length)}))}}},function(e,t,r){"use strict";var n=r(13).getSafeProperty;t.name="AccessorNode",t.path="expression.node",t.factory=function(e,t,i,a){var o=i(r(14)),s=(i(r(76)),i(r(102)));function u(t,r){if(!(this instanceof u))throw new SyntaxError("Constructor must be called with the new operator");if(!e.isNode(t))throw new TypeError('Node expected for parameter "object"');if(!e.isIndexNode(r))throw new TypeError('IndexNode expected for parameter "index"');this.object=t||null,this.index=r,Object.defineProperty(this,"name",{get:function(){return this.index?this.index.isObjectProperty()?this.index.getObjectProperty():"":this.object.name||""}.bind(this),set:function(){throw new Error("Cannot assign a new name, name is read-only")}})}function c(t){return!(e.isAccessorNode(t)||e.isArrayNode(t)||e.isConstantNode(t)||e.isFunctionNode(t)||e.isObjectNode(t)||e.isParenthesisNode(t)||e.isSymbolNode(t))}return u.prototype=new o,u.prototype.type="AccessorNode",u.prototype.isAccessorNode=!0,u.prototype._compile=function(e,t){var r=this.object._compile(e,t),i=this.index._compile(e,t);if(this.index.isObjectProperty()){var a=this.index.getObjectProperty();return function(e,t,i){return n(r(e,t,i),a)}}return function(e,t,n){var a=r(e,t,n),o=i(e,t,a);return s(a,o)}},u.prototype.forEach=function(e){e(this.object,"object",this),e(this.index,"index",this)},u.prototype.map=function(e){return new u(this._ifNode(e(this.object,"object",this)),this._ifNode(e(this.index,"index",this)))},u.prototype.clone=function(){return new u(this.object,this.index)},u.prototype._toString=function(e){var t=this.object.toString(e);return c(this.object)&&(t="("+t+")"),t+this.index.toString(e)},u.prototype.toHTML=function(e){var t=this.object.toHTML(e);return c(this.object)&&(t='<span class="math-parenthesis math-round-parenthesis">(</span>'+t+'<span class="math-parenthesis math-round-parenthesis">)</span>'),t+this.index.toHTML(e)},u.prototype._toTex=function(e){var t=this.object.toTex(e);return c(this.object)&&(t="\\left("+t+"\\right)"),t+this.index.toTex(e)},u.prototype.toJSON=function(){return{mathjs:"AccessorNode",object:this.object,index:this.index}},u.fromJSON=function(e){return new u(e.object,e.index)},u}},function(e,t,r){"use strict";e.exports={end:!0}},function(e,t,r){"use strict";var n=r(41).transform,i=r(13).getSafeProperty;t.factory=function(e,t,a,o){var s=a(r(22));return function(e,t){try{if(Array.isArray(e))return s(e,t);if(e&&"function"==typeof e.subset)return e.subset(t);if("string"==typeof e)return s(e,t);if("object"==typeof e){if(!t.isObjectProperty())throw new TypeError("Cannot apply a numeric index as object property");return i(e,t.getObjectProperty())}throw new TypeError("Cannot apply index: unsupported type of object")}catch(e){throw n(e)}}}},function(e,t,r){"use strict";var n=r(2).map;t.name="ArrayNode",t.path="expression.node",t.factory=function(e,t,i,a){var o=i(r(14));function s(t){if(!(this instanceof s))throw new SyntaxError("Constructor must be called with the new operator");if(this.items=t||[],!Array.isArray(this.items)||!this.items.every(e.isNode))throw new TypeError("Array containing Nodes expected");var r=function(){throw new Error("Property `ArrayNode.nodes` is deprecated, use `ArrayNode.items` instead")};Object.defineProperty(this,"nodes",{get:r,set:r})}return s.prototype=new o,s.prototype.type="ArrayNode",s.prototype.isArrayNode=!0,s.prototype._compile=function(e,t){var r=n(this.items,function(r){return r._compile(e,t)});if("Array"!==e.config().matrix){var i=e.matrix;return function(e,t,a){return i(n(r,function(r){return r(e,t,a)}))}}return function(e,t,i){return n(r,function(r){return r(e,t,i)})}},s.prototype.forEach=function(e){for(var t=0;t<this.items.length;t++)e(this.items[t],"items["+t+"]",this)},s.prototype.map=function(e){for(var t=[],r=0;r<this.items.length;r++)t[r]=this._ifNode(e(this.items[r],"items["+r+"]",this));return new s(t)},s.prototype.clone=function(){return new s(this.items.slice(0))},s.prototype._toString=function(e){return"["+this.items.map(function(t){return t.toString(e)}).join(", ")+"]"},s.prototype.toJSON=function(){return{mathjs:"ArrayNode",items:this.items}},s.fromJSON=function(e){return new s(e.items)},s.prototype.toHTML=function(e){return'<span class="math-parenthesis math-square-parenthesis">[</span>'+this.items.map(function(t){return t.toHTML(e)}).join('<span class="math-separator">,</span>')+'<span class="math-parenthesis math-square-parenthesis">]</span>'},s.prototype._toTex=function(e){var t="\\begin{bmatrix}";return this.items.forEach(function(r){r.items?t+=r.items.map(function(t){return t.toTex(e)}).join("&"):t+=r.toTex(e),t+="\\\\"}),t+="\\end{bmatrix}"},s}},function(e,t,r){"use strict";var n=r(13).getSafeProperty,i=r(13).setSafeProperty;t.name="AssignmentNode",t.path="expression.node",t.factory=function(e,t,a,o){var s=a(r(14)),u=a(r(388)),c=a(r(102)),f=r(55);function l(t,r,n){if(!(this instanceof l))throw new SyntaxError("Constructor must be called with the new operator");if(this.object=t,this.index=n?r:null,this.value=n||r,!e.isSymbolNode(t)&&!e.isAccessorNode(t))throw new TypeError('SymbolNode or AccessorNode expected as "object"');if(e.isSymbolNode(t)&&"end"===t.name)throw new Error('Cannot assign to symbol "end"');if(this.index&&!e.isIndexNode(this.index))throw new TypeError('IndexNode expected as "index"');if(!e.isNode(this.value))throw new TypeError('Node expected as "value"');Object.defineProperty(this,"name",{get:function(){return this.index?this.index.isObjectProperty()?this.index.getObjectProperty():"":this.object.name||""}.bind(this),set:function(){throw new Error("Cannot assign a new name, name is read-only")}})}function p(e,t){t||(t="keep");var r=f.getPrecedence(e,t),n=f.getPrecedence(e.value,t);return"all"===t||null!==n&&n<=r}return l.prototype=new s,l.prototype.type="AssignmentNode",l.prototype.isAssignmentNode=!0,l.prototype._compile=function(t,r){var a=this.object._compile(t,r),o=this.index?this.index._compile(t,r):null,s=this.value._compile(t,r),f=this.object.name;if(this.index){if(this.index.isObjectProperty()){var l=this.index.getObjectProperty();return function(e,t,r){var n=a(e,t,r),o=s(e,t,r);return i(n,l,o)}}if(e.isSymbolNode(this.object))return function(e,t,r){var n=a(e,t,r),c=s(e,t,r),l=o(e,t,n);return i(e,f,u(n,l,c)),c};var p=this.object.object._compile(t,r);if(this.object.index.isObjectProperty()){var m=this.object.index.getObjectProperty();return function(e,t,r){var a=p(e,t,r),c=n(a,m),f=o(e,t,c),l=s(e,t,r);return i(a,m,u(c,f,l)),l}}var h=this.object.index._compile(t,r);return function(e,t,r){var n=p(e,t,r),i=h(e,t,n),a=c(n,i),f=o(e,t,a),l=s(e,t,r);return u(n,i,u(a,f,l)),l}}if(!e.isSymbolNode(this.object))throw new TypeError("SymbolNode expected as object");return function(e,t,r){return i(e,f,s(e,t,r))}},l.prototype.forEach=function(e){e(this.object,"object",this),this.index&&e(this.index,"index",this),e(this.value,"value",this)},l.prototype.map=function(e){return new l(this._ifNode(e(this.object,"object",this)),this.index?this._ifNode(e(this.index,"index",this)):null,this._ifNode(e(this.value,"value",this)))},l.prototype.clone=function(){return new l(this.object,this.index,this.value)},l.prototype._toString=function(e){var t=this.object.toString(e),r=this.index?this.index.toString(e):"",n=this.value.toString(e);return p(this,e&&e.parenthesis)&&(n="("+n+")"),t+r+" = "+n},l.prototype.toJSON=function(){return{mathjs:"AssignmentNode",object:this.object,index:this.index,value:this.value}},l.fromJSON=function(e){return new l(e.object,e.index,e.value)},l.prototype.toHTML=function(e){var t=this.object.toHTML(e),r=this.index?this.index.toHTML(e):"",n=this.value.toHTML(e);return p(this,e&&e.parenthesis)&&(n='<span class="math-paranthesis math-round-parenthesis">(</span>'+n+'<span class="math-paranthesis math-round-parenthesis">)</span>'),t+r+'<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>'+n},l.prototype._toTex=function(e){var t=this.object.toTex(e),r=this.index?this.index.toTex(e):"",n=this.value.toTex(e);return p(this,e&&e.parenthesis)&&(n="\\left("+n+"\\right)"),t+r+":="+n},l}},function(e,t,r){"use strict";var n=r(2).forEach,i=r(2).map;t.name="BlockNode",t.path="expression.node",t.factory=function(e,t,a,o){var s=a(r(14)),u=a(r(91));function c(t){if(!(this instanceof c))throw new SyntaxError("Constructor must be called with the new operator");if(!Array.isArray(t))throw new Error("Array expected");this.blocks=t.map(function(t){var r=t&&t.node,n=!t||void 0===t.visible||t.visible;if(!e.isNode(r))throw new TypeError('Property "node" must be a Node');if("boolean"!=typeof n)throw new TypeError('Property "visible" must be a boolean');return{node:r,visible:n}})}return c.prototype=new s,c.prototype.type="BlockNode",c.prototype.isBlockNode=!0,c.prototype._compile=function(e,t){var r=i(this.blocks,function(r){return{eval:r.node._compile(e,t),visible:r.visible}});return function(e,t,i){var a=[];return n(r,function(r){var n=r.eval(e,t,i);r.visible&&a.push(n)}),new u(a)}},c.prototype.forEach=function(e){for(var t=0;t<this.blocks.length;t++)e(this.blocks[t].node,"blocks["+t+"].node",this)},c.prototype.map=function(e){for(var t=[],r=0;r<this.blocks.length;r++){var n=this.blocks[r],i=this._ifNode(e(n.node,"blocks["+r+"].node",this));t[r]={node:i,visible:n.visible}}return new c(t)},c.prototype.clone=function(){return new c(this.blocks.map(function(e){return{node:e.node,visible:e.visible}}))},c.prototype._toString=function(e){return this.blocks.map(function(t){return t.node.toString(e)+(t.visible?"":";")}).join("\n")},c.prototype.toJSON=function(){return{mathjs:"BlockNode",blocks:this.blocks}},c.fromJSON=function(e){return new c(e.blocks)},c.prototype.toHTML=function(e){return this.blocks.map(function(t){return t.node.toHTML(e)+(t.visible?"":'<span class="math-separator">;</span>')}).join('<span class="math-separator"><br /></span>')},c.prototype._toTex=function(e){return this.blocks.map(function(t){return t.node.toTex(e)+(t.visible?"":";")}).join("\\;\\;\n")},c}},function(e,t,r){"use strict";var n=r(55);t.name="ConditionalNode",t.path="expression.node",t.factory=function(e,t,i,a){var o=i(r(14)),s=i(r(47));function u(t,r,n){if(!(this instanceof u))throw new SyntaxError("Constructor must be called with the new operator");if(!e.isNode(t))throw new TypeError("Parameter condition must be a Node");if(!e.isNode(r))throw new TypeError("Parameter trueExpr must be a Node");if(!e.isNode(n))throw new TypeError("Parameter falseExpr must be a Node");this.condition=t,this.trueExpr=r,this.falseExpr=n}return u.prototype=new o,u.prototype.type="ConditionalNode",u.prototype.isConditionalNode=!0,u.prototype._compile=function(t,r){var n=this.condition._compile(t,r),i=this.trueExpr._compile(t,r),a=this.falseExpr._compile(t,r);return function(t,r,o){return function(t){if("number"==typeof t||"boolean"==typeof t||"string"==typeof t)return!!t;if(t){if(e.isBigNumber(t))return!t.isZero();if(e.isComplex(t))return!(!t.re&&!t.im);if(e.isUnit(t))return!!t.value}if(null==t)return!1;throw new TypeError('Unsupported type of condition "'+s(t)+'"')}(n(t,r,o))?i(t,r,o):a(t,r,o)}},u.prototype.forEach=function(e){e(this.condition,"condition",this),e(this.trueExpr,"trueExpr",this),e(this.falseExpr,"falseExpr",this)},u.prototype.map=function(e){return new u(this._ifNode(e(this.condition,"condition",this)),this._ifNode(e(this.trueExpr,"trueExpr",this)),this._ifNode(e(this.falseExpr,"falseExpr",this)))},u.prototype.clone=function(){return new u(this.condition,this.trueExpr,this.falseExpr)},u.prototype._toString=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=n.getPrecedence(this,t),i=this.condition.toString(e),a=n.getPrecedence(this.condition,t);("all"===t||"OperatorNode"===this.condition.type||null!==a&&a<=r)&&(i="("+i+")");var o=this.trueExpr.toString(e),s=n.getPrecedence(this.trueExpr,t);("all"===t||"OperatorNode"===this.trueExpr.type||null!==s&&s<=r)&&(o="("+o+")");var u=this.falseExpr.toString(e),c=n.getPrecedence(this.falseExpr,t);return("all"===t||"OperatorNode"===this.falseExpr.type||null!==c&&c<=r)&&(u="("+u+")"),i+" ? "+o+" : "+u},u.prototype.toJSON=function(){return{mathjs:"ConditionalNode",condition:this.condition,trueExpr:this.trueExpr,falseExpr:this.falseExpr}},u.fromJSON=function(e){return new u(e.condition,e.trueExpr,e.falseExpr)},u.prototype.toHTML=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=n.getPrecedence(this,t),i=this.condition.toHTML(e),a=n.getPrecedence(this.condition,t);("all"===t||"OperatorNode"===this.condition.type||null!==a&&a<=r)&&(i='<span class="math-parenthesis math-round-parenthesis">(</span>'+i+'<span class="math-parenthesis math-round-parenthesis">)</span>');var o=this.trueExpr.toHTML(e),s=n.getPrecedence(this.trueExpr,t);("all"===t||"OperatorNode"===this.trueExpr.type||null!==s&&s<=r)&&(o='<span class="math-parenthesis math-round-parenthesis">(</span>'+o+'<span class="math-parenthesis math-round-parenthesis">)</span>');var u=this.falseExpr.toHTML(e),c=n.getPrecedence(this.falseExpr,t);return("all"===t||"OperatorNode"===this.falseExpr.type||null!==c&&c<=r)&&(u='<span class="math-parenthesis math-round-parenthesis">(</span>'+u+'<span class="math-parenthesis math-round-parenthesis">)</span>'),i+'<span class="math-operator math-conditional-operator">?</span>'+o+'<span class="math-operator math-conditional-operator">:</span>'+u},u.prototype._toTex=function(e){return"\\begin{cases} {"+this.trueExpr.toTex(e)+"}, &\\quad{\\text{if }\\;"+this.condition.toTex(e)+"}\\\\{"+this.falseExpr.toTex(e)+"}, &\\quad{\\text{otherwise}}\\end{cases}"},u}},function(e,t,r){"use strict";var n=r(101),i=r(9).escape,a=r(2).forEach,o=r(2).join,s=r(4),u=r(55),c=r(13).setSafeProperty;t.name="FunctionAssignmentNode",t.path="expression.node",t.factory=function(e,t,f,l){var p=f(r(14));function m(t,r,i){if(!(this instanceof m))throw new SyntaxError("Constructor must be called with the new operator");if("string"!=typeof t)throw new TypeError('String expected for parameter "name"');if(!Array.isArray(r))throw new TypeError('Array containing strings or objects expected for parameter "params"');if(!e.isNode(i))throw new TypeError('Node expected for parameter "expr"');if(t in n)throw new Error('Illegal function name, "'+t+'" is a reserved keyword');this.name=t,this.params=r.map(function(e){return e&&e.name||e}),this.types=r.map(function(e){return e&&e.type||"any"}),this.expr=i}function h(e,t){var r=u.getPrecedence(e,t),n=u.getPrecedence(e.expr,t);return"all"===t||null!==n&&n<=r}return m.prototype=new p,m.prototype.type="FunctionAssignmentNode",m.prototype.isFunctionAssignmentNode=!0,m.prototype._compile=function(e,t){var r=Object.create(t);a(this.params,function(e){r[e]=!0});var n=this.expr._compile(e,r),i=this.name,s=this.params,u=o(this.types,","),f=i+"("+o(this.params,", ")+")";return function(e,t,r){var a={};a[u]=function(){for(var i=Object.create(t),a=0;a<s.length;a++)i[s[a]]=arguments[a];return n(e,i,r)};var o=l(i,a);return o.syntax=f,c(e,i,o),o}},m.prototype.forEach=function(e){e(this.expr,"expr",this)},m.prototype.map=function(e){var t=this._ifNode(e(this.expr,"expr",this));return new m(this.name,this.params.slice(0),t)},m.prototype.clone=function(){return new m(this.name,this.params.slice(0),this.expr)},m.prototype._toString=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=this.expr.toString(e);return h(this,t)&&(r="("+r+")"),this.name+"("+this.params.join(", ")+") = "+r},m.prototype.toJSON=function(){var e=this.types;return{mathjs:"FunctionAssignmentNode",name:this.name,params:this.params.map(function(t,r){return{name:t,type:e[r]}}),expr:this.expr}},m.fromJSON=function(e){return new m(e.name,e.params,e.expr)},m.prototype.toHTML=function(e){for(var t=e&&e.parenthesis?e.parenthesis:"keep",r=[],n=0;n<this.params.length;n++)r.push('<span class="math-symbol math-parameter">'+i(this.params[n])+"</span>");var a=this.expr.toHTML(e);return h(this,t)&&(a='<span class="math-parenthesis math-round-parenthesis">(</span>'+a+'<span class="math-parenthesis math-round-parenthesis">)</span>'),'<span class="math-function">'+i(this.name)+'</span><span class="math-parenthesis math-round-parenthesis">(</span>'+r.join('<span class="math-separator">,</span>')+'<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>'+a},m.prototype._toTex=function(e){var t=e&&e.parenthesis?e.parenthesis:"keep",r=this.expr.toTex(e);return h(this,t)&&(r="\\left("+r+"\\right)"),"\\mathrm{"+this.name+"}\\left("+this.params.map(s.toSymbol).join(",")+"\\right):="+r},m}},function(e,t,r){"use strict";var n=r(9).stringify,i=r(9).escape,a=r(13).isSafeProperty,o=r(5).hasOwnProperty;t.name="ObjectNode",t.path="expression.node",t.factory=function(e,t,s,u){var c=s(r(14));function f(t){if(!(this instanceof f))throw new SyntaxError("Constructor must be called with the new operator");if(this.properties=t||{},t&&("object"!=typeof t||!Object.keys(t).every(function(r){return e.isNode(t[r])})))throw new TypeError("Object containing Nodes expected")}return f.prototype=new c,f.prototype.type="ObjectNode",f.prototype.isObjectNode=!0,f.prototype._compile=function(e,t){var r={};for(var i in this.properties)if(o(this.properties,i)){var s=n(i),u=JSON.parse(s);if(!a(this.properties,u))throw new Error('No access to property "'+u+'"');r[u]=this.properties[i]._compile(e,t)}return function(e,t,n){var i={};for(var a in r)o(r,a)&&(i[a]=r[a](e,t,n));return i}},f.prototype.forEach=function(e){for(var t in this.properties)this.properties.hasOwnProperty(t)&&e(this.properties[t],"properties["+n(t)+"]",this)},f.prototype.map=function(e){var t={};for(var r in this.properties)this.properties.hasOwnProperty(r)&&(t[r]=this._ifNode(e(this.properties[r],"properties["+n(r)+"]",this)));return new f(t)},f.prototype.clone=function(){var e={};for(var t in this.properties)this.properties.hasOwnProperty(t)&&(e[t]=this.properties[t]);return new f(e)},f.prototype._toString=function(e){var t=[];for(var r in this.properties)this.properties.hasOwnProperty(r)&&t.push(n(r)+": "+this.properties[r].toString(e));return"{"+t.join(", ")+"}"},f.prototype.toJSON=function(){return{mathjs:"ObjectNode",properties:this.properties}},f.fromJSON=function(e){return new f(e.properties)},f.prototype.toHTML=function(e){var t=[];for(var r in this.properties)this.properties.hasOwnProperty(r)&&t.push('<span class="math-symbol math-property">'+i(r)+'</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>'+this.properties[r].toHTML(e));return'<span class="math-parenthesis math-curly-parenthesis">{</span>'+t.join('<span class="math-separator">,</span>')+'<span class="math-parenthesis math-curly-parenthesis">}</span>'},f.prototype._toTex=function(e){var t=[];for(var r in this.properties)this.properties.hasOwnProperty(r)&&t.push("\\mathbf{"+r+":} & "+this.properties[r].toTex(e)+"\\\\");return"\\left\\{\\begin{array}{ll}"+t.join("\n")+"\\end{array}\\right\\}"},f}},function(e,t,r){"use strict";var n=r(55);t.name="RangeNode",t.path="expression.node",t.factory=function(e,t,i,a){var o=i(r(14));function s(t,r,n){if(!(this instanceof s))throw new SyntaxError("Constructor must be called with the new operator");if(!e.isNode(t))throw new TypeError("Node expected");if(!e.isNode(r))throw new TypeError("Node expected");if(n&&!e.isNode(n))throw new TypeError("Node expected");if(arguments.length>3)throw new Error("Too many arguments");this.start=t,this.end=r,this.step=n||null}function u(e,t){var r=n.getPrecedence(e,t),i={},a=n.getPrecedence(e.start,t);if(i.start=null!==a&&a<=r||"all"===t,e.step){var o=n.getPrecedence(e.step,t);i.step=null!==o&&o<=r||"all"===t}var s=n.getPrecedence(e.end,t);return i.end=null!==s&&s<=r||"all"===t,i}return s.prototype=new o,s.prototype.type="RangeNode",s.prototype.isRangeNode=!0,s.prototype.needsEnd=function(){return this.filter(function(t){return e.isSymbolNode(t)&&"end"===t.name}).length>0},s.prototype._compile=function(e,t){var r=e.range,n=this.start._compile(e,t),i=this.end._compile(e,t);if(this.step){var a=this.step._compile(e,t);return function(e,t,o){return r(n(e,t,o),i(e,t,o),a(e,t,o))}}return function(e,t,a){return r(n(e,t,a),i(e,t,a))}},s.prototype.forEach=function(e){e(this.start,"start",this),e(this.end,"end",this),this.step&&e(this.step,"step",this)},s.prototype.map=function(e){return new s(this._ifNode(e(this.start,"start",this)),this._ifNode(e(this.end,"end",this)),this.step&&this._ifNode(e(this.step,"step",this)))},s.prototype.clone=function(){return new s(this.start,this.end,this.step&&this.step)},s.prototype._toString=function(e){var t,r=u(this,e&&e.parenthesis?e.parenthesis:"keep"),n=this.start.toString(e);if(r.start&&(n="("+n+")"),t=n,this.step){var i=this.step.toString(e);r.step&&(i="("+i+")"),t+=":"+i}var a=this.end.toString(e);return r.end&&(a="("+a+")"),t+=":"+a},s.prototype.toJSON=function(){return{mathjs:"RangeNode",start:this.start,end:this.end,step:this.step}},s.fromJSON=function(e){return new s(e.start,e.end,e.step)},s.prototype.toHTML=function(e){var t,r=u(this,e&&e.parenthesis?e.parenthesis:"keep"),n=this.start.toHTML(e);if(r.start&&(n='<span class="math-parenthesis math-round-parenthesis">(</span>'+n+'<span class="math-parenthesis math-round-parenthesis">)</span>'),t=n,this.step){var i=this.step.toHTML(e);r.step&&(i='<span class="math-parenthesis math-round-parenthesis">(</span>'+i+'<span class="math-parenthesis math-round-parenthesis">)</span>'),t+='<span class="math-operator math-range-operator">:</span>'+i}var a=this.end.toHTML(e);return r.end&&(a='<span class="math-parenthesis math-round-parenthesis">(</span>'+a+'<span class="math-parenthesis math-round-parenthesis">)</span>'),t+='<span class="math-operator math-range-operator">:</span>'+a},s.prototype._toTex=function(e){var t=u(this,e&&e.parenthesis?e.parenthesis:"keep"),r=this.start.toTex(e);if(t.start&&(r="\\left("+r+"\\right)"),this.step){var n=this.step.toTex(e);t.step&&(n="\\left("+n+"\\right)"),r+=":"+n}var i=this.end.toTex(e);return t.end&&(i="\\left("+i+"\\right)"),r+=":"+i},s}},function(e,t,r){"use strict";t.name="parse",t.factory=function(e,t,n,i){var a=n(r(40));return i("parse",{"string | Array | Matrix":a,"string | Array | Matrix, Object":a})}},function(e,t,r){"use strict";t.name="parser",t.factory=function(e,t,n,i,a){var o=n(r(112));return i("parser",{"":function(){return new o(a)}})},t.math=!0},function(e,t,r){"use strict";var n=r(5).extend,i=r(13);t.name="Parser",t.path="expression",t.factory=function(e,t,a,o,s){var u=a(r(40));function c(){if(!(this instanceof c))throw new SyntaxError("Constructor must be called with the new operator");this.scope={}}return c.prototype.type="Parser",c.prototype.isParser=!0,c.prototype.parse=function(e){throw new Error("Parser.parse is deprecated. Use math.parse instead.")},c.prototype.compile=function(e){throw new Error("Parser.compile is deprecated. Use math.compile instead.")},c.prototype.eval=function(e){return u(e).compile().eval(this.scope)},c.prototype.get=function(e){return e in this.scope?i.getSafeProperty(this.scope,e):void 0},c.prototype.getAll=function(){return n({},this.scope)},c.prototype.set=function(e,t){return i.setSafeProperty(this.scope,e,t)},c.prototype.remove=function(e){delete this.scope[e]},c.prototype.clear=function(){for(var e in this.scope)this.scope.hasOwnProperty(e)&&delete this.scope[e]},c},t.math=!0},function(e,t,r){"use strict";var n=r(42),i=r(78),a=r(67);t.name="max",t.factory=function(e,t,o,s){var u=o(r(32)),c=o(r(34)),f=s("max",{"Array | Matrix":p,"Array | Matrix, number | BigNumber":function(e,t){return i(e,t.valueOf(),l)},"...":function(e){if(a(e))throw new TypeError("Scalar values expected in function max");return p(e)}});return f.toTex="\\max\\left(${args}\\right)",f;function l(e,t){try{return u(e,t)?e:t}catch(e){throw c(e,"max",t)}}function p(e){var t=void 0;if(n(e,function(e){try{(void 0===t||u(e,t))&&(t=e)}catch(t){throw c(t,"max",e)}}),void 0===t)throw new Error("Cannot calculate max of an empty array");return t}}},function(e,t,r){"use strict";var n=r(2).size,i=r(42),a=r(78),o=r(67);t.name="mean",t.factory=function(e,t,s,u){var c=s(r(15)),f=s(r(43)),l=s(r(34)),p=u("mean",{"Array | Matrix":m,"Array | Matrix, number | BigNumber":function(e,t){try{var r=a(e,t,c),i=Array.isArray(e)?n(e):e.size();return f(r,i[t])}catch(e){throw l(e,"mean")}},"...":function(e){if(o(e))throw new TypeError("Scalar values expected in function mean");return m(e)}});return p.toTex=void 0,p;function m(e){var t=0,r=0;if(i(e,function(e){try{t=c(t,e),r++}catch(t){throw l(t,"mean",e)}}),0===r)throw new Error("Cannot calculate mean of an empty array");return f(t,r)}}},function(e,t,r){"use strict";var n=r(24);t.name="inv",t.factory=function(e,t,i,a){var o=i(r(1)),s=i(r(12)),u=i(r(16)),c=i(r(11)),f=i(r(33)),l=i(r(116)),p=i(r(63)),m=a("inv",{"Array | Matrix":function(t){var r=e.isMatrix(t)?t.size():n.array.size(t);switch(r.length){case 1:if(1==r[0])return e.isMatrix(t)?o([s(1,t.valueOf()[0])]):[s(1,t[0])];throw new RangeError("Matrix must be square (size: "+n.string.format(r)+")");case 2:var i=r[0],a=r[1];if(i==a)return e.isMatrix(t)?o(h(t.valueOf(),i,a),t.storage()):h(t,i,a);throw new RangeError("Matrix must be square (size: "+n.string.format(r)+")");default:throw new RangeError("Matrix must be two dimensional (size: "+n.string.format(r)+")")}},any:function(e){return s(1,e)}});function h(e,t,r){var n,i,a,o,m;if(1==t){if(0==(o=e[0][0]))throw Error("Cannot calculate inverse, determinant is zero");return[[s(1,o)]]}if(2==t){var h=l(e);if(0==h)throw Error("Cannot calculate inverse, determinant is zero");return[[s(e[1][1],h),s(f(e[0][1]),h)],[s(f(e[1][0]),h),s(e[0][0],h)]]}var d=e.concat();for(n=0;n<t;n++)d[n]=d[n].concat();for(var y=p(t).valueOf(),g=0;g<r;g++){for(n=g;n<t&&0==d[n][g];)n++;if(n==t||0==d[n][g])throw Error("Cannot calculate inverse, determinant is zero");n!=g&&(m=d[g],d[g]=d[n],d[n]=m,m=y[g],y[g]=y[n],y[n]=m);var v=d[g],x=y[g];for(n=0;n<t;n++){var w=d[n],b=y[n];if(n!=g){if(0!=w[g]){for(a=s(f(w[g]),v[g]),i=g;i<r;i++)w[i]=u(w[i],c(a,v[i]));for(i=0;i<r;i++)b[i]=u(b[i],c(a,x[i]))}}else{for(a=v[g],i=g;i<r;i++)w[i]=s(w[i],a);for(i=0;i<r;i++)b[i]=s(b[i],a)}}}return y}return m.toTex={1:"\\left(${args[0]}\\right)^{-1}"},m}},function(e,t,r){"use strict";var n=r(24),i=n.object,a=n.string;t.name="det",t.factory=function(e,t,n,o){var s=n(r(1)),u=n(r(15)),c=n(r(19)),f=n(r(11)),l=n(r(33)),p=o("det",{any:function(e){return i.clone(e)},"Array | Matrix":function(t){var r;switch((r=e.isMatrix(t)?t.size():Array.isArray(t)?(t=s(t)).size():[]).length){case 0:return i.clone(t);case 1:if(1==r[0])return i.clone(t.valueOf()[0]);throw new RangeError("Matrix must be square (size: "+a.format(r)+")");case 2:var n=r[0],o=r[1];if(n==o)return function(e,t,r){if(1==t)return i.clone(e[0][0]);if(2==t)return c(f(e[0][0],e[1][1]),f(e[1][0],e[0][1]));for(var n=function(e){var t,r,n=new Array(e.length),i=0;for(t=1;t<e.length;t++)i=u(i,e[t][t]);for(t=0;t<e.length;t++){for(n[t]=new Array(e.length),n[t][t]=l(i),r=0;r<t;r++)n[t][r]=0;for(r=t+1;r<e.length;r++)n[t][r]=e[t][r];t+1<e.length&&(i=c(i,e[t+1][t+1]))}return n},a=e,o=0;o<t-1;o++)a=f(n(a),e);return t%2==0?l(a[0][0]):a[0][0]}(t.clone().valueOf(),n);throw new RangeError("Matrix must be square (size: "+a.format(r)+")");default:throw new RangeError("Matrix must be two dimensional (size: "+a.format(r)+")")}}});return p.toTex={1:"\\det\\left(${args[0]}\\right)"},p}},function(e,t,r){"use strict";var n=r(42),i=r(78),a=r(67);t.name="min",t.factory=function(e,t,o,s){var u=o(r(37)),c=o(r(34)),f=s("min",{"Array | Matrix":p,"Array | Matrix, number | BigNumber":function(e,t){return i(e,t.valueOf(),l)},"...":function(e){if(a(e))throw new TypeError("Scalar values expected in function min");return p(e)}});return f.toTex="\\min\\left(${args}\\right)",f;function l(e,t){try{return u(e,t)?e:t}catch(e){throw c(e,"min",t)}}function p(e){var t=void 0;if(n(e,function(e){try{(void 0===t||u(e,t))&&(t=e)}catch(t){throw c(t,"min",e)}}),void 0===t)throw new Error("Cannot calculate min of an empty array");return t}}},function(e,t,r){"use strict";t.name="range",t.factory=function(e,t,n,i){var a=n(r(1)),o=new e.BigNumber(0),s=new e.BigNumber(1),u=i("range",{string:f,"string, boolean":f,"number, number":function(e,t){return c(l(e,t,1))},"number, number, number":function(e,t,r){return c(l(e,t,r))},"number, number, boolean":function(e,t,r){return c(r?p(e,t,1):l(e,t,1))},"number, number, number, boolean":function(e,t,r,n){return c(n?p(e,t,r):l(e,t,r))},"BigNumber, BigNumber":function(e,t){return c(m(e,t,s))},"BigNumber, BigNumber, BigNumber":function(e,t,r){return c(m(e,t,r))},"BigNumber, BigNumber, boolean":function(e,t,r){return c(r?h(e,t,s):m(e,t,s))},"BigNumber, BigNumber, BigNumber, boolean":function(e,t,r,n){return c(n?h(e,t,r):m(e,t,r))}});return u.toTex=void 0,u;function c(e){return"Array"===t.matrix?e:a(e)}function f(r,n){var i=function(e){var t=e.split(":").map(function(e){return Number(e)});if(t.some(function(e){return isNaN(e)}))return null;switch(t.length){case 2:return{start:t[0],end:t[1],step:1};case 3:return{start:t[0],end:t[2],step:t[1]};default:return null}}(r);if(!i)throw new SyntaxError('String "'+r+'" is no valid range');return"BigNumber"===t.number?c((n?h:m)(new e.BigNumber(i.start),new e.BigNumber(i.end),new e.BigNumber(i.step))):c((n?p:l)(i.start,i.end,i.step))}function l(e,t,r){var n=[],i=e;if(r>0)for(;i<t;)n.push(i),i+=r;else if(r<0)for(;i>t;)n.push(i),i+=r;return n}function p(e,t,r){var n=[],i=e;if(r>0)for(;i<=t;)n.push(i),i+=r;else if(r<0)for(;i>=t;)n.push(i),i+=r;return n}function m(e,t,r){var n=[],i=e;if(r.gt(o))for(;i.lt(t);)n.push(i),i=i.plus(r);else if(r.lt(o))for(;i.gt(t);)n.push(i),i=i.plus(r);return n}function h(e,t,r){var n=[],i=e;if(r.gt(o))for(;i.lte(t);)n.push(i),i=i.plus(r);else if(r.lt(o))for(;i.gte(t);)n.push(i),i=i.plus(r);return n}}},function(e,t,r){"use strict";r(3).digits;t.math=!0,t.name="simplifyConstant",t.path="algebra.simplify",t.factory=function(e,t,n,i,a){var o=n(r(120)),s=(n(r(54)),o.isCommutative),u=o.isAssociative,c=o.allChildren,f=o.createMakeNodeFunction,l=a.expression.node.ConstantNode,p=a.expression.node.OperatorNode,m=a.expression.node.FunctionNode;function h(t,r){try{return g(a[t].apply(null,r))}catch(n){return r=r.map(function(t){return e.isFraction(t)?t.valueOf():t}),g(a[t].apply(null,r))}}var d=i({Fraction:function(e){var t,r=e.s*e.n;return t=r<0?new p("-","unaryMinus",[new l(-r)]):new l(r),1===e.d?t:new p("/","divide",[t,new l(e.d)])},number:function(e){return e<0?v(new l(-e)):new l(e)},BigNumber:function(e){return e<0?v(new l(e.negated().toString(),"number")):new l(e.toString(),"number")},Complex:function(e){throw"Cannot convert Complex number to Node"}});function y(e){if(isFinite(e)){var t=a.fraction(e);if(t.valueOf()===e)return t}return e}var g=i({string:function(e){return"BigNumber"===t.number?a.bignumber(e):"Fraction"===t.number?a.fraction(e):y(parseFloat(e))},Fraction:function(e){return e},BigNumber:function(e){return e},number:function(e){return y(e)},Complex:function(e){return 0!==e.im?e:y(e.re)}});function v(e){return new p("-","unaryMinus",[e])}function x(t,r,n){return r.reduce(function(r,i){if(e.isNode(r)||e.isNode(i))e.isNode(r)?e.isNode(i)||(i=d(i)):r=d(r);else{try{return h(t,[r,i])}catch(e){}r=d(r),i=d(i)}return n([r,i])})}function w(t){switch(t.type){case"SymbolNode":return t;case"ConstantNode":return"number"==typeof t.value?g(t.value):t;case"FunctionNode":if(a[t.name]&&a[t.name].rawArgs)return t;if(-1===["add","multiply"].indexOf(t.name)){if(!(r=t.args.map(w)).some(e.isNode))try{return h(t.name,r)}catch(e){}return r=r.map(function(t){return e.isNode(t)?t:d(t)}),new m(t.name,r)}case"OperatorNode":var r,n,i=t.fn.toString(),o=f(t);if(t.isUnary())r=[w(t.args[0])],n=e.isNode(r[0])?o(r):h(i,r);else if(u(t))if(r=(r=c(t)).map(w),s(i)){for(var l=[],p=[],y=0;y<r.length;y++)e.isNode(r[y])?p.push(r[y]):l.push(r[y]);l.length>1?(n=x(i,l,o),p.unshift(n),n=x(i,p,o)):n=x(i,r,o)}else n=x(i,r,o);else n=x(i,r=t.args.map(w),o);return n;case"ParenthesisNode":return w(t.content);case"AccessorNode":case"ArrayNode":case"AssignmentNode":case"BlockNode":case"FunctionAssignmentNode":case"IndexNode":case"ObjectNode":case"RangeNode":case"UpdateNode":case"ConditionalNode":default:throw"Unimplemented node type in simplifyConstant: "+t.type}}return function(t){var r=w(t);return e.isNode(r)?r:d(r)}}},function(e,t,r){"use strict";t.factory=function(e,t,r,n,i){var a=i.expression.node.FunctionNode,o=i.expression.node.OperatorNode,s=i.expression.node.SymbolNode,u={add:!0,multiply:!0},c={add:!0,multiply:!0};function f(t,r){if(!e.isOperatorNode(t))return!1;var n=t.fn.toString();return r&&r.hasOwnProperty(n)&&r[n].hasOwnProperty("associative")?r[n].associative:c[n]||!1}function l(t){var r,n=[],i=function(t){for(var a=0;a<t.args.length;a++){var o=t.args[a];e.isOperatorNode(o)&&r===o.op?i(o):n.push(o)}};return f(t)?(r=t.op,i(t),n):t.args}function p(t){return e.isOperatorNode(t)?function(e){try{return new o(t.op,t.fn,e)}catch(e){return console.error(e),[]}}:function(e){return new a(new s(t.name),e)}}return{createMakeNodeFunction:p,isCommutative:function(t,r){if(!e.isOperatorNode(t))return!0;var n=t.fn.toString();return r&&r.hasOwnProperty(n)&&r[n].hasOwnProperty("commutative")?r[n].commutative:u[n]||!1},isAssociative:f,flatten:function e(t){if(!t.args||0===t.args.length)return t;t.args=l(t);for(var r=0;r<t.args.length;r++)e(t.args[r])},allChildren:l,unflattenr:function e(t){if(t.args&&0!==t.args.length){for(var r=p(t),n=t.args.length,i=0;i<n;i++)e(t.args[i]);if(n>2&&f(t)){for(var a=t.args.pop();t.args.length>0;)a=r([t.args.pop(),a]);t.args=a.args}}},unflattenl:function e(t){if(t.args&&0!==t.args.length){for(var r=p(t),n=t.args.length,i=0;i<n;i++)e(t.args[i]);if(n>2&&f(t)){for(var a=t.args.shift();t.args.length>0;)a=r([a,t.args.shift()]);t.args=a.args}}}}},t.math=!0},function(e,t,r){"use strict";t.math=!0,t.name="simplifyCore",t.path="algebra.simplify",t.factory=function(e,t,n,i,a){var o=n(r(46)),s=n(r(58)),u=(n(r(54)),n(r(15))),c=n(r(19)),f=n(r(11)),l=n(r(43)),p=n(r(38)),m=a.expression.node.ConstantNode,h=a.expression.node.OperatorNode,d=a.expression.node.FunctionNode,y=a.expression.node.ParenthesisNode,g=new m(0),v=new m(1);return function t(r){if(e.isOperatorNode(r)&&r.isUnary()){var n=t(r.args[0]);if("+"===r.op)return n;if("-"===r.op){if(e.isOperatorNode(n)){if(n.isUnary()&&"-"===n.op)return n.args[0];if(n.isBinary()&&"subtract"===n.fn)return new h("-","subtract",[n.args[1],n.args[0]])}return new h(r.op,r.fn,[n])}}else if(e.isOperatorNode(r)&&r.isBinary()){n=t(r.args[0]);var i=t(r.args[1]);if("+"===r.op){if(e.isConstantNode(n)){if(s(n.value))return i;if(e.isConstantNode(i))return new m(u(n.value,i.value))}return e.isConstantNode(i)&&s(i.value)?n:e.isOperatorNode(i)&&i.isUnary()&&"-"===i.op?new h("-","subtract",[n,i.args[0]]):new h(r.op,r.fn,i?[n,i]:[n])}if("-"===r.op){if(e.isConstantNode(n)&&i){if(e.isConstantNode(i))return new m(c(n.value,i.value));if(s(n.value))return new h("-","unaryMinus",[i])}if("subtract"===r.fn)return e.isConstantNode(i)&&s(i.value)?n:e.isOperatorNode(i)&&i.isUnary()&&"-"===i.op?t(new h("+","add",[n,i.args[0]])):new h(r.op,r.fn,[n,i])}else{if("*"===r.op){if(e.isConstantNode(n)){if(s(n.value))return g;if(o(n.value,1))return i;if(e.isConstantNode(i))return new m(f(n.value,i.value))}if(e.isConstantNode(i)){if(s(i.value))return g;if(o(i.value,1))return n;if(e.isOperatorNode(n)&&n.isBinary()&&n.op===r.op){var a=n.args[0];if(e.isConstantNode(a)){var x=new m(f(a.value,i.value));return new h(r.op,r.fn,[x,n.args[1]])}}return new h(r.op,r.fn,[i,n])}return new h(r.op,r.fn,[n,i])}if("/"===r.op){if(e.isConstantNode(n)){if(s(n.value))return g;if(e.isConstantNode(i)&&(o(i.value,1)||o(i.value,2)||o(i.value,4)))return new m(l(n.value,i.value))}return new h(r.op,r.fn,[n,i])}if("^"===r.op){if(e.isConstantNode(i)){if(s(i.value))return v;if(o(i.value,1))return n;if(e.isConstantNode(n))return new m(p(n.value,i.value));if(e.isOperatorNode(n)&&n.isBinary()&&"^"===n.op){var w=n.args[1];if(e.isConstantNode(w))return new h(r.op,r.fn,[n.args[0],new m(f(w.value,i.value))])}}return new h(r.op,r.fn,[n,i])}}}else{if(e.isParenthesisNode(r)){var b=t(r.content);return e.isParenthesisNode(b)||e.isSymbolNode(b)||e.isConstantNode(b)?b:new y(b)}if(e.isFunctionNode(r)){var N=r.args.map(t).map(function(t){return e.isParenthesisNode(t)?t.content:t});return new d(t(r.fn),N)}}return r}}},function(e,t,r){"use strict";var n=r(5);t.name="clone",t.factory=function(e,t,r,i){var a=i("clone",{any:n.clone});return a.toTex=void 0,a}},function(e,t,r){"use strict";var n=r(3).nearlyEqual,i=r(35);t.name="unequal",t.factory=function(e,t,a,o){var s=a(r(1)),u=a(r(17)),c=a(r(25)),f=a(r(18)),l=a(r(7)),p=a(r(6)),m=r(4),h=o("unequal",{"any, any":function(e,t){return null===e?null!==t:null===t?null!==e:void 0===e?void 0!==t:void 0===t?void 0!==e:d(e,t)},"SparseMatrix, SparseMatrix":function(e,t){return c(e,t,d)},"SparseMatrix, DenseMatrix":function(e,t){return u(t,e,d,!0)},"DenseMatrix, SparseMatrix":function(e,t){return u(e,t,d,!1)},"DenseMatrix, DenseMatrix":function(e,t){return l(e,t,d)},"Array, Array":function(e,t){return h(s(e),s(t)).valueOf()},"Array, Matrix":function(e,t){return h(s(e),t)},"Matrix, Array":function(e,t){return h(e,s(t))},"SparseMatrix, any":function(e,t){return f(e,t,d,!1)},"DenseMatrix, any":function(e,t){return p(e,t,d,!1)},"any, SparseMatrix":function(e,t){return f(t,e,d,!0)},"any, DenseMatrix":function(e,t){return p(t,e,d,!0)},"Array, any":function(e,t){return p(s(e),t,d,!1).valueOf()},"any, Array":function(e,t){return p(s(t),e,d,!0).valueOf()}}),d=o("_unequal",{"boolean, boolean":function(e,t){return e!==t},"number, number":function(e,r){return!n(e,r,t.epsilon)},"BigNumber, BigNumber":function(e,r){return!i(e,r,t.epsilon)},"Fraction, Fraction":function(e,t){return!e.equals(t)},"Complex, Complex":function(e,t){return!e.equals(t)},"Unit, Unit":function(e,t){if(!e.equalBase(t))throw new Error("Cannot compare units with different base");return h(e.value,t.value)}});return h.toTex={2:"\\left(${args[0]}"+m.operators.unequal+"${args[1]}\\right)"},h}},function(e,t,r){"use strict";var n=r(3),i=r(0);t.name="sign",t.factory=function(e,t,r,a){var o=a("sign",{number:n.sign,Complex:function(e){return e.sign()},BigNumber:function(t){return new e.BigNumber(t.cmp(0))},Fraction:function(t){return new e.Fraction(t.s,1)},"Array | Matrix":function(e){return i(e,o,!0)},Unit:function(e){return o(e.value)}});return o.toTex={1:"\\mathrm{${name}}\\left(${args[0]}\\right)"},o}},function(e,t,r){"use strict";var n=r(0);t.name="conj",t.factory=function(e,t,r,i){var a=i("conj",{number:function(e){return e},BigNumber:function(e){return e},Complex:function(e){return e.conjugate()},"Array | Matrix":function(e){return n(e,a)}});return a.toTex={1:"\\left(${args[0]}\\right)^*"},a}},function(e,t,r){"use strict";var n=r(24).object;t.name="lup",t.factory=function(e,t,i,a){var o=i(r(1)),s=i(r(27)),u=i(r(16)),c=i(r(12)),f=i(r(21)),l=i(r(19)),p=i(r(32)),m=i(r(8)),h=i(r(33)),d=e.SparseMatrix,y=e.DenseMatrix,g=e.Spa,v=a("lup",{DenseMatrix:function(e){return x(e)},SparseMatrix:function(e){return w(e)},Array:function(e){var t=o(e),r=x(t);return{L:r.L.valueOf(),U:r.U.valueOf(),p:r.p}}}),x=function(e){var t,r,i,a=e._size[0],o=e._size[1],h=Math.min(a,o),d=n.clone(e._data),g=[],v=[a,h],x=[],w=[h,o],b=[];for(t=0;t<a;t++)b[t]=t;for(r=0;r<o;r++){if(r>0)for(t=0;t<a;t++){var N=Math.min(t,r),M=0;for(i=0;i<N;i++)M=u(M,f(d[t][i],d[i][r]));d[t][r]=l(d[t][r],M)}var E=r,A=0,O=0;for(t=r;t<a;t++){var S=d[t][r],_=s(S);p(_,A)&&(E=t,A=_,O=S)}if(r!==E&&(b[r]=[b[E],b[E]=b[r]][0],y._swapRows(r,E,d)),r<a)for(t=r+1;t<a;t++){var T=d[t][r];m(T,0)||(d[t][r]=c(d[t][r],O))}}for(r=0;r<o;r++)for(t=0;t<a;t++)0===r&&(t<o&&(x[t]=[]),g[t]=[]),t<r?(t<o&&(x[t][r]=d[t][r]),r<a&&(g[t][r]=0)):t!==r?(t<o&&(x[t][r]=0),r<a&&(g[t][r]=d[t][r])):(t<o&&(x[t][r]=d[t][r]),r<a&&(g[t][r]=1));var C=new y({data:g,size:v}),z=new y({data:x,size:w}),B=[];for(t=0,h=b.length;t<h;t++)B[b[t]]=t;return{L:C,U:z,p:B,toString:function(){return"L: "+this.L.toString()+"\nU: "+this.U.toString()+"\nP: "+this.p}}},w=function(e){var t,r,n,i,a,o,u,l=e._size[0],y=e._size[1],v=Math.min(l,y),x=e._values,w=e._index,b=e._ptr,N=[],M=[],E=[],A=[l,v],O=[],S=[],_=[],T=[v,y],C=[],z=[];for(t=0;t<l;t++)C[t]=t,z[t]=t;for(r=0;r<y;r++){var B=new g;r<l&&(E.push(N.length),N.push(1),M.push(r)),_.push(O.length);var I=b[r],P=b[r+1];for(n=I;n<P;n++)t=w[n],B.set(C[t],x[n]);r>0&&B.forEach(0,r-1,function(e,t){d._forEachRow(e,N,M,E,function(r,n){r>e&&B.accumulate(r,h(f(n,t)))})});var R=r,U=B.get(r),k=s(U);B.forEach(r+1,l-1,function(e,t){var r=s(t);p(r,k)&&(R=e,k=r,U=t)}),r!==R&&(d._swapRows(r,R,A[1],N,M,E),d._swapRows(r,R,T[1],O,S,_),B.swap(r,R),a=R,o=z[i=r],u=z[a],C[o]=a,C[u]=i,z[i]=u,z[a]=o),B.forEach(0,l-1,function(e,t){e<=r?(O.push(t),S.push(e)):(t=c(t,U),m(t,0)||(N.push(t),M.push(e)))})}return _.push(O.length),E.push(N.length),{L:new d({values:N,index:M,ptr:E,size:A}),U:new d({values:O,index:S,ptr:_,size:T}),p:C,toString:function(){return"L: "+this.L.toString()+"\nU: "+this.U.toString()+"\nP: "+this.p}}};return v}},function(e,t,r){"use strict";var n=r(24).number.isInteger;t.name="slu",t.factory=function(e,t,i,a){var o=i(r(411)),s=i(r(419));return a("slu",{"SparseMatrix, number, number":function(e,t,r){if(!n(t)||t<0||t>3)throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");if(r<0||r>1)throw new Error("Partial pivoting threshold must be a number from 0 to 1");var i=o(t,e,!1),a=s(e,i,r);return{L:a.L,U:a.U,p:a.pinv,q:i.q,toString:function(){return"L: "+this.L.toString()+"\nU: "+this.U.toString()+"\np: "+this.p.toString()+(this.q?"\nq: "+this.q.toString():"")+"\n"}}}})}},function(e,t,r){"use strict";t.name="cs_tdfs",t.path="sparse",t.factory=function(){return function(e,t,r,n,i,a,o){var s=0;for(r[o]=e;s>=0;){var u=r[o+s],c=r[n+u];-1==c?(s--,a[t++]=u):(r[n+u]=r[i+c],r[o+ ++s]=c)}return t}}},function(e,t,r){"use strict";var n=r(3).nearlyEqual,i=r(35);t.name="largerEq",t.factory=function(e,t,a,o){var s=a(r(1)),u=a(r(17)),c=a(r(25)),f=a(r(18)),l=a(r(7)),p=a(r(6)),m=r(4),h=o("largerEq",{"boolean, boolean":function(e,t){return e>=t},"number, number":function(e,r){return e>=r||n(e,r,t.epsilon)},"BigNumber, BigNumber":function(e,r){return e.gte(r)||i(e,r,t.epsilon)},"Fraction, Fraction":function(e,t){return-1!==e.compare(t)},"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")},"Unit, Unit":function(e,t){if(!e.equalBase(t))throw new Error("Cannot compare units with different base");return h(e.value,t.value)},"SparseMatrix, SparseMatrix":function(e,t){return c(e,t,h)},"SparseMatrix, DenseMatrix":function(e,t){return u(t,e,h,!0)},"DenseMatrix, SparseMatrix":function(e,t){return u(e,t,h,!1)},"DenseMatrix, DenseMatrix":function(e,t){return l(e,t,h)},"Array, Array":function(e,t){return h(s(e),s(t)).valueOf()},"Array, Matrix":function(e,t){return h(s(e),t)},"Matrix, Array":function(e,t){return h(e,s(t))},"SparseMatrix, any":function(e,t){return f(e,t,h,!1)},"DenseMatrix, any":function(e,t){return p(e,t,h,!1)},"any, SparseMatrix":function(e,t){return f(t,e,h,!0)},"any, DenseMatrix":function(e,t){return p(t,e,h,!0)},"Array, any":function(e,t){return p(s(e),t,h,!1).valueOf()},"any, Array":function(e,t){return p(s(t),e,h,!0).valueOf()}});return h.toTex={2:"\\left(${args[0]}"+m.operators.largerEq+"${args[1]}\\right)"},h}},function(e,t,r){"use strict";t.name="cs_marked",t.path="sparse",t.factory=function(){return function(e,t){return e[t]<0}}},function(e,t,r){"use strict";t.name="cs_mark",t.path="sparse",t.factory=function(e,t,n){var i=n(r(80));return function(e,t){e[t]=i(e[t])}}},function(e,t,r){"use strict";t.name="lsolve",t.factory=function(e,t,n,i){var a=n(r(1)),o=n(r(12)),s=n(r(21)),u=n(r(19)),c=n(r(8)),f=n(r(81)),l=e.DenseMatrix,p=i("lsolve",{"SparseMatrix, Array | Matrix":function(e,t){return h(e,t)},"DenseMatrix, Array | Matrix":function(e,t){return m(e,t)},"Array, Array | Matrix":function(e,t){var r=a(e);return m(r,t).valueOf()}}),m=function(e,t){for(var r=(t=f(e,t,!0))._data,n=e._size[0],i=e._size[1],a=[],p=e._data,m=0;m<i;m++){var h,d=r[m][0]||0;if(c(d,0))h=0;else{var y=p[m][m];if(c(y,0))throw new Error("Linear system cannot be solved since matrix is singular");h=o(d,y);for(var g=m+1;g<n;g++)r[g]=[u(r[g][0]||0,s(h,p[g][m]))]}a[m]=[h]}return new l({data:a,size:[n,1]})},h=function(e,t){for(var r,n,i=(t=f(e,t,!0))._data,a=e._size[0],p=e._size[1],m=e._values,h=e._index,d=e._ptr,y=[],g=0;g<p;g++){var v=i[g][0]||0;if(c(v,0))y[g]=[0];else{var x=0,w=[],b=[],N=d[g+1];for(n=d[g];n<N;n++)(r=h[n])===g?x=m[n]:r>g&&(w.push(m[n]),b.push(r));if(c(x,0))throw new Error("Linear system cannot be solved since matrix is singular");var M=o(v,x);for(n=0,N=b.length;n<N;n++)i[r=b[n]]=[u(i[r][0]||0,s(M,w[n]))];y[g]=[M]}}return new l({data:y,size:[a,1]})};return p}},function(e,t,r){"use strict";t.name="usolve",t.factory=function(e,t,n,i){var a=n(r(1)),o=n(r(12)),s=n(r(21)),u=n(r(19)),c=n(r(8)),f=n(r(81)),l=e.DenseMatrix,p=i("usolve",{"SparseMatrix, Array | Matrix":function(e,t){return h(e,t)},"DenseMatrix, Array | Matrix":function(e,t){return m(e,t)},"Array, Array | Matrix":function(e,t){var r=a(e);return m(r,t).valueOf()}}),m=function(e,t){for(var r=(t=f(e,t,!0))._data,n=e._size[0],i=e._size[1],a=[],p=e._data,m=i-1;m>=0;m--){var h,d=r[m][0]||0;if(c(d,0))h=0;else{var y=p[m][m];if(c(y,0))throw new Error("Linear system cannot be solved since matrix is singular");h=o(d,y);for(var g=m-1;g>=0;g--)r[g]=[u(r[g][0]||0,s(h,p[g][m]))]}a[m]=[h]}return new l({data:a,size:[n,1]})},h=function(e,t){for(var r,n,i=(t=f(e,t,!0))._data,a=e._size[0],p=e._size[1],m=e._values,h=e._index,d=e._ptr,y=[],g=p-1;g>=0;g--){var v=i[g][0]||0;if(c(v,0))y[g]=[0];else{var x=0,w=[],b=[],N=d[g],M=d[g+1];for(n=M-1;n>=N;n--)(r=h[n])===g?x=m[n]:r<g&&(w.push(m[n]),b.push(r));if(c(x,0))throw new Error("Linear system cannot be solved since matrix is singular");var E=o(v,x);for(n=0,M=b.length;n<M;n++)i[r=b[n]]=[u(i[r][0],s(E,w[n]))];y[g]=[E]}}return new l({data:y,size:[a,1]})};return p}},function(e,t,r){"use strict";t.name="dotDivide",t.factory=function(e,t,n,i){var a=n(r(1)),o=n(r(12)),s=r(4),u=n(r(23)),c=n(r(17)),f=n(r(25)),l=n(r(20)),p=n(r(18)),m=n(r(7)),h=n(r(6)),d=i("dotDivide",{"any, any":o,"SparseMatrix, SparseMatrix":function(e,t){return f(e,t,o,!1)},"SparseMatrix, DenseMatrix":function(e,t){return u(t,e,o,!0)},"DenseMatrix, SparseMatrix":function(e,t){return c(e,t,o,!1)},"DenseMatrix, DenseMatrix":function(e,t){return m(e,t,o)},"Array, Array":function(e,t){return d(a(e),a(t)).valueOf()},"Array, Matrix":function(e,t){return d(a(e),t)},"Matrix, Array":function(e,t){return d(e,a(t))},"SparseMatrix, any":function(e,t){return l(e,t,o,!1)},"DenseMatrix, any":function(e,t){return h(e,t,o,!1)},"any, SparseMatrix":function(e,t){return p(t,e,o,!0)},"any, DenseMatrix":function(e,t){return h(t,e,o,!0)},"Array, any":function(e,t){return h(a(e),t,o,!1).valueOf()},"any, Array":function(e,t){return h(a(t),e,o,!0).valueOf()}});return d.toTex={2:"\\left(${args[0]}"+s.operators.dotDivide+"${args[1]}\\right)"},d}},function(e,t,r){"use strict";var n=r(10);t.name="algorithm09",t.factory=function(e,t,i,a){var o=i(r(8)),s=e.SparseMatrix;return function(e,t,r){var i=e._values,u=e._index,c=e._ptr,f=e._size,l=e._datatype,p=t._values,m=t._index,h=t._ptr,d=t._size,y=t._datatype;if(f.length!==d.length)throw new n(f.length,d.length);if(f[0]!==d[0]||f[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+f+") must match Matrix B ("+d+")");var g,v=f[0],x=f[1],w=o,b=0,N=r;"string"==typeof l&&l===y&&(g=l,w=a.find(o,[g,g]),b=a.convert(0,g),N=a.find(r,[g,g]));var M,E,A,O,S,_=i&&p?[]:void 0,T=[],C=[],z=new s({values:_,index:T,ptr:C,size:[v,x],datatype:g}),B=_?[]:void 0,I=[];for(E=0;E<x;E++){C[E]=T.length;var P=E+1;if(B)for(O=h[E],S=h[E+1],A=O;A<S;A++)I[M=m[A]]=P,B[M]=p[A];for(O=c[E],S=c[E+1],A=O;A<S;A++)if(M=u[A],B){var R=I[M]===P?B[M]:b,U=N(i[A],R);w(U,b)||(T.push(M),_.push(U))}else T.push(M)}return C[x]=T.length,z}}},function(e,t,r){"use strict";var n=r(0);t.name="log",t.factory=function(e,t,i,a){var o=i(r(12)),s=a("log",{number:function(r){return r>=0||t.predictable?Math.log(r):new e.Complex(r,0).log()},Complex:function(e){return e.log()},BigNumber:function(r){return!r.isNegative()||t.predictable?r.ln():new e.Complex(r.toNumber(),0).log()},"Array | Matrix":function(e){return n(e,s)},"any, any":function(e,t){return o(s(e),s(t))}});return s.toTex={1:"\\ln\\left(${args[0]}\\right)",2:"\\log_{${args[1]}}\\left(${args[0]}\\right)"},s}},function(e,t,r){"use strict";var n=r(5).clone,i=r(9).format;t.name="trace",t.factory=function(e,t,a,o){var s=a(r(1)),u=a(r(15)),c=o("trace",{Array:function(e){return f(s(e))},SparseMatrix:function(e){var t=e._values,r=e._index,n=e._ptr,a=e._size,o=a[0],s=a[1];if(o===s){var c=0;if(t.length>0)for(var f=0;f<s;f++)for(var l=n[f],p=n[f+1],m=l;m<p;m++){var h=r[m];if(h===f){c=u(c,t[m]);break}if(h>f)break}return c}throw new RangeError("Matrix must be square (size: "+i(a)+")")},DenseMatrix:f,any:n});function f(e){var t=e._size,r=e._data;switch(t.length){case 1:if(1===t[0])return n(r[0]);throw new RangeError("Matrix must be square (size: "+i(t)+")");case 2:var a=t[0];if(a===t[1]){for(var o=0,s=0;s<a;s++)o=u(o,r[s][s]);return o}throw new RangeError("Matrix must be square (size: "+i(t)+")");default:throw new RangeError("Matrix must be two dimensional (size: "+i(t)+")")}}return c.toTex={1:"\\mathrm{tr}\\left(${args[0]}\\right)"},c}},function(e,t,r){"use strict";t.name="stirlingS2",t.factory=function(e,t,n,i){var a=n(r(15)),o=n(r(19)),s=n(r(11)),u=n(r(43)),c=n(r(38)),f=n(r(70)),l=n(r(71)),p=n(r(60)),m=n(r(51)),h=n(r(32)),d=i("stirlingS2",{"number | BigNumber, number | BigNumber":function(e,t){if(!m(e)||p(e)||!m(t)||p(t))throw new TypeError("Non-negative integer value expected in function stirlingS2");if(h(t,e))throw new TypeError("k must be less than or equal to n in function stirlingS2");for(var r=f(t),n=0,i=0;i<=t;i++){var d=c(-1,o(t,i)),y=l(t,i),g=c(i,e);n=a(n,s(s(y,g),d))}return u(n,r)}});return d.toTex={2:"\\mathrm{S}\\left(${args}\\right)"},d}},function(e,t,r){"use strict";var n=r(0),i=r(3).isInteger;var a=4.7421875,o=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];t.name="gamma",t.factory=function(e,t,s,u){var c=s(r(11)),f=s(r(38)),l=u("gamma",{number:function(e){var t,r;if(i(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var n=e-2,s=e-1;n>1;)s*=n,n--;return 0==s&&(s=1),s}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*l(1-e));if(e>=171.35)return 1/0;if(e>85){var u=e*e,c=u*e,f=c*e,p=f*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*u)-139/(51840*c)-571/(2488320*f)+163879/(209018880*p)+5246819/(75246796800*p*e))}--e,r=o[0];for(var m=1;m<o.length;++m)r+=o[m]/(e+m);return t=e+a+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*r},Complex:function(t){var r,n;if(0==t.im)return l(t.re);t=new e.Complex(t.re-1,t.im),n=new e.Complex(o[0],0);for(var i=1;i<o.length;++i){var s=t.re+i,u=s*s+t.im*t.im;0!=u?(n.re+=o[i]*s/u,n.im+=-o[i]*t.im/u):n.re=o[i]<0?-1/0:1/0}r=new e.Complex(t.re+a+.5,t.im);var p=Math.sqrt(2*Math.PI);t.re+=.5;var m=f(r,t);0==m.im?m.re*=p:0==m.re?m.im*=p:(m.re*=p,m.im*=p);var h=Math.exp(-r.re);return r.re=h*Math.cos(-r.im),r.im=h*Math.sin(-r.im),c(c(m,r),n)},BigNumber:function(r){if(r.isInteger())return r.isNegative()||r.isZero()?new e.BigNumber(1/0):function(r){if(r.isZero())return new e.BigNumber(1);for(var n=t.precision+(0|Math.log(r.toNumber())),i=new(e.BigNumber.clone({precision:n}))(r),a=r.toNumber()-1;a>1;)i=i.times(a),a--;return new e.BigNumber(i.toPrecision(e.BigNumber.precision))}(r.minus(1));if(!r.isFinite())return new e.BigNumber(r.isNegative()?NaN:1/0);throw new Error("Integer BigNumber expected")},"Array | Matrix":function(e){return n(e,l)}});return l.toTex={1:"\\Gamma\\left(${args[0]}\\right)"},l}},function(e,t,r){"use strict";var n=r(0);t.name="not",t.factory=function(e,t,i,a){var o=r(4),s=a("not",{number:function(e){return!e},Complex:function(e){return 0===e.re&&0===e.im},BigNumber:function(e){return e.isZero()||e.isNaN()},Unit:function(e){return null===e.value||s(e.value)},"Array | Matrix":function(e){return n(e,s)}});return s.toTex={1:o.operators.not+"\\left(${args[0]}\\right)"},s}},function(e,t,r){"use strict";var n=r(30).maxArgumentCount;function i(e,t){var r=n(t),i=function(n,a){return Array.isArray(n)?n.map(function(e,t){return i(e,a.concat(t))}):1===r?t(n):2===r?t(n,a):t(n,a,e)};return i(e,[])}t.name="map",t.factory=function(e,t,r,n){var a=n("map",{"Array, function":i,"Matrix, function":function(e,t){return e.map(t)}});return a.toTex=void 0,a}},function(e,t,r){"use strict";var n=r(42);t.name="sum",t.factory=function(e,t,i,a){var o=i(r(16)),s=i(r(34)),u=a("sum",{"Array | Matrix":function(e){return c(e)},"Array | Matrix, number | BigNumber":function(){throw new Error("sum(A, dim) is not yet supported")},"...":function(e){return c(e)}});return u.toTex=void 0,u;function c(r){var i=void 0;if(n(r,function(e){try{i=void 0===i?e:o(i,e)}catch(t){throw s(t,"sum",e)}}),void 0===i)switch(t.number){case"number":return 0;case"BigNumber":return new e.BigNumber(0);case"Fraction":return new e.Fraction(0);default:return 0}return i}}},function(e,t,r){"use strict";var n=r(2).flatten,i=r(2).identify,a=r(2).generalize;t.name="setDifference",t.factory=function(e,t,o,s){var u=o(r(26)),c=o(r(45)),f=o(r(28)),l=o(r(22)),p=o(r(29));return s("setDifference",{"Array | Matrix, Array | Matrix":function(e,t){if(0===l(f(e),new u(0)))var r=[];else{if(0===l(f(t),new u(0)))return n(e.toArray());for(var o,s=i(n(Array.isArray(e)?e:e.toArray()).sort(p)),m=i(n(Array.isArray(t)?t:t.toArray()).sort(p)),h=(r=[],0);h<s.length;h++){o=!1;for(var d=0;d<m.length;d++)if(0===p(s[h].value,m[d].value)&&s[h].identifier===m[d].identifier){o=!0;break}o||r.push(s[h])}}return Array.isArray(e)&&Array.isArray(t)?a(r):new c(a(r))}})}},function(e,t,r){"use strict";var n=r(2).flatten,i=r(2).identify,a=r(2).generalize;t.name="setIntersect",t.factory=function(e,t,o,s){var u=o(r(26)),c=o(r(45)),f=o(r(28)),l=o(r(22)),p=o(r(29));return s("setIntersect",{"Array | Matrix, Array | Matrix":function(e,t){if(0===l(f(e),new u(0))||0===l(f(t),new u(0)))var r=[];else for(var o=i(n(Array.isArray(e)?e:e.toArray()).sort(p)),s=i(n(Array.isArray(t)?t:t.toArray()).sort(p)),m=(r=[],0);m<o.length;m++)for(var h=0;h<s.length;h++)if(0===p(o[m].value,s[h].value)&&o[m].identifier===s[h].identifier){r.push(o[m]);break}return Array.isArray(e)&&Array.isArray(t)?a(r):new c(a(r))}})}},function(e,t,r){"use strict";var n=r(2).flatten;t.name="setSymDifference",t.factory=function(e,t,i,a){var o=i(r(26)),s=i(r(66)),u=i(r(28)),c=i(r(22)),f=i(r(143));return a("setSymDifference",{"Array | Matrix, Array | Matrix":function(e,t){if(0===c(u(e),new o(0)))return n(t);if(0===c(u(t),new o(0)))return n(e);var r=n(e),i=n(t);return s(f(r,i),f(i,r))}})}},function(e,t,r){"use strict";var n=r(2).flatten,i=r(67);t.name="median",t.factory=function(e,t,a,o){var s=a(r(16)),u=a(r(12)),c=a(r(52)),f=a(r(85)),l=a(r(34)),p=o("median",{"Array | Matrix":m,"Array | Matrix, number | BigNumber":function(e,t){throw new Error("median(A, dim) is not yet supported")},"...":function(e){if(i(e))throw new TypeError("Scalar values expected in function median");return m(e)}});function m(e){try{var t=(e=n(e.valueOf())).length;if(0==t)throw new Error("Cannot calculate median of an empty array");if(t%2==0){for(var r=t/2-1,i=f(e,r+1),a=e[r],o=0;o<r;++o)c(e[o],a)>0&&(a=e[o]);return d(a,i)}var s=f(e,(t-1)/2);return h(s)}catch(e){throw l(e,"median")}}var h=o({"number | BigNumber | Complex | Unit":function(e){return e}}),d=o({"number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit":function(e,t){return u(s(e,t),2)}});return p.toTex=void 0,p}},function(e,t,r){"use strict";var n="unbiased",i=r(42);t.name="var",t.factory=function(e,t,a,o){var s=a(r(16)),u=a(r(19)),c=a(r(21)),f=a(r(12)),l=a(r(34)),p=o("variance",{"Array | Matrix":function(e){return m(e,n)},"Array | Matrix, string":m,"...":function(e){return m(e,n)}});return p.toTex="\\mathrm{Var}\\left(${args}\\right)",p;function m(t,r){var n=0,a=0;if(0==t.length)throw new SyntaxError("Function var requires one or more parameters (0 provided)");if(i(t,function(e){try{n=s(n,e),a++}catch(t){throw l(t,"var",e)}}),0===a)throw new Error("Cannot calculate var of an empty array");var o=f(n,a);switch(n=0,i(t,function(e){var t=u(e,o);n=s(n,c(t,t))}),r){case"uncorrected":return f(n,a);case"biased":return f(n,a+1);case"unbiased":var p=e.isBigNumber(n)?new e.BigNumber(0):0;return 1==a?p:f(n,a-1);default:throw new Error('Unknown normalization "'+r+'". Choose "unbiased" (default), "uncorrected", or "biased".')}}}},function(e,t,r){"use strict";var n=r(0);var i=Math.acosh||function(e){return Math.log(Math.sqrt(e*e-1)+e)};t.name="acosh",t.factory=function(e,t,r,a){var o=a("acosh",{number:function(r){return r>=1||t.predictable?i(r):r<=-1?new e.Complex(Math.log(Math.sqrt(r*r-1)-r),Math.PI):new e.Complex(r,0).acosh()},Complex:function(e){return e.acosh()},BigNumber:function(e){return e.acosh()},"Array | Matrix":function(e){return n(e,o)}});return o.toTex={1:"\\cosh^{-1}\\left(${args[0]}\\right)"},o}},function(e,t,r){var n=r(150);e.exports=function e(t){var i=n.create(t);return i.create=e,i.import(r(157)),i}()},function(e,t,r){e.exports=r(151)},function(e,t,r){var n=r(5).isFactory,i=r(152),a=r(87),o=r(155),s=r(156);t.create=function(e){if("function"!=typeof Object.create)throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");var t=[],r=[],u=a.mixin({});u.type={},u.expression={transform:{},mathWithTransform:{}},u.typed=i.create(u.type);var c={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function f(e){if(!n(e))throw new Error("Factory object with properties `type`, `name`, and `factory` expected");var i,a=t.indexOf(e);return-1===a?(i=!0===e.math?e.factory(u.type,c,f,u.typed,u):e.factory(u.type,c,f,u.typed),t.push(e),r.push(i)):i=r[a],i}return u.import=f(o),u.config=f(s),u.expression.mathWithTransform.config=u.config,e&&u.config(e),u}},function(e,t,r){var n=r(153),i=r(3).digits,a=r(72),o=r(61),s=function(){return s=n.create,n};t.create=function(e){e.isNumber=function(e){return"number"==typeof e},e.isComplex=function(t){return e.Complex&&t instanceof e.Complex||!1},e.isBigNumber=a,e.isFraction=function(t){return e.Fraction&&t instanceof e.Fraction||!1},e.isUnit=function(e){return e&&e.constructor.prototype.isUnit||!1},e.isString=function(e){return"string"==typeof e},e.isArray=Array.isArray,e.isMatrix=o,e.isDenseMatrix=function(e){return e&&e.isDenseMatrix&&e.constructor.prototype.isMatrix||!1},e.isSparseMatrix=function(e){return e&&e.isSparseMatrix&&e.constructor.prototype.isMatrix||!1},e.isRange=function(e){return e&&e.constructor.prototype.isRange||!1},e.isIndex=function(e){return e&&e.constructor.prototype.isIndex||!1},e.isBoolean=function(e){return"boolean"==typeof e},e.isResultSet=function(e){return e&&e.constructor.prototype.isResultSet||!1},e.isHelp=function(e){return e&&e.constructor.prototype.isHelp||!1},e.isFunction=function(e){return"function"==typeof e},e.isDate=function(e){return e instanceof Date},e.isRegExp=function(e){return e instanceof RegExp},e.isObject=function(t){return"object"==typeof t&&t.constructor===Object&&!e.isComplex(t)&&!e.isFraction(t)},e.isNull=function(e){return null===e},e.isUndefined=function(e){return void 0===e},e.isAccessorNode=function(e){return e&&e.isAccessorNode&&e.constructor.prototype.isNode||!1},e.isArrayNode=function(e){return e&&e.isArrayNode&&e.constructor.prototype.isNode||!1},e.isAssignmentNode=function(e){return e&&e.isAssignmentNode&&e.constructor.prototype.isNode||!1},e.isBlockNode=function(e){return e&&e.isBlockNode&&e.constructor.prototype.isNode||!1},e.isConditionalNode=function(e){return e&&e.isConditionalNode&&e.constructor.prototype.isNode||!1},e.isConstantNode=function(e){return e&&e.isConstantNode&&e.constructor.prototype.isNode||!1},e.isFunctionAssignmentNode=function(e){return e&&e.isFunctionAssignmentNode&&e.constructor.prototype.isNode||!1},e.isFunctionNode=function(e){return e&&e.isFunctionNode&&e.constructor.prototype.isNode||!1},e.isIndexNode=function(e){return e&&e.isIndexNode&&e.constructor.prototype.isNode||!1},e.isNode=function(e){return e&&e.isNode&&e.constructor.prototype.isNode||!1},e.isObjectNode=function(e){return e&&e.isObjectNode&&e.constructor.prototype.isNode||!1},e.isOperatorNode=function(e){return e&&e.isOperatorNode&&e.constructor.prototype.isNode||!1},e.isParenthesisNode=function(e){return e&&e.isParenthesisNode&&e.constructor.prototype.isNode||!1},e.isRangeNode=function(e){return e&&e.isRangeNode&&e.constructor.prototype.isNode||!1},e.isSymbolNode=function(e){return e&&e.isSymbolNode&&e.constructor.prototype.isNode||!1},e.isChain=function(e){return e&&e.constructor.prototype.isChain||!1};var t=s();return t.types=[{name:"number",test:e.isNumber},{name:"Complex",test:e.isComplex},{name:"BigNumber",test:e.isBigNumber},{name:"Fraction",test:e.isFraction},{name:"Unit",test:e.isUnit},{name:"string",test:e.isString},{name:"Array",test:e.isArray},{name:"Matrix",test:e.isMatrix},{name:"DenseMatrix",test:e.isDenseMatrix},{name:"SparseMatrix",test:e.isSparseMatrix},{name:"Range",test:e.isRange},{name:"Index",test:e.isIndex},{name:"boolean",test:e.isBoolean},{name:"ResultSet",test:e.isResultSet},{name:"Help",test:e.isHelp},{name:"function",test:e.isFunction},{name:"Date",test:e.isDate},{name:"RegExp",test:e.isRegExp},{name:"null",test:e.isNull},{name:"undefined",test:e.isUndefined},{name:"OperatorNode",test:e.isOperatorNode},{name:"ConstantNode",test:e.isConstantNode},{name:"SymbolNode",test:e.isSymbolNode},{name:"ParenthesisNode",test:e.isParenthesisNode},{name:"FunctionNode",test:e.isFunctionNode},{name:"FunctionAssignmentNode",test:e.isFunctionAssignmentNode},{name:"ArrayNode",test:e.isArrayNode},{name:"AssignmentNode",test:e.isAssignmentNode},{name:"BlockNode",test:e.isBlockNode},{name:"ConditionalNode",test:e.isConditionalNode},{name:"IndexNode",test:e.isIndexNode},{name:"RangeNode",test:e.isRangeNode},{name:"Node",test:e.isNode},{name:"Object",test:e.isObject}],t.conversions=[{from:"number",to:"BigNumber",convert:function(t){if(i(t)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+t+"). Use function bignumber(x) to convert to BigNumber.");return new e.BigNumber(t)}},{from:"number",to:"Complex",convert:function(t){return new e.Complex(t,0)}},{from:"number",to:"string",convert:function(e){return e+""}},{from:"BigNumber",to:"Complex",convert:function(t){return new e.Complex(t.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(e){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(t){return new e.Complex(t.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(t){if(new e.Fraction(t).valueOf()!==t)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+t+"). Use function fraction(x) to convert to Fraction.");return new e.Fraction(t)}},{from:"string",to:"number",convert:function(e){var t=Number(e);if(isNaN(t))throw new Error('Cannot convert "'+e+'" to a number');return t}},{from:"string",to:"BigNumber",convert:function(t){try{return new e.BigNumber(t)}catch(e){throw new Error('Cannot convert "'+t+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(t){try{return new e.Fraction(t)}catch(e){throw new Error('Cannot convert "'+t+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(t){try{return new e.Complex(t)}catch(e){throw new Error('Cannot convert "'+t+'" to Complex')}}},{from:"boolean",to:"number",convert:function(e){return+e}},{from:"boolean",to:"BigNumber",convert:function(t){return new e.BigNumber(+t)}},{from:"boolean",to:"Fraction",convert:function(t){return new e.Fraction(+t)}},{from:"boolean",to:"string",convert:function(e){return+e}},{from:"Array",to:"Matrix",convert:function(t){return new e.DenseMatrix(t)}},{from:"Matrix",to:"Array",convert:function(e){return e.valueOf()}}],t}},function(e,t,r){"use strict";var n,i,a;i=[],void 0===(a="function"==typeof(n=function(){function e(){return!0}function t(){return!1}function r(){}return function n(){var i=[{name:"number",test:function(e){return"number"==typeof e}},{name:"string",test:function(e){return"string"==typeof e}},{name:"boolean",test:function(e){return"boolean"==typeof e}},{name:"Function",test:function(e){return"function"==typeof e}},{name:"Array",test:Array.isArray},{name:"Date",test:function(e){return e instanceof Date}},{name:"RegExp",test:function(e){return e instanceof RegExp}},{name:"Object",test:function(e){return"object"==typeof e&&e.constructor===Object}},{name:"null",test:function(e){return null===e}},{name:"undefined",test:function(e){return void 0===e}}],a={name:"any",test:e},o=[],s=[],u={types:i,conversions:s,ignore:o};function c(e){var t=k(u.types,function(t){return t.name===e});if(t)return t;if("any"===e)return a;var r=k(u.types,function(t){return t.name.toLowerCase()===e.toLowerCase()});throw new TypeError('Unknown type "'+e+'"'+(r?'. Did you mean "'+r.name+'"?':""))}function f(e){return e===a?999:u.types.indexOf(e)}function l(e){var t=k(u.types,function(t){return t.test(e)});if(t)return t.name;throw new TypeError("Value has unknown type. Value: "+e)}function p(e){return e.map(function(e){var t=e.types.map(w);return(e.restParam?"...":"")+t.join("|")}).join(",")}function m(e,t){var r,n,i=0===e.indexOf("..."),a=(i?e.length>3?e.slice(3):"any":e).split("|").map(C).filter(z).filter(T),o=(r=a,n={},t.forEach(function(e){-1!==r.indexOf(e.from)||-1===r.indexOf(e.to)||n[e.from]||(n[e.from]=e)}),Object.keys(n).map(function(e){return n[e]})),s=a.map(function(e){var t=c(e);return{name:e,typeIndex:f(t),test:t.test,conversion:null,conversionIndex:-1}}),u=o.map(function(e){var r=c(e.from);return{name:e.from,typeIndex:f(r),test:r.test,conversion:e,conversionIndex:t.indexOf(e)}});return{types:s.concat(u),restParam:i}}function h(e){var t=P(e);return!!t&&t.restParam}function d(e){return e.types.some(function(e){return null!=e.conversion})}function y(t){if(t&&0!==t.types.length){if(1===t.types.length)return c(t.types[0].name).test;if(2===t.types.length){var r=c(t.types[0].name).test,n=c(t.types[1].name).test;return function(e){return r(e)||n(e)}}var i=t.types.map(function(e){return c(e.name).test});return function(e){for(var t=0;t<i.length;t++)if(i[t](e))return!0;return!1}}return e}function g(e){var t,r,n,i;if(h(e)){var a=(t=(i=e,i.slice(0,i.length-1)).map(y)).length,o=y(P(e));return function(e){for(var r=0;r<t.length;r++)if(!t[r](e[r]))return!1;return function(e){for(var t=a;t<e.length;t++)if(!o(e[t]))return!1;return!0}(e)&&e.length>=a+1}}return 0===e.length?function(e){return 0===e.length}:1===e.length?(r=y(e[0]),function(e){return r(e[0])&&1===e.length}):2===e.length?(r=y(e[0]),n=y(e[1]),function(e){return r(e[0])&&n(e[1])&&2===e.length}):(t=e.map(y),function(e){for(var r=0;r<t.length;r++)if(!t[r](e[r]))return!1;return e.length===t.length})}function v(e,t){return t<e.params.length?e.params[t]:h(e.params)?P(e.params):null}function x(e,t,r){var n=v(e,t);return(n?r?n.types.filter(b):n.types:[]).map(w)}function w(e){return e.name}function b(e){return null===e.conversion||void 0===e.conversion}function N(e,t){var r=function(e){for(var t={},r=0;r<e.length;r++)t[e[r]]=!0;return Object.keys(t)}(D(e,function(e){return x(e,t,!1)}));return-1!==r.indexOf("any")?["any"]:r}function M(e){for(var t=999,r=0;r<e.types.length;r++)b(e.types[r])&&(t=Math.min(t,e.types[r].typeIndex));return t}function E(e){for(var t=999,r=0;r<e.types.length;r++)b(e.types[r])||(t=Math.min(t,e.types[r].conversionIndex));return t}function A(e,t){var r,n,i,a,o,s=Math.min(e.params.length,t.params.length);if(0!=(n=e.params.some(d)-t.params.some(d)))return n;for(r=0;r<s;r++)if(0!=(n=d(e.params[r])-d(t.params[r])))return n;for(r=0;r<s;r++)if(i=e.params[r],a=t.params[r],o=void 0,0!==(n=0!=(o=i.restParam-a.restParam)?o:0!=(o=d(i)-d(a))?o:0!=(o=M(i)-M(a))?o:E(i)-E(a)))return n;return e.params.length-t.params.length}function O(e){var t,r,n,i,a=[],o=[];switch(e.types.forEach(function(e){e.conversion&&(a.push(c(e.conversion.from).test),o.push(e.conversion.convert))}),o.length){case 0:return function(e){return e};case 1:return t=a[0],n=o[0],function(e){return t(e)?n(e):e};case 2:return t=a[0],r=a[1],n=o[0],i=o[1],function(e){return t(e)?n(e):r(e)?i(e):e};default:return function(e){for(var t=0;t<o.length;t++)if(a[t](e))return o[t](e);return e}}}function S(e,t){return function e(r,n,i){if(n<r.length){var a,o=r[n],s=t?o.types.filter(b):o.types;if(o.restParam){var u=s.filter(b);a=u.length<s.length?[u,s]:[s]}else a=s.map(function(e){return[e]});return D(a,function(t){return e(r,n+1,i.concat([t]))})}return[i.map(function(e,t){return{types:e,restParam:t===r.length-1&&h(r)}})]}(e,0,[])}function _(e,n){if(0===Object.keys(n).length)throw new SyntaxError("No signatures provided");var i=[];Object.keys(n).map(function(e){return t=e,r=n[e],i=u.conversions,a=[],""!==t.trim()&&(a=t.split(",").map(C).map(function(e,t,r){var n=m(e,i);if(n.restParam&&t!==r.length-1)throw new SyntaxError('Unexpected rest parameter "'+e+'": only allowed for the last parameter');return n})),a.some(I)?null:{params:a,fn:r};var t,r,i,a}).filter(B).forEach(function(e){var t=k(i,function(t){return function(e,t){for(var r=Math.max(e.params.length,t.params.length),n=0;n<r;n++)if(!U(x(e,n,!0),x(t,n,!0)))return!1;var i=e.params.length,a=t.params.length,o=h(e.params),s=h(t.params);return o?s?i===a:a>=i:s?i>=a:i===a}(t,e)});if(t)throw new TypeError('Conflicting signatures "'+p(t.params)+'" and "'+p(e.params)+'".');i.push(e)});var a=D(i,function(e){return(e?S(e.params,!1):[]).map(function(t){return{params:t,fn:e.fn}})}).filter(B);a.sort(A);var o,s=a[0]&&a[0].params.length<=2&&!h(a[0].params),c=a[1]&&a[1].params.length<=2&&!h(a[1].params),f=a[2]&&a[2].params.length<=2&&!h(a[2].params),w=a[3]&&a[3].params.length<=2&&!h(a[3].params),b=a[4]&&a[4].params.length<=2&&!h(a[4].params),M=a[5]&&a[5].params.length<=2&&!h(a[5].params),E=s&&c&&f&&w&&b&&M,_=a.map(function(e){return g(e.params)}),T=s?y(a[0].params[0]):t,z=c?y(a[1].params[0]):t,P=f?y(a[2].params[0]):t,q=w?y(a[3].params[0]):t,L=b?y(a[4].params[0]):t,F=M?y(a[5].params[0]):t,j=s?y(a[0].params[1]):t,H=c?y(a[1].params[1]):t,$=f?y(a[2].params[1]):t,G=w?y(a[3].params[1]):t,V=b?y(a[4].params[1]):t,Z=M?y(a[5].params[1]):t,W=a.map(function(e){return function(e,t){var r=t;if(e.some(d)){var n=h(e),i=e.map(O);r=function(){for(var e=[],r=n?arguments.length-1:arguments.length,a=0;a<r;a++)e[a]=i[a](arguments[a]);return n&&(e[r]=arguments[r].map(i[r])),t.apply(null,e)}}var a=r;if(h(e)){var o=e.length-1;a=function(){return r.apply(null,R(arguments,0,o).concat([R(arguments,o)]))}}return a}(e.params,e.fn)}),J=s?W[0]:r,Y=c?W[1]:r,X=f?W[2]:r,Q=w?W[3]:r,K=b?W[4]:r,ee=M?W[5]:r,te=s?a[0].params.length:-1,re=c?a[1].params.length:-1,ne=f?a[2].params.length:-1,ie=w?a[3].params.length:-1,ae=b?a[4].params.length:-1,oe=M?a[5].params.length:-1,se=E?6:0,ue=a.length,ce=function(){for(var t=se;t<ue;t++)if(_[t](arguments))return W[t].apply(null,arguments);throw function(e,t,r){var n,i,a,o=e||"unnamed",s=r;for(a=0;a<t.length;a++){var u=s.filter(function(e){var r=y(v(e,a));return(a<e.params.length||h(e.params))&&r(t[a])});if(0===u.length){if((i=N(s,a)).length>0){var c=l(t[a]);return(n=new TypeError("Unexpected type of argument in function "+o+" (expected: "+i.join(" or ")+", actual: "+c+", index: "+a+")")).data={category:"wrongType",fn:o,index:a,actual:c,expected:i},n}}else s=u}var f=s.map(function(e){return h(e.params)?1/0:e.params.length});if(t.length<Math.min.apply(null,f))return i=N(s,a),(n=new TypeError("Too few arguments in function "+o+" (expected: "+i.join(" or ")+", index: "+t.length+")")).data={category:"tooFewArgs",fn:o,index:t.length,expected:i},n;var p=Math.max.apply(null,f);return t.length>p?((n=new TypeError("Too many arguments in function "+o+" (expected: "+p+", actual: "+t.length+")")).data={category:"tooManyArgs",fn:o,index:t.length,expectedLength:p},n):((n=new TypeError('Arguments of type "'+t.join(", ")+'" do not match any of the defined signatures of function '+o+".")).data={category:"mismatch",actual:t.map(l)},n)}(e,arguments,a)},fe=function(e,t){return arguments.length===te&&T(e)&&j(t)?J.apply(null,arguments):arguments.length===re&&z(e)&&H(t)?Y.apply(null,arguments):arguments.length===ne&&P(e)&&$(t)?X.apply(null,arguments):arguments.length===ie&&q(e)&&G(t)?Q.apply(null,arguments):arguments.length===ae&&L(e)&&V(t)?K.apply(null,arguments):arguments.length===oe&&F(e)&&Z(t)?ee.apply(null,arguments):ce.apply(null,arguments)};try{Object.defineProperty(fe,"name",{value:e})}catch(e){}return fe.signatures=(o={},a.forEach(function(e){e.params.some(d)||S(e.params,!0).forEach(function(t){o[p(t)]=e.fn})}),o),fe}function T(e){return-1===u.ignore.indexOf(e)}function C(e){return e.trim()}function z(e){return!!e}function B(e){return null!==e}function I(e){return 0===e.types.length}function P(e){return e[e.length-1]}function R(e,t,r){return Array.prototype.slice.call(e,t,r)}function U(e,t){for(var r=0;r<e.length;r++)if(n=t,i=e[r],-1!==n.indexOf(i))return!0;var n,i;return!1}function k(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return e[r]}function D(e,t){return Array.prototype.concat.apply([],e.map(t))}function q(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(n.signatures&&""!==n.name)if(""===t)t=n.name;else if(t!==n.name){var i=new Error("Function names do not match (expected: "+t+", actual: "+n.name+")");throw i.data={actual:n.name,expected:t},i}}return t}return(u=_("typed",{"string, Object":_,Object:function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return _(q(t),e)},"...Function":function(e){for(var t,r=q(e),n={},i=0;i<e.length;i++){var a=e[i];if("object"!=typeof a.signatures)throw(t=new TypeError("Function is no typed-function (index: "+i+")")).data={index:i},t;for(var o in a.signatures)if(a.signatures.hasOwnProperty(o))if(n.hasOwnProperty(o)){if(a.signatures[o]!==n[o])throw(t=new Error('Signature "'+o+'" is defined twice')).data={signature:o},t}else n[o]=a.signatures[o]}return _(r,n)}})).create=n,u.types=i,u.conversions=s,u.ignore=o,u.convert=function(e,t){var r=l(e);if(t===r)return e;for(var n=0;n<u.conversions.length;n++){var i=u.conversions[n];if(i.from===r&&i.to===t)return i.convert(e)}throw new Error("Cannot convert from "+r+" to "+t)},u.find=function(e,t){if(!e.signatures)throw new TypeError("Function is no typed-function");var r;if("string"==typeof t){r=t.split(",");for(var n=0;n<r.length;n++)r[n]=r[n].trim()}else{if(!Array.isArray(t))throw new TypeError("String array or a comma separated string expected");r=t}var i=r.join(","),a=e.signatures[i];if(a)return a;throw new TypeError("Signature not found (signature: "+(e.name||"unnamed")+"("+r.join(", ")+"))")},u.addType=function(e){if(!e||"string"!=typeof e.name||"function"!=typeof e.test)throw new TypeError("Object with properties {name: string, test: function} expected");u.types.push(e)},u.addConversion=function(e){if(!e||"string"!=typeof e.from||"string"!=typeof e.to||"function"!=typeof e.convert)throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");u.conversions.push(e)},u}()})?n.apply(t,i):n)||(e.exports=a)},function(e,t){function r(){}r.prototype={on:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this;function i(){n.off(e,i),t.apply(r,arguments)}return i._=t,this.on(e,i,r)},emit:function(e){for(var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,i=r.length;n<i;n++)r[n].fn.apply(r[n].ctx,t);return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],i=[];if(n&&t)for(var a=0,o=n.length;a<o;a++)n[a].fn!==t&&n[a].fn._!==t&&i.push(n[a]);return i.length?r[e]=i:delete r[e],this}},e.exports=r},function(e,t,r){"use strict";var n=r(5).lazy,i=r(5).isFactory,a=r(5).traverse,o=r(44);t.math=!0,t.name="import",t.factory=function(e,t,r,s,u){function c(e,t,r){if(r.wrap&&"function"==typeof t&&(i=function(){for(var e=[],t=0,r=arguments.length;t<r;t++){var i=arguments[t];e[t]=i&&i.valueOf()}return n.apply(u,e)},(n=t).transform&&(i.transform=n.transform),t=i),p(u[e])&&p(t))return t=r.override?s(e,t.signatures):s(u[e],t),u[e]=t,f(e,t),void u.emit("import",e,function(){return t});var n,i;if(void 0===u[e]||r.override)return u[e]=t,f(e,t),void u.emit("import",e,function(){return t});if(!r.silent)throw new Error('Cannot import "'+e+'": already exists')}function f(e,t){t&&"function"==typeof t.transform?(u.expression.transform[e]=t.transform,m(e)&&(u.expression.mathWithTransform[e]=t.transform)):(delete u.expression.transform[e],m(e)&&(u.expression.mathWithTransform[e]=t))}function l(e,t){if("string"==typeof e.name){var i=e.name,o=i in u.expression.transform,c=e.path?a(u,e.path):u,f=c.hasOwnProperty(i)?c[i]:void 0,l=function(){var n=r(e);if(n&&"function"==typeof n.transform)throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');if(p(f)&&p(n))return t.override||(n=s(f,n)),n;if(void 0===f||t.override)return n;if(!t.silent)throw new Error('Cannot import "'+i+'": already exists')};!1!==e.lazy?(n(c,i,l),o||("expression.transform"===e.path||h(e))&&n(u.expression.mathWithTransform,i,l)):(c[i]=l(),o||("expression.transform"===e.path||h(e))&&(u.expression.mathWithTransform[i]=l())),u.emit("import",i,l,e.path)}else r(e)}function p(e){return"function"==typeof e&&"object"==typeof e.signatures}function m(e){return!d.hasOwnProperty(e)}function h(e){return void 0===e.path&&!d.hasOwnProperty(e.name)}var d={expression:!0,type:!0,docs:!0,error:!0,json:!0,chain:!0};return function t(r,n){var a,s=arguments.length;if(1!==s&&2!==s)throw new o("import",s,1,2);if(n||(n={}),i(r))l(r,n);else if(Array.isArray(r))r.forEach(function(e){t(e,n)});else if("object"==typeof r){for(var u in r)if(r.hasOwnProperty(u)){var f=r[u];"function"==typeof(a=f)||"number"==typeof a||"string"==typeof a||"boolean"==typeof a||null===a||a&&e.isUnit(a)||a&&e.isComplex(a)||a&&e.isBigNumber(a)||a&&e.isFraction(a)||a&&e.isMatrix(a)||a&&Array.isArray(a)?c(u,f,n):i(r)?l(r,n):t(f,n)}}else if(!n.silent)throw new TypeError("Factory, Object, or Array expected")}},t.lazy=!0},function(e,t,r){"use strict";var n=r(5);function i(e,t,r){if(void 0!==e[t]&&(o=r,s=e[t],-1===o.indexOf(s))){var n=(i=r,a=e[t],i.map(function(e){return e.toLowerCase()}).indexOf(a.toLowerCase()));-1!==n?(console.warn('Warning: Wrong casing for configuration option "'+t+'", should be "'+r[n]+'" instead of "'+e[t]+'".'),e[t]=r[n]):console.warn('Warning: Unknown value "'+e[t]+'" for configuration option "'+t+'". Available options: '+r.map(JSON.stringify).join(", ")+".")}var i,a,o,s}t.name="config",t.math=!0,t.factory=function(e,t,r,a,o){var s=["Matrix","Array"],u=["number","BigNumber","Fraction"];function c(e){if(e){var r=n.map(t,n.clone);i(e,"matrix",s),i(e,"number",u),n.deepExtend(t,e);var a=n.map(t,n.clone),c=n.map(e,n.clone);return o.emit("config",a,r,c),a}return n.map(t,n.clone)}return c.MATRIX=s,c.NUMBER=u,c}},function(e,t,r){e.exports=[r(158),r(191),r(193),r(405),r(548),r(550)]},function(e,t,r){e.exports=[r(159),r(163),r(164),r(168),r(172),r(175),r(75),r(183),r(184),r(185)]},function(e,t,r){e.exports=[r(160),r(162)]},function(e,t,r){var n=r(161);t.name="BigNumber",t.path="type",t.factory=function(e,t,r,i,a){var o=n.clone({precision:t.precision});return o.prototype.type="BigNumber",o.prototype.isBigNumber=!0,o.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},o.fromJSON=function(e){return new o(e.value)},a.on("config",function(e,t){e.precision!==t.precision&&o.config({precision:e.precision})}),o},t.math=!0},function(e,t,r){var n;!function(i){"use strict";var a,o,s,u=9e15,c=1e9,f="0123456789abcdef",l="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",p="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",m={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-u,maxE:u,crypto:!1},h=!0,d="[DecimalError] ",y=d+"Invalid argument: ",g=d+"Precision limit exceeded",v=d+"crypto unavailable",x=Math.floor,w=Math.pow,b=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,N=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,M=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,E=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,A=1e7,O=7,S=l.length-1,_=p.length-1,T={name:"[object Decimal]"};function C(e){var t,r,n,i=e.length-1,a="",o=e[0];if(i>0){for(a+=o,t=1;t<i;t++)n=e[t]+"",(r=O-n.length)&&(a+=F(r)),a+=n;o=e[t],(r=O-(n=o+"").length)&&(a+=F(r))}else if(0===o)return"0";for(;o%10==0;)o/=10;return a+o}function z(e,t,r){if(e!==~~e||e<t||e>r)throw Error(y+e)}function B(e,t,r,n){var i,a,o,s;for(a=e[0];a>=10;a/=10)--t;return--t<0?(t+=O,i=0):(i=Math.ceil((t+1)/O),t%=O),a=w(10,O-t),s=e[i]%a|0,null==n?t<3?(0==t?s=s/100|0:1==t&&(s=s/10|0),o=r<4&&99999==s||r>3&&49999==s||5e4==s||0==s):o=(r<4&&s+1==a||r>3&&s+1==a/2)&&(e[i+1]/a/100|0)==w(10,t-2)-1||(s==a/2||0==s)&&0==(e[i+1]/a/100|0):t<4?(0==t?s=s/1e3|0:1==t?s=s/100|0:2==t&&(s=s/10|0),o=(n||r<4)&&9999==s||!n&&r>3&&4999==s):o=((n||r<4)&&s+1==a||!n&&r>3&&s+1==a/2)&&(e[i+1]/a/1e3|0)==w(10,t-3)-1,o}function I(e,t,r){for(var n,i,a=[0],o=0,s=e.length;o<s;){for(i=a.length;i--;)a[i]*=t;for(a[0]+=f.indexOf(e.charAt(o++)),n=0;n<a.length;n++)a[n]>r-1&&(void 0===a[n+1]&&(a[n+1]=0),a[n+1]+=a[n]/r|0,a[n]%=r)}return a.reverse()}T.absoluteValue=T.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),R(e)},T.ceil=function(){return R(new this.constructor(this),this.e+1,2)},T.comparedTo=T.cmp=function(e){var t,r,n,i,a=this.d,o=(e=new this.constructor(e)).d,s=this.s,u=e.s;if(!a||!o)return s&&u?s!==u?s:a===o?0:!a^s<0?1:-1:NaN;if(!a[0]||!o[0])return a[0]?s:o[0]?-u:0;if(s!==u)return s;if(this.e!==e.e)return this.e>e.e^s<0?1:-1;for(t=0,r=(n=a.length)<(i=o.length)?n:i;t<r;++t)if(a[t]!==o[t])return a[t]>o[t]^s<0?1:-1;return n===i?0:n>i^s<0?1:-1},T.cosine=T.cos=function(){var e,t,r=this,n=r.constructor;return r.d?r.d[0]?(e=n.precision,t=n.rounding,n.precision=e+Math.max(r.e,r.sd())+O,n.rounding=1,r=function(e,t){var r,n,i=t.d.length;i<32?(r=Math.ceil(i/3),n=Math.pow(4,-r).toString()):(r=16,n="2.3283064365386962890625e-10");e.precision+=r,t=J(e,1,t.times(n),new e(1));for(var a=r;a--;){var o=t.times(t);t=o.times(o).minus(o).times(8).plus(1)}return e.precision-=r,t}(n,Y(n,r)),n.precision=e,n.rounding=t,R(2==s||3==s?r.neg():r,e,t,!0)):new n(1):new n(NaN)},T.cubeRoot=T.cbrt=function(){var e,t,r,n,i,a,o,s,u,c,f=this,l=f.constructor;if(!f.isFinite()||f.isZero())return new l(f);for(h=!1,(a=f.s*Math.pow(f.s*f,1/3))&&Math.abs(a)!=1/0?n=new l(a.toString()):(r=C(f.d),(a=((e=f.e)-r.length+1)%3)&&(r+=1==a||-2==a?"0":"00"),a=Math.pow(r,1/3),e=x((e+1)/3)-(e%3==(e<0?-1:2)),(n=new l(r=a==1/0?"5e"+e:(r=a.toExponential()).slice(0,r.indexOf("e")+1)+e)).s=f.s),o=(e=l.precision)+3;;)if(c=(u=(s=n).times(s).times(s)).plus(f),n=P(c.plus(f).times(s),c.plus(u),o+2,1),C(s.d).slice(0,o)===(r=C(n.d)).slice(0,o)){if("9999"!=(r=r.slice(o-3,o+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(R(n,e+1,1),t=!n.times(n).times(n).eq(f));break}if(!i&&(R(s,e+1,0),s.times(s).times(s).eq(f))){n=s;break}o+=4,i=1}return h=!0,R(n,e,l.rounding,t)},T.decimalPlaces=T.dp=function(){var e,t=this.d,r=NaN;if(t){if(r=((e=t.length-1)-x(this.e/O))*O,e=t[e])for(;e%10==0;e/=10)r--;r<0&&(r=0)}return r},T.dividedBy=T.div=function(e){return P(this,new this.constructor(e))},T.dividedToIntegerBy=T.divToInt=function(e){var t=this.constructor;return R(P(this,new t(e),0,1,1),t.precision,t.rounding)},T.equals=T.eq=function(e){return 0===this.cmp(e)},T.floor=function(){return R(new this.constructor(this),this.e+1,3)},T.greaterThan=T.gt=function(e){return this.cmp(e)>0},T.greaterThanOrEqualTo=T.gte=function(e){var t=this.cmp(e);return 1==t||0===t},T.hyperbolicCosine=T.cosh=function(){var e,t,r,n,i,a=this,o=a.constructor,s=new o(1);if(!a.isFinite())return new o(a.s?1/0:NaN);if(a.isZero())return s;r=o.precision,n=o.rounding,o.precision=r+Math.max(a.e,a.sd())+4,o.rounding=1,(i=a.d.length)<32?(e=Math.ceil(i/3),t=Math.pow(4,-e).toString()):(e=16,t="2.3283064365386962890625e-10"),a=J(o,1,a.times(t),new o(1),!0);for(var u,c=e,f=new o(8);c--;)u=a.times(a),a=s.minus(u.times(f.minus(u.times(f))));return R(a,o.precision=r,o.rounding=n,!0)},T.hyperbolicSine=T.sinh=function(){var e,t,r,n,i=this,a=i.constructor;if(!i.isFinite()||i.isZero())return new a(i);if(t=a.precision,r=a.rounding,a.precision=t+Math.max(i.e,i.sd())+4,a.rounding=1,(n=i.d.length)<3)i=J(a,2,i,i,!0);else{e=(e=1.4*Math.sqrt(n))>16?16:0|e,i=J(a,2,i=i.times(Math.pow(5,-e)),i,!0);for(var o,s=new a(5),u=new a(16),c=new a(20);e--;)o=i.times(i),i=i.times(s.plus(o.times(u.times(o).plus(c))))}return a.precision=t,a.rounding=r,R(i,t,r,!0)},T.hyperbolicTangent=T.tanh=function(){var e,t,r=this.constructor;return this.isFinite()?this.isZero()?new r(this):(e=r.precision,t=r.rounding,r.precision=e+7,r.rounding=1,P(this.sinh(),this.cosh(),r.precision=e,r.rounding=t)):new r(this.s)},T.inverseCosine=T.acos=function(){var e,t=this,r=t.constructor,n=t.abs().cmp(1),i=r.precision,a=r.rounding;return-1!==n?0===n?t.isNeg()?q(r,i,a):new r(0):new r(NaN):t.isZero()?q(r,i+4,a).times(.5):(r.precision=i+6,r.rounding=1,t=t.asin(),e=q(r,i+4,a).times(.5),r.precision=i,r.rounding=a,e.minus(t))},T.inverseHyperbolicCosine=T.acosh=function(){var e,t,r=this,n=r.constructor;return r.lte(1)?new n(r.eq(1)?0:NaN):r.isFinite()?(e=n.precision,t=n.rounding,n.precision=e+Math.max(Math.abs(r.e),r.sd())+4,n.rounding=1,h=!1,r=r.times(r).minus(1).sqrt().plus(r),h=!0,n.precision=e,n.rounding=t,r.ln()):new n(r)},T.inverseHyperbolicSine=T.asinh=function(){var e,t,r=this,n=r.constructor;return!r.isFinite()||r.isZero()?new n(r):(e=n.precision,t=n.rounding,n.precision=e+2*Math.max(Math.abs(r.e),r.sd())+6,n.rounding=1,h=!1,r=r.times(r).plus(1).sqrt().plus(r),h=!0,n.precision=e,n.rounding=t,r.ln())},T.inverseHyperbolicTangent=T.atanh=function(){var e,t,r,n,i=this,a=i.constructor;return i.isFinite()?i.e>=0?new a(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(e=a.precision,t=a.rounding,n=i.sd(),Math.max(n,e)<2*-i.e-1?R(new a(i),e,t,!0):(a.precision=r=n-i.e,i=P(i.plus(1),new a(1).minus(i),r+e,1),a.precision=e+4,a.rounding=1,i=i.ln(),a.precision=e,a.rounding=t,i.times(.5))):new a(NaN)},T.inverseSine=T.asin=function(){var e,t,r,n,i=this,a=i.constructor;return i.isZero()?new a(i):(t=i.abs().cmp(1),r=a.precision,n=a.rounding,-1!==t?0===t?((e=q(a,r+4,n).times(.5)).s=i.s,e):new a(NaN):(a.precision=r+6,a.rounding=1,i=i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(),a.precision=r,a.rounding=n,i.times(2)))},T.inverseTangent=T.atan=function(){var e,t,r,n,i,a,o,s,u,c=this,f=c.constructor,l=f.precision,p=f.rounding;if(c.isFinite()){if(c.isZero())return new f(c);if(c.abs().eq(1)&&l+4<=_)return(o=q(f,l+4,p).times(.25)).s=c.s,o}else{if(!c.s)return new f(NaN);if(l+4<=_)return(o=q(f,l+4,p).times(.5)).s=c.s,o}for(f.precision=s=l+10,f.rounding=1,e=r=Math.min(28,s/O+2|0);e;--e)c=c.div(c.times(c).plus(1).sqrt().plus(1));for(h=!1,t=Math.ceil(s/O),n=1,u=c.times(c),o=new f(c),i=c;-1!==e;)if(i=i.times(u),a=o.minus(i.div(n+=2)),i=i.times(u),void 0!==(o=a.plus(i.div(n+=2))).d[t])for(e=t;o.d[e]===a.d[e]&&e--;);return r&&(o=o.times(2<<r-1)),h=!0,R(o,f.precision=l,f.rounding=p,!0)},T.isFinite=function(){return!!this.d},T.isInteger=T.isInt=function(){return!!this.d&&x(this.e/O)>this.d.length-2},T.isNaN=function(){return!this.s},T.isNegative=T.isNeg=function(){return this.s<0},T.isPositive=T.isPos=function(){return this.s>0},T.isZero=function(){return!!this.d&&0===this.d[0]},T.lessThan=T.lt=function(e){return this.cmp(e)<0},T.lessThanOrEqualTo=T.lte=function(e){return this.cmp(e)<1},T.logarithm=T.log=function(e){var t,r,n,i,a,o,s,u,c=this.constructor,f=c.precision,l=c.rounding;if(null==e)e=new c(10),t=!0;else{if(r=(e=new c(e)).d,e.s<0||!r||!r[0]||e.eq(1))return new c(NaN);t=e.eq(10)}if(r=this.d,this.s<0||!r||!r[0]||this.eq(1))return new c(r&&!r[0]?-1/0:1!=this.s?NaN:r?0:1/0);if(t)if(r.length>1)a=!0;else{for(i=r[0];i%10==0;)i/=10;a=1!==i}if(h=!1,o=V(this,s=f+5),n=t?D(c,s+10):V(e,s),B((u=P(o,n,s,1)).d,i=f,l))do{if(o=V(this,s+=10),n=t?D(c,s+10):V(e,s),u=P(o,n,s,1),!a){+C(u.d).slice(i+1,i+15)+1==1e14&&(u=R(u,f+1,0));break}}while(B(u.d,i+=10,l));return h=!0,R(u,f,l)},T.minus=T.sub=function(e){var t,r,n,i,a,o,s,u,c,f,l,p,m=this,d=m.constructor;if(e=new d(e),!m.d||!e.d)return m.s&&e.s?m.d?e.s=-e.s:e=new d(e.d||m.s!==e.s?m:NaN):e=new d(NaN),e;if(m.s!=e.s)return e.s=-e.s,m.plus(e);if(c=m.d,p=e.d,s=d.precision,u=d.rounding,!c[0]||!p[0]){if(p[0])e.s=-e.s;else{if(!c[0])return new d(3===u?-0:0);e=new d(m)}return h?R(e,s,u):e}if(r=x(e.e/O),f=x(m.e/O),c=c.slice(),a=f-r){for((l=a<0)?(t=c,a=-a,o=p.length):(t=p,r=f,o=c.length),a>(n=Math.max(Math.ceil(s/O),o)+2)&&(a=n,t.length=1),t.reverse(),n=a;n--;)t.push(0);t.reverse()}else{for((l=(n=c.length)<(o=p.length))&&(o=n),n=0;n<o;n++)if(c[n]!=p[n]){l=c[n]<p[n];break}a=0}for(l&&(t=c,c=p,p=t,e.s=-e.s),o=c.length,n=p.length-o;n>0;--n)c[o++]=0;for(n=p.length;n>a;){if(c[--n]<p[n]){for(i=n;i&&0===c[--i];)c[i]=A-1;--c[i],c[n]+=A}c[n]-=p[n]}for(;0===c[--o];)c.pop();for(;0===c[0];c.shift())--r;return c[0]?(e.d=c,e.e=k(c,r),h?R(e,s,u):e):new d(3===u?-0:0)},T.modulo=T.mod=function(e){var t,r=this.constructor;return e=new r(e),!this.d||!e.s||e.d&&!e.d[0]?new r(NaN):!e.d||this.d&&!this.d[0]?R(new r(this),r.precision,r.rounding):(h=!1,9==r.modulo?(t=P(this,e.abs(),0,3,1)).s*=e.s:t=P(this,e,0,r.modulo,1),t=t.times(e),h=!0,this.minus(t))},T.naturalExponential=T.exp=function(){return G(this)},T.naturalLogarithm=T.ln=function(){return V(this)},T.negated=T.neg=function(){var e=new this.constructor(this);return e.s=-e.s,R(e)},T.plus=T.add=function(e){var t,r,n,i,a,o,s,u,c,f,l=this,p=l.constructor;if(e=new p(e),!l.d||!e.d)return l.s&&e.s?l.d||(e=new p(e.d||l.s===e.s?l:NaN)):e=new p(NaN),e;if(l.s!=e.s)return e.s=-e.s,l.minus(e);if(c=l.d,f=e.d,s=p.precision,u=p.rounding,!c[0]||!f[0])return f[0]||(e=new p(l)),h?R(e,s,u):e;if(a=x(l.e/O),n=x(e.e/O),c=c.slice(),i=a-n){for(i<0?(r=c,i=-i,o=f.length):(r=f,n=a,o=c.length),i>(o=(a=Math.ceil(s/O))>o?a+1:o+1)&&(i=o,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for((o=c.length)-(i=f.length)<0&&(i=o,r=f,f=c,c=r),t=0;i;)t=(c[--i]=c[i]+f[i]+t)/A|0,c[i]%=A;for(t&&(c.unshift(t),++n),o=c.length;0==c[--o];)c.pop();return e.d=c,e.e=k(c,n),h?R(e,s,u):e},T.precision=T.sd=function(e){var t;if(void 0!==e&&e!==!!e&&1!==e&&0!==e)throw Error(y+e);return this.d?(t=L(this.d),e&&this.e+1>t&&(t=this.e+1)):t=NaN,t},T.round=function(){var e=this.constructor;return R(new e(this),this.e+1,e.rounding)},T.sine=T.sin=function(){var e,t,r=this,n=r.constructor;return r.isFinite()?r.isZero()?new n(r):(e=n.precision,t=n.rounding,n.precision=e+Math.max(r.e,r.sd())+O,n.rounding=1,r=function(e,t){var r,n=t.d.length;if(n<3)return J(e,2,t,t);r=(r=1.4*Math.sqrt(n))>16?16:0|r,t=t.times(Math.pow(5,-r)),t=J(e,2,t,t);for(var i,a=new e(5),o=new e(16),s=new e(20);r--;)i=t.times(t),t=t.times(a.plus(i.times(o.times(i).minus(s))));return t}(n,Y(n,r)),n.precision=e,n.rounding=t,R(s>2?r.neg():r,e,t,!0)):new n(NaN)},T.squareRoot=T.sqrt=function(){var e,t,r,n,i,a,o=this.d,s=this.e,u=this.s,c=this.constructor;if(1!==u||!o||!o[0])return new c(!u||u<0&&(!o||o[0])?NaN:o?this:1/0);for(h=!1,0==(u=Math.sqrt(+this))||u==1/0?(((t=C(o)).length+s)%2==0&&(t+="0"),u=Math.sqrt(t),s=x((s+1)/2)-(s<0||s%2),n=new c(t=u==1/0?"1e"+s:(t=u.toExponential()).slice(0,t.indexOf("e")+1)+s)):n=new c(u.toString()),r=(s=c.precision)+3;;)if(n=(a=n).plus(P(this,a,r+2,1)).times(.5),C(a.d).slice(0,r)===(t=C(n.d)).slice(0,r)){if("9999"!=(t=t.slice(r-3,r+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(R(n,s+1,1),e=!n.times(n).eq(this));break}if(!i&&(R(a,s+1,0),a.times(a).eq(this))){n=a;break}r+=4,i=1}return h=!0,R(n,s,c.rounding,e)},T.tangent=T.tan=function(){var e,t,r=this,n=r.constructor;return r.isFinite()?r.isZero()?new n(r):(e=n.precision,t=n.rounding,n.precision=e+10,n.rounding=1,(r=r.sin()).s=1,r=P(r,new n(1).minus(r.times(r)).sqrt(),e+10,0),n.precision=e,n.rounding=t,R(2==s||4==s?r.neg():r,e,t,!0)):new n(NaN)},T.times=T.mul=function(e){var t,r,n,i,a,o,s,u,c,f=this.constructor,l=this.d,p=(e=new f(e)).d;if(e.s*=this.s,!(l&&l[0]&&p&&p[0]))return new f(!e.s||l&&!l[0]&&!p||p&&!p[0]&&!l?NaN:l&&p?0*e.s:e.s/0);for(r=x(this.e/O)+x(e.e/O),(u=l.length)<(c=p.length)&&(a=l,l=p,p=a,o=u,u=c,c=o),a=[],n=o=u+c;n--;)a.push(0);for(n=c;--n>=0;){for(t=0,i=u+n;i>n;)s=a[i]+p[n]*l[i-n-1]+t,a[i--]=s%A|0,t=s/A|0;a[i]=(a[i]+t)%A|0}for(;!a[--o];)a.pop();return t?++r:a.shift(),e.d=a,e.e=k(a,r),h?R(e,f.precision,f.rounding):e},T.toBinary=function(e,t){return X(this,2,e,t)},T.toDecimalPlaces=T.toDP=function(e,t){var r=this,n=r.constructor;return r=new n(r),void 0===e?r:(z(e,0,c),void 0===t?t=n.rounding:z(t,0,8),R(r,e+r.e+1,t))},T.toExponential=function(e,t){var r,n=this,i=n.constructor;return void 0===e?r=U(n,!0):(z(e,0,c),void 0===t?t=i.rounding:z(t,0,8),r=U(n=R(new i(n),e+1,t),!0,e+1)),n.isNeg()&&!n.isZero()?"-"+r:r},T.toFixed=function(e,t){var r,n,i=this.constructor;return void 0===e?r=U(this):(z(e,0,c),void 0===t?t=i.rounding:z(t,0,8),r=U(n=R(new i(this),e+this.e+1,t),!1,e+n.e+1)),this.isNeg()&&!this.isZero()?"-"+r:r},T.toFraction=function(e){var t,r,n,i,a,o,s,u,c,f,l,p,m=this.d,d=this.constructor;if(!m)return new d(this);if(c=r=new d(1),o=(a=(t=new d(n=u=new d(0))).e=L(m)-this.e-1)%O,t.d[0]=w(10,o<0?O+o:o),null==e)e=a>0?t:c;else{if(!(s=new d(e)).isInt()||s.lt(c))throw Error(y+s);e=s.gt(t)?a>0?t:c:s}for(h=!1,s=new d(C(m)),f=d.precision,d.precision=a=m.length*O*2;l=P(s,t,0,1,1),1!=(i=r.plus(l.times(n))).cmp(e);)r=n,n=i,i=c,c=u.plus(l.times(i)),u=i,i=t,t=s.minus(l.times(i)),s=i;return i=P(e.minus(r),n,0,1,1),u=u.plus(i.times(c)),r=r.plus(i.times(n)),u.s=c.s=this.s,p=P(c,n,a,1).minus(this).abs().cmp(P(u,r,a,1).minus(this).abs())<1?[c,n]:[u,r],d.precision=f,h=!0,p},T.toHexadecimal=T.toHex=function(e,t){return X(this,16,e,t)},T.toNearest=function(e,t){var r=this,n=r.constructor;if(r=new n(r),null==e){if(!r.d)return r;e=new n(1),t=n.rounding}else{if(e=new n(e),void 0!==t&&z(t,0,8),!r.d)return e.s?r:e;if(!e.d)return e.s&&(e.s=r.s),e}return e.d[0]?(h=!1,t<4&&(t=[4,5,7,8][t]),r=P(r,e,0,t,1).times(e),h=!0,R(r)):(e.s=r.s,r=e),r},T.toNumber=function(){return+this},T.toOctal=function(e,t){return X(this,8,e,t)},T.toPower=T.pow=function(e){var t,r,n,i,a,o,s=this,u=s.constructor,c=+(e=new u(e));if(!(s.d&&e.d&&s.d[0]&&e.d[0]))return new u(w(+s,c));if((s=new u(s)).eq(1))return s;if(n=u.precision,a=u.rounding,e.eq(1))return R(s,n,a);if((t=x(e.e/O))>=e.d.length-1&&(r=c<0?-c:c)<=9007199254740991)return i=j(u,s,r,n),e.s<0?new u(1).div(i):R(i,n,a);if((o=s.s)<0){if(t<e.d.length-1)return new u(NaN);if(0==(1&e.d[t])&&(o=1),0==s.e&&1==s.d[0]&&1==s.d.length)return s.s=o,s}return(t=0!=(r=w(+s,c))&&isFinite(r)?new u(r+"").e:x(c*(Math.log("0."+C(s.d))/Math.LN10+s.e+1)))>u.maxE+1||t<u.minE-1?new u(t>0?o/0:0):(h=!1,u.rounding=s.s=1,r=Math.min(12,(t+"").length),(i=G(e.times(V(s,n+r)),n)).d&&B((i=R(i,n+5,1)).d,n,a)&&(t=n+10,+C((i=R(G(e.times(V(s,t+r)),t),t+5,1)).d).slice(n+1,n+15)+1==1e14&&(i=R(i,n+1,0))),i.s=o,h=!0,u.rounding=a,R(i,n,a))},T.toPrecision=function(e,t){var r,n=this,i=n.constructor;return void 0===e?r=U(n,n.e<=i.toExpNeg||n.e>=i.toExpPos):(z(e,1,c),void 0===t?t=i.rounding:z(t,0,8),r=U(n=R(new i(n),e,t),e<=n.e||n.e<=i.toExpNeg,e)),n.isNeg()&&!n.isZero()?"-"+r:r},T.toSignificantDigits=T.toSD=function(e,t){var r=this.constructor;return void 0===e?(e=r.precision,t=r.rounding):(z(e,1,c),void 0===t?t=r.rounding:z(t,0,8)),R(new r(this),e,t)},T.toString=function(){var e=this.constructor,t=U(this,this.e<=e.toExpNeg||this.e>=e.toExpPos);return this.isNeg()&&!this.isZero()?"-"+t:t},T.truncated=T.trunc=function(){return R(new this.constructor(this),this.e+1,1)},T.valueOf=T.toJSON=function(){var e=this.constructor,t=U(this,this.e<=e.toExpNeg||this.e>=e.toExpPos);return this.isNeg()?"-"+t:t};var P=function(){function e(e,t,r){var n,i=0,a=e.length;for(e=e.slice();a--;)n=e[a]*t+i,e[a]=n%r|0,i=n/r|0;return i&&e.unshift(i),e}function t(e,t,r,n){var i,a;if(r!=n)a=r>n?1:-1;else for(i=a=0;i<r;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;)e.shift()}return function(n,i,a,s,u,c){var f,l,p,m,h,d,y,g,v,w,b,N,M,E,S,_,T,C,z,B,I=n.constructor,P=n.s==i.s?1:-1,U=n.d,k=i.d;if(!(U&&U[0]&&k&&k[0]))return new I(n.s&&i.s&&(U?!k||U[0]!=k[0]:k)?U&&0==U[0]||!k?0*P:P/0:NaN);for(c?(h=1,l=n.e-i.e):(c=A,h=O,l=x(n.e/h)-x(i.e/h)),z=k.length,T=U.length,w=(v=new I(P)).d=[],p=0;k[p]==(U[p]||0);p++);if(k[p]>(U[p]||0)&&l--,null==a?(E=a=I.precision,s=I.rounding):E=u?a+(n.e-i.e)+1:a,E<0)w.push(1),d=!0;else{if(E=E/h+2|0,p=0,1==z){for(m=0,k=k[0],E++;(p<T||m)&&E--;p++)S=m*c+(U[p]||0),w[p]=S/k|0,m=S%k|0;d=m||p<T}else{for((m=c/(k[0]+1)|0)>1&&(k=e(k,m,c),U=e(U,m,c),z=k.length,T=U.length),_=z,N=(b=U.slice(0,z)).length;N<z;)b[N++]=0;for((B=k.slice()).unshift(0),C=k[0],k[1]>=c/2&&++C;m=0,(f=t(k,b,z,N))<0?(M=b[0],z!=N&&(M=M*c+(b[1]||0)),(m=M/C|0)>1?(m>=c&&(m=c-1),1==(f=t(y=e(k,m,c),b,g=y.length,N=b.length))&&(m--,r(y,z<g?B:k,g,c))):(0==m&&(f=m=1),y=k.slice()),(g=y.length)<N&&y.unshift(0),r(b,y,N,c),-1==f&&(f=t(k,b,z,N=b.length))<1&&(m++,r(b,z<N?B:k,N,c)),N=b.length):0===f&&(m++,b=[0]),w[p++]=m,f&&b[0]?b[N++]=U[_]||0:(b=[U[_]],N=1),(_++<T||void 0!==b[0])&&E--;);d=void 0!==b[0]}w[0]||w.shift()}if(1==h)v.e=l,o=d;else{for(p=1,m=w[0];m>=10;m/=10)p++;v.e=p+l*h-1,R(v,u?a+v.e+1:a,s,d)}return v}}();function R(e,t,r,n){var i,a,o,s,u,c,f,l,p,m=e.constructor;e:if(null!=t){if(!(l=e.d))return e;for(i=1,s=l[0];s>=10;s/=10)i++;if((a=t-i)<0)a+=O,o=t,u=(f=l[p=0])/w(10,i-o-1)%10|0;else if((p=Math.ceil((a+1)/O))>=(s=l.length)){if(!n)break e;for(;s++<=p;)l.push(0);f=u=0,i=1,o=(a%=O)-O+1}else{for(f=s=l[p],i=1;s>=10;s/=10)i++;u=(o=(a%=O)-O+i)<0?0:f/w(10,i-o-1)%10|0}if(n=n||t<0||void 0!==l[p+1]||(o<0?f:f%w(10,i-o-1)),c=r<4?(u||n)&&(0==r||r==(e.s<0?3:2)):u>5||5==u&&(4==r||n||6==r&&(a>0?o>0?f/w(10,i-o):0:l[p-1])%10&1||r==(e.s<0?8:7)),t<1||!l[0])return l.length=0,c?(t-=e.e+1,l[0]=w(10,(O-t%O)%O),e.e=-t||0):l[0]=e.e=0,e;if(0==a?(l.length=p,s=1,p--):(l.length=p+1,s=w(10,O-a),l[p]=o>0?(f/w(10,i-o)%w(10,o)|0)*s:0),c)for(;;){if(0==p){for(a=1,o=l[0];o>=10;o/=10)a++;for(o=l[0]+=s,s=1;o>=10;o/=10)s++;a!=s&&(e.e++,l[0]==A&&(l[0]=1));break}if(l[p]+=s,l[p]!=A)break;l[p--]=0,s=1}for(a=l.length;0===l[--a];)l.pop()}return h&&(e.e>m.maxE?(e.d=null,e.e=NaN):e.e<m.minE&&(e.e=0,e.d=[0])),e}function U(e,t,r){if(!e.isFinite())return Z(e);var n,i=e.e,a=C(e.d),o=a.length;return t?(r&&(n=r-o)>0?a=a.charAt(0)+"."+a.slice(1)+F(n):o>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(e.e<0?"e":"e+")+e.e):i<0?(a="0."+F(-i-1)+a,r&&(n=r-o)>0&&(a+=F(n))):i>=o?(a+=F(i+1-o),r&&(n=r-i-1)>0&&(a=a+"."+F(n))):((n=i+1)<o&&(a=a.slice(0,n)+"."+a.slice(n)),r&&(n=r-o)>0&&(i+1===o&&(a+="."),a+=F(n))),a}function k(e,t){var r=e[0];for(t*=O;r>=10;r/=10)t++;return t}function D(e,t,r){if(t>S)throw h=!0,r&&(e.precision=r),Error(g);return R(new e(l),t,1,!0)}function q(e,t,r){if(t>_)throw Error(g);return R(new e(p),t,r,!0)}function L(e){var t=e.length-1,r=t*O+1;if(t=e[t]){for(;t%10==0;t/=10)r--;for(t=e[0];t>=10;t/=10)r++}return r}function F(e){for(var t="";e--;)t+="0";return t}function j(e,t,r,n){var i,a=new e(1),o=Math.ceil(n/O+4);for(h=!1;;){if(r%2&&Q((a=a.times(t)).d,o)&&(i=!0),0===(r=x(r/2))){r=a.d.length-1,i&&0===a.d[r]&&++a.d[r];break}Q((t=t.times(t)).d,o)}return h=!0,a}function H(e){return 1&e.d[e.d.length-1]}function $(e,t,r){for(var n,i=new e(t[0]),a=0;++a<t.length;){if(!(n=new e(t[a])).s){i=n;break}i[r](n)&&(i=n)}return i}function G(e,t){var r,n,i,a,o,s,u,c=0,f=0,l=0,p=e.constructor,m=p.rounding,d=p.precision;if(!e.d||!e.d[0]||e.e>17)return new p(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:NaN);for(null==t?(h=!1,u=d):u=t,s=new p(.03125);e.e>-2;)e=e.times(s),l+=5;for(u+=n=Math.log(w(2,l))/Math.LN10*2+5|0,r=a=o=new p(1),p.precision=u;;){if(a=R(a.times(e),u,1),r=r.times(++f),C((s=o.plus(P(a,r,u,1))).d).slice(0,u)===C(o.d).slice(0,u)){for(i=l;i--;)o=R(o.times(o),u,1);if(null!=t)return p.precision=d,o;if(!(c<3&&B(o.d,u-n,m,c)))return R(o,p.precision=d,m,h=!0);p.precision=u+=10,r=a=s=new p(1),f=0,c++}o=s}}function V(e,t){var r,n,i,a,o,s,u,c,f,l,p,m=1,d=e,y=d.d,g=d.constructor,v=g.rounding,x=g.precision;if(d.s<0||!y||!y[0]||!d.e&&1==y[0]&&1==y.length)return new g(y&&!y[0]?-1/0:1!=d.s?NaN:y?0:d);if(null==t?(h=!1,f=x):f=t,g.precision=f+=10,n=(r=C(y)).charAt(0),!(Math.abs(a=d.e)<15e14))return c=D(g,f+2,x).times(a+""),d=V(new g(n+"."+r.slice(1)),f-10).plus(c),g.precision=x,null==t?R(d,x,v,h=!0):d;for(;n<7&&1!=n||1==n&&r.charAt(1)>3;)n=(r=C((d=d.times(e)).d)).charAt(0),m++;for(a=d.e,n>1?(d=new g("0."+r),a++):d=new g(n+"."+r.slice(1)),l=d,u=o=d=P(d.minus(1),d.plus(1),f,1),p=R(d.times(d),f,1),i=3;;){if(o=R(o.times(p),f,1),C((c=u.plus(P(o,new g(i),f,1))).d).slice(0,f)===C(u.d).slice(0,f)){if(u=u.times(2),0!==a&&(u=u.plus(D(g,f+2,x).times(a+""))),u=P(u,new g(m),f,1),null!=t)return g.precision=x,u;if(!B(u.d,f-10,v,s))return R(u,g.precision=x,v,h=!0);g.precision=f+=10,c=o=d=P(l.minus(1),l.plus(1),f,1),p=R(d.times(d),f,1),i=s=1}u=c,i+=2}}function Z(e){return String(e.s*e.s/0)}function W(e,t){var r,n,i;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;48===t.charCodeAt(n);n++);for(i=t.length;48===t.charCodeAt(i-1);--i);if(t=t.slice(n,i)){if(i-=n,e.e=r=r-n-1,e.d=[],n=(r+1)%O,r<0&&(n+=O),n<i){for(n&&e.d.push(+t.slice(0,n)),i-=O;n<i;)e.d.push(+t.slice(n,n+=O));t=t.slice(n),n=O-t.length}else n-=i;for(;n--;)t+="0";e.d.push(+t),h&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function J(e,t,r,n,i){var a,o,s,u,c=e.precision,f=Math.ceil(c/O);for(h=!1,u=r.times(r),s=new e(n);;){if(o=P(s.times(u),new e(t++*t++),c,1),s=i?n.plus(o):n.minus(o),n=P(o.times(u),new e(t++*t++),c,1),void 0!==(o=s.plus(n)).d[f]){for(a=f;o.d[a]===s.d[a]&&a--;);if(-1==a)break}a=s,s=n,n=o,o=a,0}return h=!0,o.d.length=f+1,o}function Y(e,t){var r,n=t.s<0,i=q(e,e.precision,1),a=i.times(.5);if((t=t.abs()).lte(a))return s=n?4:1,t;if((r=t.divToInt(i)).isZero())s=n?3:2;else{if((t=t.minus(r.times(i))).lte(a))return s=H(r)?n?2:3:n?4:1,t;s=H(r)?n?1:4:n?3:2}return t.minus(i).abs()}function X(e,t,r,n){var i,a,s,u,l,p,m,h,d,y=e.constructor,g=void 0!==r;if(g?(z(r,1,c),void 0===n?n=y.rounding:z(n,0,8)):(r=y.precision,n=y.rounding),e.isFinite()){for(g?(i=2,16==t?r=4*r-3:8==t&&(r=3*r-2)):i=t,(s=(m=U(e)).indexOf("."))>=0&&(m=m.replace(".",""),(d=new y(1)).e=m.length-s,d.d=I(U(d),10,i),d.e=d.d.length),a=l=(h=I(m,10,i)).length;0==h[--l];)h.pop();if(h[0]){if(s<0?a--:((e=new y(e)).d=h,e.e=a,h=(e=P(e,d,r,n,0,i)).d,a=e.e,p=o),s=h[r],u=i/2,p=p||void 0!==h[r+1],p=n<4?(void 0!==s||p)&&(0===n||n===(e.s<0?3:2)):s>u||s===u&&(4===n||p||6===n&&1&h[r-1]||n===(e.s<0?8:7)),h.length=r,p)for(;++h[--r]>i-1;)h[r]=0,r||(++a,h.unshift(1));for(l=h.length;!h[l-1];--l);for(s=0,m="";s<l;s++)m+=f.charAt(h[s]);if(g){if(l>1)if(16==t||8==t){for(s=16==t?4:3,--l;l%s;l++)m+="0";for(l=(h=I(m,i,t)).length;!h[l-1];--l);for(s=1,m="1.";s<l;s++)m+=f.charAt(h[s])}else m=m.charAt(0)+"."+m.slice(1);m=m+(a<0?"p":"p+")+a}else if(a<0){for(;++a;)m="0"+m;m="0."+m}else if(++a>l)for(a-=l;a--;)m+="0";else a<l&&(m=m.slice(0,a)+"."+m.slice(a))}else m=g?"0p+0":"0";m=(16==t?"0x":2==t?"0b":8==t?"0o":"")+m}else m=Z(e);return e.s<0?"-"+m:m}function Q(e,t){if(e.length>t)return e.length=t,!0}function K(e){return new this(e).abs()}function ee(e){return new this(e).acos()}function te(e){return new this(e).acosh()}function re(e,t){return new this(e).plus(t)}function ne(e){return new this(e).asin()}function ie(e){return new this(e).asinh()}function ae(e){return new this(e).atan()}function oe(e){return new this(e).atanh()}function se(e,t){e=new this(e),t=new this(t);var r,n=this.precision,i=this.rounding,a=n+4;return e.s&&t.s?e.d||t.d?!t.d||e.isZero()?(r=t.s<0?q(this,n,i):new this(0)).s=e.s:!e.d||t.isZero()?(r=q(this,a,1).times(.5)).s=e.s:t.s<0?(this.precision=a,this.rounding=1,r=this.atan(P(e,t,a,1)),t=q(this,a,1),this.precision=n,this.rounding=i,r=e.s<0?r.minus(t):r.plus(t)):r=this.atan(P(e,t,a,1)):(r=q(this,a,1).times(t.s>0?.25:.75)).s=e.s:r=new this(NaN),r}function ue(e){return new this(e).cbrt()}function ce(e){return R(e=new this(e),e.e+1,2)}function fe(e){if(!e||"object"!=typeof e)throw Error(d+"Object expected");var t,r,n,i=!0===e.defaults,a=["precision",1,c,"rounding",0,8,"toExpNeg",-u,0,"toExpPos",0,u,"maxE",0,u,"minE",-u,0,"modulo",0,9];for(t=0;t<a.length;t+=3)if(r=a[t],i&&(this[r]=m[r]),void 0!==(n=e[r])){if(!(x(n)===n&&n>=a[t+1]&&n<=a[t+2]))throw Error(y+r+": "+n);this[r]=n}if(r="crypto",i&&(this[r]=m[r]),void 0!==(n=e[r])){if(!0!==n&&!1!==n&&0!==n&&1!==n)throw Error(y+r+": "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(v);this[r]=!0}else this[r]=!1}return this}function le(e){return new this(e).cos()}function pe(e){return new this(e).cosh()}function me(e,t){return new this(e).div(t)}function he(e){return new this(e).exp()}function de(e){return R(e=new this(e),e.e+1,3)}function ye(){var e,t,r=new this(0);for(h=!1,e=0;e<arguments.length;)if((t=new this(arguments[e++])).d)r.d&&(r=r.plus(t.times(t)));else{if(t.s)return h=!0,new this(1/0);r=t}return h=!0,r.sqrt()}function ge(e){return e instanceof a||e&&"[object Decimal]"===e.name||!1}function ve(e){return new this(e).ln()}function xe(e,t){return new this(e).log(t)}function we(e){return new this(e).log(2)}function be(e){return new this(e).log(10)}function Ne(){return $(this,arguments,"lt")}function Me(){return $(this,arguments,"gt")}function Ee(e,t){return new this(e).mod(t)}function Ae(e,t){return new this(e).mul(t)}function Oe(e,t){return new this(e).pow(t)}function Se(e){var t,r,n,i,a=0,o=new this(1),s=[];if(void 0===e?e=this.precision:z(e,1,c),n=Math.ceil(e/O),this.crypto)if(crypto.getRandomValues)for(t=crypto.getRandomValues(new Uint32Array(n));a<n;)(i=t[a])>=429e7?t[a]=crypto.getRandomValues(new Uint32Array(1))[0]:s[a++]=i%1e7;else{if(!crypto.randomBytes)throw Error(v);for(t=crypto.randomBytes(n*=4);a<n;)(i=t[a]+(t[a+1]<<8)+(t[a+2]<<16)+((127&t[a+3])<<24))>=214e7?crypto.randomBytes(4).copy(t,a):(s.push(i%1e7),a+=4);a=n/4}else for(;a<n;)s[a++]=1e7*Math.random()|0;for(n=s[--a],e%=O,n&&e&&(i=w(10,O-e),s[a]=(n/i|0)*i);0===s[a];a--)s.pop();if(a<0)r=0,s=[0];else{for(r=-1;0===s[0];r-=O)s.shift();for(n=1,i=s[0];i>=10;i/=10)n++;n<O&&(r-=O-n)}return o.e=r,o.d=s,o}function _e(e){return R(e=new this(e),e.e+1,this.rounding)}function Te(e){return(e=new this(e)).d?e.d[0]?e.s:0*e.s:e.s||NaN}function Ce(e){return new this(e).sin()}function ze(e){return new this(e).sinh()}function Be(e){return new this(e).sqrt()}function Ie(e,t){return new this(e).sub(t)}function Pe(e){return new this(e).tan()}function Re(e){return new this(e).tanh()}function Ue(e){return R(e=new this(e),e.e+1,1)}(a=function e(t){var r,n,i;function o(e){var t,r,n,i=this;if(!(i instanceof o))return new o(e);if(i.constructor=o,e instanceof o)return i.s=e.s,i.e=e.e,void(i.d=(e=e.d)?e.slice():e);if("number"==(n=typeof e)){if(0===e)return i.s=1/e<0?-1:1,i.e=0,void(i.d=[0]);if(e<0?(e=-e,i.s=-1):i.s=1,e===~~e&&e<1e7){for(t=0,r=e;r>=10;r/=10)t++;return i.e=t,void(i.d=[e])}return 0*e!=0?(e||(i.s=NaN),i.e=NaN,void(i.d=null)):W(i,e.toString())}if("string"!==n)throw Error(y+e);return 45===e.charCodeAt(0)?(e=e.slice(1),i.s=-1):i.s=1,E.test(e)?W(i,e):function(e,t){var r,n,i,o,s,u,c,f,l;if("Infinity"===t||"NaN"===t)return+t||(e.s=NaN),e.e=NaN,e.d=null,e;if(N.test(t))r=16,t=t.toLowerCase();else if(b.test(t))r=2;else{if(!M.test(t))throw Error(y+t);r=8}for((o=t.search(/p/i))>0?(c=+t.slice(o+1),t=t.substring(2,o)):t=t.slice(2),s=(o=t.indexOf("."))>=0,n=e.constructor,s&&(o=(u=(t=t.replace(".","")).length)-o,i=j(n,new n(r),o,2*o)),o=l=(f=I(t,r,A)).length-1;0===f[o];--o)f.pop();return o<0?new n(0*e.s):(e.e=k(f,l),e.d=f,h=!1,s&&(e=P(e,i,4*u)),c&&(e=e.times(Math.abs(c)<54?Math.pow(2,c):a.pow(2,c))),h=!0,e)}(i,e)}if(o.prototype=T,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=fe,o.clone=e,o.isDecimal=ge,o.abs=K,o.acos=ee,o.acosh=te,o.add=re,o.asin=ne,o.asinh=ie,o.atan=ae,o.atanh=oe,o.atan2=se,o.cbrt=ue,o.ceil=ce,o.cos=le,o.cosh=pe,o.div=me,o.exp=he,o.floor=de,o.hypot=ye,o.ln=ve,o.log=xe,o.log10=be,o.log2=we,o.max=Ne,o.min=Me,o.mod=Ee,o.mul=Ae,o.pow=Oe,o.random=Se,o.round=_e,o.sign=Te,o.sin=Ce,o.sinh=ze,o.sqrt=Be,o.sub=Ie,o.tan=Pe,o.tanh=Re,o.trunc=Ue,void 0===t&&(t={}),t&&!0!==t.defaults)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],r=0;r<i.length;)t.hasOwnProperty(n=i[r++])||(t[n]=this[n]);return o.config(t),o}(m)).default=a.Decimal=a,l=new a(l),p=new a(p),void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n)}()},function(e,t,r){"use strict";var n=r(0);t.name="bignumber",t.factory=function(e,t,r,i){var a=i("bignumber",{"":function(){return new e.BigNumber(0)},number:function(t){return new e.BigNumber(t+"")},string:function(t){return new e.BigNumber(t)},BigNumber:function(e){return e},Fraction:function(t){return new e.BigNumber(t.n).div(t.d)},null:function(t){return new e.BigNumber(0)},"Array | Matrix":function(e){return n(e,a)}});return a.toTex={0:"0",1:"\\left(${args[0]}\\right)"},a}},function(e,t,r){"use strict";var n=r(0);t.name="boolean",t.factory=function(e,t,r,i){var a=i("bool",{"":function(){return!1},boolean:function(e){return e},number:function(e){return!!e},null:function(e){return!1},BigNumber:function(e){return!e.isZero()},string:function(e){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;var r=Number(e);if(""!=e&&!isNaN(r))return!!r;throw new Error('Cannot convert "'+e+'" to a boolean')},"Array | Matrix":function(e){return n(e,a)}});return a}},function(e,t,r){e.exports=[r(165),r(167)]},function(e,t,r){"use strict";var n=r(9).format,i=r(5).lazy;t.name="Chain",t.path="type",t.factory=function(e,t,r,a,o){function s(t){if(!(this instanceof s))throw new SyntaxError("Constructor must be called with the new operator");e.isChain(t)?this.value=t.value:this.value=t}function u(e,t){"function"==typeof t&&(s.prototype[e]=c(t))}function c(e){return function(){for(var t=[this.value],r=0;r<arguments.length;r++)t[r+1]=arguments[r];return new s(e.apply(e,t))}}return s.prototype.type="Chain",s.prototype.isChain=!0,s.prototype.done=function(){return this.value},s.prototype.valueOf=function(){return this.value},s.prototype.toString=function(){return n(this.value)},s.prototype.toJSON=function(){return{mathjs:"Chain",value:this.value}},s.fromJSON=function(e){return new s(e.value)},s.createProxy=function(e,t){if("string"==typeof e)u(e,t);else for(var r in e)e.hasOwnProperty(r)&&u(r,e[r])},s.createProxy(o),o.on("import",function(e,t,r){var n,a;void 0===r&&(n=e,a=t,i(s.prototype,n,function(){var e=a();if("function"==typeof e)return c(e)}))}),s},t.math=!0,t.lazy=!1},function(e,t){t.format=function(e,r){if("function"==typeof r)return r(e);if(!e.isFinite())return e.isNaN()?"NaN":e.gt(0)?"Infinity":"-Infinity";var n="auto",i=void 0;switch(void 0!==r&&(r.notation&&(n=r.notation),"number"==typeof r?i=r:r.precision&&(i=r.precision)),n){case"fixed":return t.toFixed(e,i);case"exponential":return t.toExponential(e,i);case"auto":if(r&&r.exponential&&(void 0!==r.exponential.lower||void 0!==r.exponential.upper)){var a=Object.assign({},r);return a.exponential=void 0,void 0!==r.exponential.lower&&(a.lowerExp=Math.round(Math.log(r.exponential.lower)/Math.LN10)),void 0!==r.exponential.upper&&(a.upperExp=Math.round(Math.log(r.exponential.upper)/Math.LN10)),console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace "+JSON.stringify(r)+" with "+JSON.stringify(a)),t.format(e,a)}var o=r&&void 0!==r.lowerExp?r.lowerExp:-3,s=r&&void 0!==r.upperExp?r.upperExp:5;if(e.isZero())return"0";var u=e.logarithm();return(u.gte(o)&&u.lt(s)?e.toSignificantDigits(i).toFixed():t.toExponential(e,i)).replace(/((\.\d*?)(0+))($|e)/,function(){var e=arguments[2],t=arguments[4];return"."!==e?e+t:t});default:throw new Error('Unknown notation "'+n+'". Choose "auto", "exponential", or "fixed".')}},t.toExponential=function(e,t){return void 0!==t?e.toExponential(t-1):e.toExponential()},t.toFixed=function(e,t){return e.toFixed(t)}},function(e,t,r){"use strict";t.name="chain",t.factory=function(e,t,r,n){return n("chain",{"":function(){return new e.Chain},any:function(t){return new e.Chain(t)}})}},function(e,t,r){e.exports=[r(88),r(170)]},function(e,t,r){var n;
    /**
     * @license Complex.js v2.0.3 11/02/2016
     *
     * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
    /**
     * @license Complex.js v2.0.3 11/02/2016
     *
     * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
    !function(r){"use strict";var i={re:0,im:0},a=function(e){return.5*(Math.exp(e)+Math.exp(-e))},o=function(e){return.5*(Math.exp(e)-Math.exp(-e))},s=function(){throw SyntaxError("Invalid Param")};function u(e,t){var r=Math.abs(e),n=Math.abs(t);return 0===e?Math.log(n):0===t?Math.log(r):r<3e3&&n<3e3?.5*Math.log(e*e+t*t):Math.log(e/Math.cos(Math.atan2(t,e)))}var c=function(e,t){if(null==e)i.re=i.im=0;else if(void 0!==t)i.re=e,i.im=t;else switch(typeof e){case"object":"im"in e&&"re"in e?(i.re=e.re,i.im=e.im):"abs"in e&&"arg"in e?(i.re=e.abs*Math.cos(e.arg),i.im=e.abs*Math.sin(e.arg)):"r"in e&&"phi"in e?(i.re=e.r*Math.cos(e.phi),i.im=e.r*Math.sin(e.phi)):2===e.length?(i.re=e[0],i.im=e[1]):s();break;case"string":i.im=i.re=0;var r=e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),n=1,a=0;null===r&&s();for(var o=0;o<r.length;o++){var u=r[o];" "===u||"\t"===u||"\n"===u||("+"===u?n++:"-"===u?a++:"i"===u||"I"===u?(n+a===0&&s()," "===r[o+1]||isNaN(r[o+1])?i.im+=parseFloat((a%2?"-":"")+"1"):(i.im+=parseFloat((a%2?"-":"")+r[o+1]),o++),n=a=0):((n+a===0||isNaN(u))&&s(),"i"===r[o+1]||"I"===r[o+1]?(i.im+=parseFloat((a%2?"-":"")+u),o++):i.re+=parseFloat((a%2?"-":"")+u),n=a=0))}n+a>0&&s();break;case"number":i.im=0,i.re=e;break;default:s()}isNaN(i.re)||isNaN(i.im)};function f(e,t){if(!(this instanceof f))return new f(e,t);c(e,t),this.re=i.re,this.im=i.im}f.prototype={re:0,im:0,sign:function(){var e=this.abs();return new f(this.re/e,this.im/e)},add:function(e,t){return c(e,t),new f(this.re+i.re,this.im+i.im)},sub:function(e,t){return c(e,t),new f(this.re-i.re,this.im-i.im)},mul:function(e,t){return c(e,t),0===i.im&&0===this.im?new f(this.re*i.re,0):new f(this.re*i.re-this.im*i.im,this.re*i.im+this.im*i.re)},div:function(e,t){c(e,t),e=this.re,t=this.im;var r,n,a=i.re,o=i.im;return 0===o?0===a?new f(0!==e?e/0:0,0!==t?t/0:0):new f(e/a,t/a):Math.abs(a)<Math.abs(o)?new f((e*(n=a/o)+t)/(r=a*n+o),(t*n-e)/r):new f((e+t*(n=o/a))/(r=o*n+a),(t-e*n)/r)},pow:function(e,t){if(c(e,t),e=this.re,t=this.im,0===e&&0===t)return f.ZERO;if(0===i.im){if(0===t&&e>=0)return new f(Math.pow(e,i.re),0);if(0===e)switch((i.re%4+4)%4){case 0:return new f(Math.pow(t,i.re),0);case 1:return new f(0,Math.pow(t,i.re));case 2:return new f(-Math.pow(t,i.re),0);case 3:return new f(0,-Math.pow(t,i.re))}}var r=Math.atan2(t,e),n=u(e,t);return e=Math.exp(i.re*n-i.im*r),t=i.im*n+i.re*r,new f(e*Math.cos(t),e*Math.sin(t))},sqrt:function(){var e,t,r=this.re,n=this.im,i=this.abs();if(r>=0){if(0===n)return new f(Math.sqrt(r),0);e=.5*Math.sqrt(2*(i+r))}else e=Math.abs(n)/Math.sqrt(2*(i-r));return t=r<=0?.5*Math.sqrt(2*(i-r)):Math.abs(n)/Math.sqrt(2*(i+r)),new f(e,n<0?-t:t)},exp:function(){var e=Math.exp(this.re);return this.im,new f(e*Math.cos(this.im),e*Math.sin(this.im))},log:function(){var e=this.re,t=this.im;return new f(u(e,t),Math.atan2(t,e))},abs:function(){return e=this.re,t=this.im,r=Math.abs(e),n=Math.abs(t),r<3e3&&n<3e3?Math.sqrt(r*r+n*n):(r<n?(r=n,n=e/t):n=t/e,r*Math.sqrt(1+n*n));var e,t,r,n},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var e=this.re,t=this.im;return new f(Math.sin(e)*a(t),Math.cos(e)*o(t))},cos:function(){var e=this.re,t=this.im;return new f(Math.cos(e)*a(t),-Math.sin(e)*o(t))},tan:function(){var e=2*this.re,t=2*this.im,r=Math.cos(e)+a(t);return new f(Math.sin(e)/r,o(t)/r)},cot:function(){var e=2*this.re,t=2*this.im,r=Math.cos(e)-a(t);return new f(-Math.sin(e)/r,o(t)/r)},sec:function(){var e=this.re,t=this.im,r=.5*a(2*t)+.5*Math.cos(2*e);return new f(Math.cos(e)*a(t)/r,Math.sin(e)*o(t)/r)},csc:function(){var e=this.re,t=this.im,r=.5*a(2*t)-.5*Math.cos(2*e);return new f(Math.sin(e)*a(t)/r,-Math.cos(e)*o(t)/r)},asin:function(){var e=this.re,t=this.im,r=new f(t*t-e*e+1,-2*e*t).sqrt(),n=new f(r.re-t,r.im+e).log();return new f(n.im,-n.re)},acos:function(){var e=this.re,t=this.im,r=new f(t*t-e*e+1,-2*e*t).sqrt(),n=new f(r.re-t,r.im+e).log();return new f(Math.PI/2-n.im,n.re)},atan:function(){var e=this.re,t=this.im;if(0===e){if(1===t)return new f(0,1/0);if(-1===t)return new f(0,-1/0)}var r=e*e+(1-t)*(1-t),n=new f((1-t*t-e*e)/r,-2*e/r).log();return new f(-.5*n.im,.5*n.re)},acot:function(){var e=this.re,t=this.im;if(0===t)return new f(Math.atan2(1,e),0);var r=e*e+t*t;return 0!==r?new f(e/r,-t/r).atan():new f(0!==e?e/0:0,0!==t?-t/0:0).atan()},asec:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new f(0,1/0);var r=e*e+t*t;return 0!==r?new f(e/r,-t/r).acos():new f(0!==e?e/0:0,0!==t?-t/0:0).acos()},acsc:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new f(Math.PI/2,1/0);var r=e*e+t*t;return 0!==r?new f(e/r,-t/r).asin():new f(0!==e?e/0:0,0!==t?-t/0:0).asin()},sinh:function(){var e=this.re,t=this.im;return new f(o(e)*Math.cos(t),a(e)*Math.sin(t))},cosh:function(){var e=this.re,t=this.im;return new f(a(e)*Math.cos(t),o(e)*Math.sin(t))},tanh:function(){var e=2*this.re,t=2*this.im,r=a(e)+Math.cos(t);return new f(o(e)/r,Math.sin(t)/r)},coth:function(){var e=2*this.re,t=2*this.im,r=a(e)-Math.cos(t);return new f(o(e)/r,-Math.sin(t)/r)},csch:function(){var e=this.re,t=this.im,r=Math.cos(2*t)-a(2*e);return new f(-2*o(e)*Math.cos(t)/r,2*a(e)*Math.sin(t)/r)},sech:function(){var e=this.re,t=this.im,r=Math.cos(2*t)+a(2*e);return new f(2*a(e)*Math.cos(t)/r,-2*o(e)*Math.sin(t)/r)},asinh:function(){var e=this.im;this.im=-this.re,this.re=e;var t=this.asin();return this.re=-this.im,this.im=e,e=t.re,t.re=-t.im,t.im=e,t},acosh:function(){var e,t=this.acos();return t.im<=0?(e=t.re,t.re=-t.im,t.im=e):(e=t.im,t.im=-t.re,t.re=e),t},atanh:function(){var e=this.re,t=this.im,r=e>1&&0===t,n=1-e,i=1+e,a=n*n+t*t,o=0!==a?new f((i*n-t*t)/a,(t*n+i*t)/a):new f(-1!==e?e/0:0,0!==t?t/0:0),s=o.re;return o.re=u(o.re,o.im)/2,o.im=Math.atan2(o.im,s)/2,r&&(o.im=-o.im),o},acoth:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new f(0,Math.PI/2);var r=e*e+t*t;return 0!==r?new f(e/r,-t/r).atanh():new f(0!==e?e/0:0,0!==t?-t/0:0).atanh()},acsch:function(){var e=this.re,t=this.im;if(0===t)return new f(0!==e?Math.log(e+Math.sqrt(e*e+1)):1/0,0);var r=e*e+t*t;return 0!==r?new f(e/r,-t/r).asinh():new f(0!==e?e/0:0,0!==t?-t/0:0).asinh()},asech:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new f(1/0,0);var r=e*e+t*t;return 0!==r?new f(e/r,-t/r).acosh():new f(0!==e?e/0:0,0!==t?-t/0:0).acosh()},inverse:function(){var e=this.re,t=this.im,r=e*e+t*t;return new f(0!==e?e/r:0,0!==t?-t/r:0)},conjugate:function(){return new f(this.re,-this.im)},neg:function(){return new f(-this.re,-this.im)},ceil:function(e){return e=Math.pow(10,e||0),new f(Math.ceil(this.re*e)/e,Math.ceil(this.im*e)/e)},floor:function(e){return e=Math.pow(10,e||0),new f(Math.floor(this.re*e)/e,Math.floor(this.im*e)/e)},round:function(e){return e=Math.pow(10,e||0),new f(Math.round(this.re*e)/e,Math.round(this.im*e)/e)},equals:function(e,t){return c(e,t),Math.abs(i.re-this.re)<=f.EPSILON&&Math.abs(i.im-this.im)<=f.EPSILON},clone:function(){return new f(this.re,this.im)},toString:function(){var e=this.re,t=this.im,r="";return isNaN(e)||isNaN(t)?"NaN":(0!==e&&(r+=e),0!==t&&(0!==e?r+=t<0?" - ":" + ":t<0&&(r+="-"),1!==(t=Math.abs(t))&&(r+=t),r+="i"),r||"0")},toVector:function(){return[this.re,this.im]},valueOf:function(){return 0===this.im?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)}},f.ZERO=new f(0,0),f.ONE=new f(1,0),f.I=new f(0,1),f.PI=new f(Math.PI,0),f.E=new f(Math.E,0),f.EPSILON=1e-16,void 0===(n=function(){return f}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";var n=r(0);t.name="complex",t.factory=function(e,t,i,a){var o=r(4),s=a("complex",{"":function(){return e.Complex.ZERO},number:function(t){return new e.Complex(t,0)},"number, number":function(t,r){return new e.Complex(t,r)},"BigNumber, BigNumber":function(t,r){return new e.Complex(t.toNumber(),r.toNumber())},Complex:function(e){return e.clone()},string:function(t){return e.Complex(t)},null:function(t){return e.Complex(0)},Object:function(t){if("re"in t&&"im"in t)return new e.Complex(t.re,t.im);if("r"in t&&"phi"in t)return new e.Complex(t);throw new Error("Expected object with either properties re and im, or properties r and phi.")},"Array | Matrix":function(e){return n(e,s)}});return s.toTex={0:"0",1:"\\left(${args[0]}\\right)",2:"\\left(\\left(${args[0]}\\right)+"+o.symbols.i+"\\cdot\\left(${args[1]}\\right)\\right)"},s}},function(e,t,r){"use strict";var n={"{":"\\{","}":"\\}","\\":"\\textbackslash{}","#":"\\#",$:"\\$","%":"\\%","&":"\\&","^":"\\textasciicircum{}",_:"\\_","~":"\\textasciitilde{}"},i={"–":"\\--","—":"\\---"," ":"~","\t":"\\qquad{}","\r\n":"\\\\newline{}","\n":"\\\\newline{}"},a=function(e,t){return Object.assign({},e,t)};e.exports=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.preserveFormatting,o=void 0!==r&&r,s=t.escapeMapFn,u=void 0===s?a:s,c=String(e),f="",l=u(Object.assign({},n),o?Object.assign({},i):{}),p=Object.keys(l),m=function(){var e=!1;p.forEach(function(t,r){e||c.startsWith(t)&&(f+=l[p[r]],c=c.slice(t.length,c.length),e=!0)}),e||(f+=c.slice(0,1),c=c.slice(1,c.length))};c;)m();return f}},function(e,t,r){e.exports=[r(173),r(89)]},function(e,t,r){var n=r(174);n.prototype.type="Fraction",n.prototype.isFraction=!0,n.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},n.fromJSON=function(e){return new n(e)},t.name="Fraction",t.path="type",t.factory=function(e,t,r,i){return n}},function(e,t,r){var n;
    /**
     * @license Fraction.js v4.0.4 09/09/2015
     * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
     *
     * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
    /**
     * @license Fraction.js v4.0.4 09/09/2015
     * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
     *
     * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     **/
   

//计算矩阵的库
var my_m4 = {
  
    projection: function(width, height, depth) {
      // Note: This matrix flips the Y axis so 0 is at the top.
      return [
      2 / width, 0, 0, 0,
      0, -2 / height, 0, 0,
      0, 0, 2 / depth, 0,
      -1, 1, 0, 1,
      ];
    },
    
    vec_max_mul: function(a,b){
      var result = [];
      // 这个系数是我确定的，这个之后再确认
      var number = 0.1 * 1.5;
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      //console.log(b00,b01,b02);
      for (var i = 0; i < a.length; i += 3){
        var w = a[i] * b30 + a[i+1] * b31 + a[i+2] * b32 + b33;
        result = result.concat((a[i] * b00 + a[i+1] * b01 + a[i+2] * b02 + b03) / w);
        result = result.concat((a[i] * b10 + a[i+1] * b11 + a[i+2] * b12 + b13) / w);
        result = result.concat((a[i] * b20 + a[i+1] * b21 + a[i+2] * b22 + b23) / w);
      }
      //console.log("result", result);
      return result;
    
    },
    
    multiply: function(a, b) {
      var a00 = a[0 * 4 + 0];
      var a01 = a[0 * 4 + 1];
      var a02 = a[0 * 4 + 2];
      var a03 = a[0 * 4 + 3];
      var a10 = a[1 * 4 + 0];
      var a11 = a[1 * 4 + 1];
      var a12 = a[1 * 4 + 2];
      var a13 = a[1 * 4 + 3];
      var a20 = a[2 * 4 + 0];
      var a21 = a[2 * 4 + 1];
      var a22 = a[2 * 4 + 2];
      var a23 = a[2 * 4 + 3];
      var a30 = a[3 * 4 + 0];
      var a31 = a[3 * 4 + 1];
      var a32 = a[3 * 4 + 2];
      var a33 = a[3 * 4 + 3];
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      return [
      b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
      b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
      b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
      b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
      b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
      b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
      b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
      b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
      b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
      b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
      b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
      b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
      b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
      b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
      b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
      b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
      ];
    }
    };
    


// Load a text resource from a file over the network

/*=============map部分===============================开头============================================*/
  //建立program的map
  var Program_data = function(){
    this.activeFlag = undefined //这个program是否被激活
      this.programName = undefined; //program的名字
    this.vertexSource = undefined; //vetex的source
    this.fragSource = undefined //frag的source
    this.shaderJsID = undefined; //Js code 执行的ID
      this.attriData = [];  //重新建立一个新的Attri_data object的array
    this.uniformData = []; //重新建立一个新的Uniform_data object的array
    this.varyingData = []; //重新建立一个新的Varying_data object的array
    }
    var ProgramDataMap = [];
    
    var Shader_data = function(){
    this.shaderTpye = undefined; //35633为vetex 35632为frag
    this.shaderName = undefined; //shader的实际赋值
    this.shaderSource = undefined; //shader的源代码（这块是直接用来修改的）
    this.shaderJsID = undefined; //Js code 执行的ID
    }
    var ShaderDataMap = [];
    
    //建立buffer的map
    var Buffer_data = function(){
    this.bufferName = undefined;  //bindBuffer 时候使用的名字  
    this.bufferType = undefined;  //依照这个来判断是array还是element_array
    this.bufferData = undefined;  //存储buffer本身的数值
    this.activeFlag = undefined;  //ARRAY_BUFFER绑定状态
    this.activeElement = undefined;  //ELEMENT_ARRAY_BUFFER绑定状态
    
    }
    var BufferDataMap = [];
    
    // 建立attribute的map
    var Attri_data = function(){
    this.programName = undefined; //这个位置是在哪一个program的
    this.shaderName = undefined;  //在glsl代码中对应的attribute的变量名
    this.attriEleNum = undefined;  //记录attribute最终要变成vec2还是vc3
    this.uniformData = []; //这个是记录最终生成的数值，直接通过uniform传入的
    }
    var AttriDataMap = [];
    
    //建立random number program 和 shadername对应关系的map
    var Attribute_loc = function(){
    this.randomNumber = undefined;  //这块记录的就是随机产生的位置数字
    this.shaderName = undefined;    //在glsl代码中对应的attribute的变量名
    this.programName = undefined;   //这个位置是在哪一个program的 
    }
    var AttributeLocMap = [];
    
    
    //两个uniform的map
    //存储uniform的数据
    //这块的uniform类行vec2，vec3，vec4为2，3，4，matrix2，3，4为12，13，14
    var Uniform_data = function(){
    this.programName = undefined; //这个位置是在哪一个program的
    this.shaderName = undefined;  //在glsl代码中对应的uniform的变量名
    this.uniformNum = undefined;  //这个uniform是vec2，vec3，vec4
    this.uniformType = undefined;  //这个类型是int 0 还是 float 1
    this.uniformData = undefined;  // 这个uniform的数据
    this.uniformActive = undefined;  //这个uniform是否要被输入到shader
    }
    var UniformDataMap = [];
    
    
    //储存uniform的location
    var Uniform_loc = function(){
    this.randomNumber = undefined;  //这块记录的就是随机产生的位置数字
    this.shaderName = undefined;    //在glsl代码中对应的attribute的变量名
    this.programName = undefined;   //这个位置是在哪一个program的 
    }
    var UniformLocMap = [];
    
    // 建立varying的map
    var Varying_data = function(){
    this.shaderName = undefined;  //在glsl代码中对应的varying的变量名
    this.varyEleNum = undefined;  //记录varying最终要变成vec2还是vc3
    this.uniformData = []; //这个是记录最终生成的数值，直接通过uniform传入的
    }


    var ori_shaderSource;

    var Compiler = GLSL();


    // var Compiler_wasm = GLSL_wasm();
    var ll;
    var tt;
    var compiled;
    var compiled_wasm;
    
    // var matrixCalculator = new MatrixCalculator('./wasm/matrix.wasm', runCal);  
    /*==========================map部分======================================结尾*/
    test_rewrite = function(gl, canvas){

//计算矩阵的库
var my_m4 = {
  
    projection: function(width, height, depth) {
      // Note: This matrix flips the Y axis so 0 is at the top.
      return [
      2 / width, 0, 0, 0,
      0, -2 / height, 0, 0,
      0, 0, 2 / depth, 0,
      -1, 1, 0, 1,
      ];
    },
    
    vec_max_mul: function(a,b){
      var result = [];
      // 这个系数是我确定的，这个之后再确认
      var number = 0.1 * 1.5;
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      //console.log(b00,b01,b02);
      for (var i = 0; i < a.length; i += 3){
        var w = a[i] * b30 + a[i+1] * b31 + a[i+2] * b32 + b33;
        result = result.concat((a[i] * b00 + a[i+1] * b01 + a[i+2] * b02 + b03) / w);
        result = result.concat((a[i] * b10 + a[i+1] * b11 + a[i+2] * b12 + b13) / w);
        result = result.concat((a[i] * b20 + a[i+1] * b21 + a[i+2] * b22 + b23) / w);
      }
      //console.log("result", result);
      return result;
    
    },
    
    multiply: function(a, b) {
      var a00 = a[0 * 4 + 0];
      var a01 = a[0 * 4 + 1];
      var a02 = a[0 * 4 + 2];
      var a03 = a[0 * 4 + 3];
      var a10 = a[1 * 4 + 0];
      var a11 = a[1 * 4 + 1];
      var a12 = a[1 * 4 + 2];
      var a13 = a[1 * 4 + 3];
      var a20 = a[2 * 4 + 0];
      var a21 = a[2 * 4 + 1];
      var a22 = a[2 * 4 + 2];
      var a23 = a[2 * 4 + 3];
      var a30 = a[3 * 4 + 0];
      var a31 = a[3 * 4 + 1];
      var a32 = a[3 * 4 + 2];
      var a33 = a[3 * 4 + 3];
      var b00 = b[0 * 4 + 0];
      var b01 = b[0 * 4 + 1];
      var b02 = b[0 * 4 + 2];
      var b03 = b[0 * 4 + 3];
      var b10 = b[1 * 4 + 0];
      var b11 = b[1 * 4 + 1];
      var b12 = b[1 * 4 + 2];
      var b13 = b[1 * 4 + 3];
      var b20 = b[2 * 4 + 0];
      var b21 = b[2 * 4 + 1];
      var b22 = b[2 * 4 + 2];
      var b23 = b[2 * 4 + 3];
      var b30 = b[3 * 4 + 0];
      var b31 = b[3 * 4 + 1];
      var b32 = b[3 * 4 + 2];
      var b33 = b[3 * 4 + 3];
      return [
      b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
      b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
      b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
      b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
      b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
      b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
      b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
      b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
      b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
      b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
      b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
      b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
      b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
      b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
      b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
      b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
      ];
    }
    };
  
        console.log("进来了")
        ProgramDataMap = [];
        ShaderDataMap = [];
        BufferDataMap = [];
        AttriDataMap = [];
        AttributeLocMap = [];
        UniformDataMap = [];
        UniformLocMap = [];
        /*~~~~~~~~~~~~~~~~~~~~ program 部分 和 shader 部分 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        //重新定义createShader
        gl.my_createShader = gl.__proto__.createShader;
        gl.createShader = function (shaderTpye){
          // console.log("test");
          var newData = new Shader_data;
          newData.shaderTpye = shaderTpye;
          newData.shaderName = gl.my_createShader(shaderTpye);
          ShaderDataMap.push(newData);
          return newData.shaderName;
        }
        
        gl.my_shaderSource = gl.__proto__.shaderSource;
        gl.shaderSource = function(shaderName,shaderSource){
      
          ori_shaderSource = shaderSource;
          shaderSource = ChangeShader(shaderSource);
          gl.my_shaderSource(shaderName,shaderSource);
      
          //console.log(ShaderDataMap);
      
          for (var i = 0; i < ShaderDataMap.length; i++){
            if (ShaderDataMap[i].shaderName == shaderName){
              ShaderDataMap[i].shaderSource = shaderSource;
              console.log(ShaderDataMap);
                if (ShaderDataMap[i].shaderTpye == 35633){
                  ShaderDataMap[i].shaderJsID = vetexID;
                  console.log("vetexID",vetexID);
                  if ( (vetexID >= 2) && (vetexID <= 4)  ){
                    // console.log(ori_shaderSource);
                    compiled = Compiler.compile(ori_shaderSource,0);
                    // console.log(compiled);
                    eval(compiled);  
                  }else if (vetexID >= 5){
                    // console.log("eval wasm");
                    compiled_wasm = Compiler.compile(ori_shaderSource,1);
                    // console.log(compiled_wasm);
                    // console.log("******************");
                  }
                }  
              return;
            }
          }
        }
        
        gl.my_createProgram = gl.__proto__.createProgram;
        gl.createProgram = function (){
          var newData = new Program_data;
          newData.programName = gl.my_createProgram();
          ProgramDataMap.push(newData);
          return newData.programName;
        }
        
        gl.my_attachShader = gl.__proto__.attachShader;
        gl.attachShader = function (programName, shaderName){
          //要先实现原本的功能，要不后面都一直报错
          gl.my_attachShader(programName, shaderName);
          var shaderData = new Shader_data;
          shaderData = getShaderSource(shaderName);
          //console.log("shaderData",shaderData);
          for (var i = 0; i < ProgramDataMap.length; i++){
          if (ProgramDataMap[i].programName == programName){
            if (shaderData.shaderTpye == 35633){
            //console.log("shaderData.shaderSource -->-->",shaderData.shaderSource);
            ProgramDataMap[i].vertexSource = shaderData.shaderSource;
            ProgramDataMap[i].shaderJsID = shaderData.shaderJsID;
            } 
            else
            ProgramDataMap[i].fragSource = shaderData.shaderSource; 
            //console.log(shaderData.shaderSource);
            ProgramDataMap[i].activeFlag = 0;
            return;
          }
          }
        }
        
        getShaderSource = function(shaderName){
          for (var i = 0; i < ShaderDataMap.length; i++){
          if (ShaderDataMap[i].shaderName == shaderName)
            return (ShaderDataMap[i]);
          }
        }
      
        gl.my_useProgram =  gl.__proto__.useProgram;
        gl.useProgram = function (programName){     
          //这块执行原函数，只需要知道使用了哪一个program就可以了
          gl.my_useProgram(programName);
          for (var i = 0; i < ProgramDataMap.length; i++)
          //console/log("我们运行了useProgram");
          if (ProgramDataMap[i].programName == programName){
            //console.log("我们激活了program的状态");
            ProgramDataMap[i].activeFlag = 1;
          } 
          else
            ProgramDataMap[i].activeFlag = 0;
          
          
      
        }
      
        /*^^^^^^^^^^^^program 部分 和 shader 部分 ^^^^^^^^^^^^^^^^^^^^^^^^*/
      
        /*~~~~~~~~~~~~~~~~~~~~ buffer 部分 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        //bindbuffer 用于激活  而且bind的buffer有两种形式
        //gl.ARRAY_BUFFER 34962
        //gl.ELEMENT_ARRAY_BUFFER 34963
        gl.my_bindBuffer = gl.__proto__.bindBuffer;
        gl.bindBuffer = function (bufferType, bufferName){
          //console.log("bufferName",bufferName);
          //bindbuffernum ++;
          initBufferMap(bufferType); // 重新把之前所有active的buffer状态归位inactive
          addBufferMap(bufferType, bufferName);  //判断是否拥有这条buffer，如果没有的话就直接加入这个buffer
          activeBufferMap(bufferType, bufferName); //激活当前的buffer
        
        
          //这块还是需要让原始代码运行
          // *******************************这块在去掉另外一套系统后，应该可以删除
          gl.my_bindBuffer(bufferType, bufferName);
        }
          /*------------用在bindbuffer 的几个函数-------------*/   
        // 重新把之前所有active的buffer状态归位inactive
        initBufferMap = function(bufferType){
      
          if (bufferType == 34963){
            for (i = 0; i < BufferDataMap.length; i++)
              BufferDataMap[i].activeElement = 0;
          }
          else{
            for (i = 0; i < BufferDataMap.length; i++)
              BufferDataMap[i].activeFlag = 0;  
      
          }
        }
        
        //判断是否拥有这条buffer，如果没有的话就直接加入这个buffer
        addBufferMap = function(bufferType, bufferName){
          //如果出现了重复的buffer，要在原始基础上直接赋值
          for (i = 0; i < BufferDataMap.length; i++){
            if (BufferDataMap[i].bufferName == bufferName)
              return;
          }
          var newData = new Buffer_data();
          newData.bufferType = bufferType;
          newData.bufferName = bufferName;
          BufferDataMap.push(newData);
          return;
        }
        
        //激活当前的buffer
        activeBufferMap = function(bufferType, bufferName){
          for (i = 0; i < BufferDataMap.length; i++)
          if (BufferDataMap[i].bufferName == bufferName){
            if (bufferType == 34962)
              BufferDataMap[i].activeFlag = 1;
            else
              BufferDataMap[i].activeElement = 1;
            return;
          }
        }
        /*----------------------------------------------------*/
        //重新定义bufferData
        gl.my_glbufferData = gl.__proto__.bufferData;
        gl.bufferData = function (bufferType, bufferData, c){
          if (bufferType == 34962){
            for (i = 0; i < BufferDataMap.length; i++){
              if (BufferDataMap[i].activeFlag == 1)
                BufferDataMap[i].bufferData = bufferData;
            }
          }else{
            for (i = 0; i < BufferDataMap.length; i++){
              if (BufferDataMap[i].activeElement == 1)
                BufferDataMap[i].bufferData = bufferData;
            }
          }
        } 
        
        /*^^^^^^^^^^^^^^^^^^^^^^buffer 部分 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
      
      
      
        /*~~~~~~~~~~~~~~~~~~~~ attribute 部分 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
      
        /*------------gl.getAttribLocation------开头-------------*/
        //重新定义getAttribLocation
        //这块需要建立一个新的map，记录随机产生的数字和其对应关系的
        gl.my_getAttribLocation = gl.__proto__.getAttribLocation;
        gl.getAttribLocation = function (programName, shaderName){
          for (i = 0; i < AttributeLocMap.length; i++){
          if ((AttributeLocMap[i].programName == programName) && (AttributeLocMap[i].shaderName == shaderName))
            return AttributeLocMap[i].randomNumber;
          } 
          var newData = new Attribute_loc;
          newData.randomNumber = creatNumber(); // 通过creatNumber得到一个确定的函数
          newData.programName = programName;
          newData.shaderName = shaderName;
          AttributeLocMap.push(newData);
          return newData.randomNumber;   //将位置的数值返回以方便在gl.vertexAttribPointer中将两个map进行关连
        
        }
        
        
        //用getAttribLocation的函数
        var __Locnumber = 100; //初始化函数
        //单独建立函数的原因是在单个program的时候，单一__Locnumber是可行的，我担心在three.js多program和多attribute的情况下，可能会出问题，先暂时写成这样，调试的时候再做修改。
        creatNumber = function(){
          __Locnumber++;
          return __Locnumber;
        }
        /*--------------------------------------------------------*/ 
      
      
      
      
        gl.my_vertexAttribPointer = gl.__proto__.vertexAttribPointer;
        gl.vertexAttribPointer = function (positionAttributeLocation, size, type, normalize, stride, offset){
        
          //先提取getAttribLocation能获得的glsl部分的信息
          var ShaderData = new Attribute_loc;
          ShaderData = getShaderData(positionAttributeLocation);
        
          //提取bufferdata中的信息
          var BufferData = new Buffer_data;
          BufferData = getBufferData();
       
          //在这里生成一个新的attribute条目
          // 这个版本需要考虑重复赋值这种情况
          addAttriMap(ShaderData,BufferData,size,stride/4,offset/4);
        }
        
        /*------------gl.vertexAttribPointer------开头-------------*/
        //用在vertexAttribPointer中的函数
        //提取getAttribLocation能获得的glsl部分的信息
        var getShaderData = function(positionAttributeLocation){
          for (var i = 0; i < AttributeLocMap.length; i++){
          if (AttributeLocMap[i].randomNumber == positionAttributeLocation)
            return AttributeLocMap[i];
          }
        
        }
        
        //提取bufferdata中的信息
        var getBufferData = function(){
          for (var i = 0; i < BufferDataMap.length; i++){
          if (BufferDataMap[i].activeFlag == 1)
            return BufferDataMap[i];
          }
        }
        
        //考虑了attribute会被重复赋值的情况。
        //需要判断是否需要重组bufferdata
        var addAttriMap = function( ShaderData = new Attribute_loc,BufferData = new Buffer_data,size,stride,offset){
          //这是一种特殊情况
          if (stride == 0)
          stride = size;
          var newAttri = new Attri_data;
          //var temData = [];
          newAttri.shaderName = ShaderData.shaderName;
          newAttri.programName = ShaderData.programName;
          for (var i = 0; i < AttriDataMap.length; i++){
          if ( (newAttri.shaderName == AttriDataMap[i].shaderName) && (newAttri.programName == AttriDataMap[i].programName) ){
            AttriDataMap[i].attriEleNum = size;
            for (var i = 0; i * stride < BufferData.bufferData.length; i++){
              for (var j = i * stride + offset; j < i * stride + offset + size; j++)
                AttriDataMap[i].uniformData = AttriDataMap[i].uniformData.concat(BufferData.bufferData[j]);
            }
            return;
          }
          }
          newAttri.attriEleNum = size;
          for (var i = 0; i * stride < BufferData.bufferData.length; i++){
            for (var j = i * stride + offset; j < i * stride + offset + size; j++)
              newAttri.uniformData = newAttri.uniformData.concat(BufferData.bufferData[j]);
          }
          //console.log("newAttri",newAttri);
        
          // 将attribute加入map
          AttriDataMap.push(newAttri);
        }
        
        /*----------------------------------------------------------------------*/ 
        
      
      /*^^^^^^^^^^^^^^^^^^^^^^^^attribute 部分^^^^^^^^^^^^^^^^^^^^^^^^*/
      
      /*~~~~~~~~~~~~~~~~~~~~~ uniform 部分 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
      //my_getUniformLocation
        //这块需要建立一个新的map，记录随机产生的数字和其对应关系的
        gl.my_getUniformLocation = gl.__proto__.getUniformLocation;
        gl.getUniformLocation = function (programName, shaderName){
          // 如果出现了重复的，就直接返回原始值
          for (i = 0; i < UniformLocMap.length;i++){
          if ((UniformLocMap[i].programName == programName) && (UniformLocMap[i].shaderName == shaderName))
            return UniformLocMap[i].randomNumber;
          }
        
          var newData = new Uniform_loc;
          newData.randomNumber = creatNumber();
          newData.programName = programName;
          newData.shaderName = shaderName;
          UniformLocMap.push(newData);
        
        
          //开启map状态
          return newData.randomNumber;   
        
        }
        
        //进入uniform 赋值区域  需要重新定义大量函数， 放在一起定义就好了
        //这个类型是int 0 还是 float 1
        //传入loc，data，type, num
        //个数是1的情况
        gl.my_uniform1i = gl.__proto__.uniform1i;
        gl.uniform1i = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 0, 1);
        }
        
        gl.my_uniform1iv = gl.__proto__.uniform1iv;
        gl.uniform1iv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 0, 1);
        }
        
        gl.my_uniform1f = gl.__proto__.uniform1f;
        gl.uniform1f = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 1);
        }
        
        gl.my_uniform1fv = gl.__proto__.uniform1fv;
        gl.uniform1fv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 1);
        }
        
        //个数是2的情况
        gl.my_uniform2i = gl.__proto__.uniform2i;
        gl.uniform2i = function (uniformLoc, uniformData0, uniformData1){
          var uniformData = [uniformData0, uniformData1];
          AddUniformMap(uniformLoc, uniformData, 0, 2);
        }
        
        gl.my_uniform2iv = gl.__proto__.uniform2iv;
        gl.uniform2iv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 0, 2);
        }
        
        gl.my_uniform2f = gl.__proto__.uniform2f;
        gl.uniform2f = function (uniformLoc,  uniformData0, uniformData1){
          var uniformData = [uniformData0, uniformData1];
          AddUniformMap(uniformLoc, uniformData, 1, 2);
        }
        
        gl.my_uniform2fv = gl.__proto__.uniform2fv;
        gl.uniform2fv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 2);
        }
        
        //个数是3的情况
        gl.my_uniform3i = gl.__proto__.uniform3i;
        gl.uniform3i = function (uniformLoc, uniformData0, uniformData1, uniformData2){
          var uniformData = [uniformData0, uniformData1, uniformData2];
          AddUniformMap(uniformLoc, uniformData, 0, 3);
        }
      //    var __testnumber = 0;
        gl.my_uniform3iv = gl.__proto__.uniform3iv;
        gl.uniform3iv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 0, 3);
        //   console.log("__testnumber",__testnumber++);
        //   console.log("fdsfdsfsdfdsfds");
        }
        
        gl.my_uniform3f = gl.__proto__.uniform3f;
        gl.uniform3f = function (uniformLoc,  uniformData0, uniformData1, uniformData2){
          var uniformData = [uniformData0, uniformData1, uniformData2];
          AddUniformMap(uniformLoc, uniformData, 1, 3);
        }
        
        gl.my_uniform3fv = gl.__proto__.niform3fv;
        gl.niform3fv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 3);
        }
        
        //个数是4的情况
        gl.my_uniform4i = gl.__proto__.uniform4i;
        gl.uniform4i = function (uniformLoc, uniformData0, uniformData1, uniformData2,uniformData3){
          var uniformData = [uniformData0, uniformData1, uniformData2, ,uniformData3];
          AddUniformMap(uniformLoc, uniformData, 0, 4);
        }
        
        gl.my_uniform4iv = gl.__proto__.uniform4iv;
        gl.uniform4iv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 0, 4);
        }
        
        gl.my_uniform4f = gl.__proto__.uniform4f;
        gl.uniform4f = function (uniformLoc,  uniformData0, uniformData1, uniformData2, uniformData3){
          var uniformData = [uniformData0, uniformData1, uniformData2, ,uniformData3];
          AddUniformMap(uniformLoc, uniformData, 1, 4);
        }
        
        gl.my_uniform4fv = gl.__proto__.uniform4fv;
        gl.uniform4fv = function (uniformLoc, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 4);
        }
        
        //matrix 
        //在这里不考虑2*3， 2*4， 3*4 这几种情况
        gl.my_uniformMatrix2fv = gl.__proto__.uniformMatrix2fv;
        gl.uniformMatrix2fv = function (uniformLoc,transpose, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 12);
        }
        
        gl.my_uniformMatrix3fv = gl.__proto__.uniformMatrix3fv;
        gl.uniformMatrix3fv = function (uniformLoc,transpose, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 13);
        }
        
        gl.my_uniformMatrix4fv = gl.__proto__.uniformMatrix4fv;
        gl.uniformMatrix4fv = function (uniformLoc,transpose, uniformData){
          AddUniformMap(uniformLoc, uniformData, 1, 14);
        }
        
        
        /*------------gl.uniformXX和gl.uniformMatrix4XX------开头-------------*/
        //需要考虑重复赋值的情况
        var AddUniformMap = function(uniformLoc, uniformData, type, size){
          var newUniform = new Uniform_data;
          var newUniformLoc = new Uniform_loc;
          newUniformLoc = getUniformLoc(uniformLoc);
          newUniform.programName = newUniformLoc.programName;
          newUniform.shaderName = newUniformLoc.shaderName;
          for (var i = 0; i < UniformDataMap.length; i++){
          if ((newUniform.programName == UniformDataMap[i].programName) && (newUniform.shaderName == UniformDataMap[i].shaderName)){
            UniformDataMap[i].uniformNum = size;
            UniformDataMap[i].uniformType = type;
            UniformDataMap[i].uniformData = uniformData;
            UniformDataMap[i].uniformActive = 1;   // 这个是在后面和shader互动的时候使用的
            return;
          }
          }
          newUniform.uniformNum = size;
          newUniform.uniformType = type;
          newUniform.uniformData = uniformData;
          newUniform.uniformActive = 1;   // 这个是在后面和shader互动的时候使用的
          UniformDataMap.push(newUniform);
        }
        
        var getUniformLoc = function(randomNumber){
          for (var i = 0; i < UniformLocMap.length; i++)
          if (randomNumber == UniformLocMap[i].randomNumber)
            return UniformLocMap[i];
        }
        
        /*---------------------------------------------------------------*/ 
        
      
      /*^^^^^^^^^^^^^^^^^^^^^^^^uniform 部分^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
      
      
      
      
      /*~~~~~~~~~~~~~~~~~~~~~~~texture 部分 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
      //强制要求是 gl.NEAREST
      gl.my_texParameteri = gl.__proto__.texParameteri;
      gl.my_texParameteri = function(a , b, c){
        gl.my_texParameteri(a, b, gl.NEAREST); 
      }
      
      
      
      
      
      /*^^^^^^^^^^^^^^^^^^^^^^^^texture 部分^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
      
      
      /*~~~~~~~~~~~~~~~~~~~~~~~ draw 部分 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
      //attribute的数据将要在这里重复形成最新的数据
      gl.my_drawElements = gl.__proto__.drawElements;
      gl.drawElements = function(mode, count, type, offset){
        var elementArray = [];
        var activeProgram;
        var activeProgramNum;
        activeProgram = getactiveProgram();
        activeProgramNum = getactiveProgramNum();
        // var t0 = performance.now();
        elementArray = getElementArray(count,offset);
        // var t1 = performance.now();
        // console.log('prepare for drawarrays', t1 - t0);
        for (var i = 0; i < AttriDataMap.length; i++){
          var newData = new Attri_data;
          if( AttriDataMap[i].programName == activeProgram){
            newData.programName = AttriDataMap[i].programName;
            newData.shaderName = AttriDataMap[i].shaderName;
            newData.attriEleNum = AttriDataMap[i].attriEleNum;
            newData.uniformData = AttriDataMap[i].uniformData;
      
            newData.uniformData = [];
            for (var j = 0; j < elementArray.length; j++){
              for (var k = elementArray[j] * newData.attriEleNum; k <  (elementArray[j] + 1) * newData.attriEleNum; k++)
                newData.uniformData.push(AttriDataMap[i].uniformData[k]);
            }
            ProgramDataMap[activeProgramNum].attriData.push(newData);
          }
        }
        gl.drawArrays(mode, 0 , count);
      }
      
      getactiveProgram = function(){
        for (var i = 0; i < ProgramDataMap.length; i++)
          if (ProgramDataMap[i].activeFlag == 1)
            return ProgramDataMap[i].programName;
      }
      
      getactiveProgramNum = function(){
        for (var i = 0; i < ProgramDataMap.length; i++)
          if (ProgramDataMap[i].activeFlag == 1)
            return i;
      }
      
      getElementArray = function(count,offset){
        var elementArray = [];
        var returnArray = [];
        for (var i = 0; i < BufferDataMap.length; i++)
          if (BufferDataMap[i].activeElement == 1)
            elementArray = BufferDataMap[i].bufferData;
        return elementArray.slice(offset, offset + count);
      }
      
      
      
      
      
      
      
      /*^^^^^^^^^^^^^^^^^^^^^^^^draw 部分^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
      //mode
        //gl.POINTS 0
        //gl.LINES 1
        //gl.LINE_LOOP 2
        //gl.LINE_STRIP 3
        //gl.TRIANGLES 4
        var varyingmap = [];
        gl.my_drawArrays = gl.__proto__.drawArrays;
        gl.drawArrays = function(mode, first, count){
      
      
      
          // var mat1 = [];
          // for (var i = 0;i < 65536;++ i) mat1.push(i/10.0);
          // var mat2 = [];
          // for (var i = 0;i < 30;++ i) mat2.push(i);
        
          // matrixCalculator.loadMatrix(0, mat1);
          // matrixCalculator.loadMatrix(1, mat2);
        
          // var opMatrix = [];
          // for (var i = 0;i < 16;++ i) opMatrix.push(i/32.0);
        
          // var t0 = performance.now();
          // var resLength = matrixCalculator.doMatMul(0, opMatrix);
        
          // var t1 = performance.now();
          // console.log('time in ms: ', t1 - t0);
          // console.log('res', matrixCalculator.res);
        
          // var opMatrix = [];
          // for (var i = 0;i < 9;++ i) opMatrix.push(i);
          // var resLength = matrixCalculator.doMatMul(1, opMatrix);
          // console.log('res', matrixCalculator.res);
        
      
      
      
      
          // var test_fuc = gl.useProgram(-999);
          // console.log("test result");
          // console.log(test_fuc);
      
          //var startdraw = performance.now();
          //console.log("in drawArrays", performance.now());
          var activeProgram;
          var activeProgramNum;
          activeProgram = getactiveProgram();
          activeProgramNum = getactiveProgramNum();
          //没有进入gl.element直接进入这个gl.drawelement
          //加入attribute的部分
          // console.log("BufferDataMap",BufferDataMap);
          // console.log("AttriDataMap",AttriDataMap);
          if (ProgramDataMap[activeProgramNum].attriData.length == 0){
            for (var i = 0; i < AttriDataMap.length; i++)
              if( AttriDataMap[i].programName == activeProgram){
                var newData = new Attri_data;
                newData.programName = AttriDataMap[i].programName;
                newData.shaderName = AttriDataMap[i].shaderName;
                newData.attriEleNum = AttriDataMap[i].attriEleNum;
                newData.uniformData = [];
                // console.log("start",newData.attriEleNum * first);
                // console.log("end",newData.attriEleNum * (first + count));
                //在这里面添加first和count
                for(var j = newData.attriEleNum * first; j < newData.attriEleNum * (first + count); j++)
                  newData.uniformData = newData.uniformData.concat(AttriDataMap[i].uniformData[j]);
                ProgramDataMap[activeProgramNum].attriData.push(newData);
              }
      
          }
      
          //加入uniform的部分
          for(var i = 0; i < UniformDataMap.length; i++){
            if (UniformDataMap[i].programName == activeProgram){
              var newData = new Uniform_data;
              newData.programName = UniformDataMap[i].programName;
              newData.shaderName = UniformDataMap[i].shaderName;
              newData.uniformNum = UniformDataMap[i].uniformNum;
              newData.uniformType = UniformDataMap[i].uniformType;
              newData.uniformActive = UniformDataMap[i].uniformActive;
              newData.uniformData = [];
              for (var idx in UniformDataMap[i].uniformData)
                newData.uniformData.push(UniformDataMap[i].uniformData[idx]);
              ProgramDataMap[activeProgramNum].uniformData.push(newData);
            }
          } 
          console.log(ProgramDataMap);
      
      
      
           // line 部分   
          if (ProgramDataMap[activeProgramNum].shaderJsID == 0){
          
      
            /*------------------readpixel部分--------------------------------------*/
            //console.log("before readpixel", performance.now());
            var testNumber = 1;
            var start = performance.now();
            if (testNumber == 1){
              var maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
              // var pixels = new Uint8Array(canvas.width * canvas.height * 4);
              // gl.readPixels(0, 0, canvas.width, canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
              // var backtexture = textureFromPixelArray(gl, pixels, gl.RGBA, canvas.width, canvas.height);
              // function textureFromPixelArray(gl, dataArray, type, width, height) {
              //   var texture = gl.createTexture();
              //   gl.bindTexture(gl.TEXTURE_2D, texture);
              //   //确保不会翻转
              //   gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
              //   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataArray);
              //   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
              //   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
              //   return texture;
              // }
              var backtexture = textureFromPixelArray(gl, gl.RGBA, canvas.width, canvas.height);
              function textureFromPixelArray(gl, type, width, height) {
                  var texture = gl.createTexture();
                  gl.bindTexture(gl.TEXTURE_2D, texture);
                  //确保不会翻转
                  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, gl.canvas);
                  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                  return texture;
                }
            }
            var end = performance.now();
            // console.log("read pixel", end - start);
            /*------------------readpixel部分--------------------------------------*/
        
            
            var tem = [];
            var coordinates = [];
            var __VertexPositionAttributeLocation1;
            
            // console.log("ProgramDataMap", ProgramDataMap);
            //attribute 读取阶段
            for (var i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == "coordinates")
                coordinates = ProgramDataMap[activeProgramNum].attriData[i].uniformData;          
            }
            //console.log("coordinates",coordinates);
            
            //这种情况下要考虑mode的样子，先把数据传输进来
            // console.log("mode",mode);
            //console.log("coordinates",coordinates);
            // 我现在先按照test的来画，去判断双draw的部分
            
            //这块coordinates出了问题，但是我不确定是不是对的，等会在处理
        
            // testNumber = 1;
            // if (testNumber == 1){
            if (mode == 3){
              // tem.length = 0;
              for (var i = 0; i <  coordinates.length/3 - 1; i++){
                tem = tem.concat(coordinates[3 * i]);
                tem = tem.concat(coordinates[3 * i + 1]);
                tem = tem.concat(coordinates[3 * i + 2]);
                tem = tem.concat(coordinates[3 * i + 3]);
                tem = tem.concat(coordinates[3 * i + 4]);
                tem = tem.concat(coordinates[3 * i + 5]);
              }
            }
            // for (var i = 0; i < 1500;i++)
            //    tem = tem.concat(0);
            if (mode == 1){
              // tem.length = 0;
              for (var i = 0; i <  coordinates.length/3; i++){
                tem = tem.concat(coordinates[3 * i]);
                tem = tem.concat(coordinates[3 * i + 1]);
                tem = tem.concat(coordinates[3 * i + 2]);
              }
               for (var i = 0; i < 1500;i++)
                 tem = tem.concat(0);
            }
            
            //  console.log("coordinates",coordinates);
            //  console.log("tem",tem);
            var newData1 = new Varying_data;
            newData1.shaderName = "line_point";
            newData1.varyEleNum = 3;
            // newData1.uniformData.length = 0;
            newData1.uniformData = tem;
            // console.log("asaadxasdscdsvsfdbvfdsbgf",newData1.uniformData);
            for (var i =0; i < newData1.uniformData.length; i++)
              if (i % 3 != 2)
                newData1.uniformData[i] = Math.round(newData1.uniformData[i] * 1000);
              else
                newData1.uniformData[i] = -1 * Math.round(newData1.uniformData[i] * 1000);
            ProgramDataMap[activeProgramNum].varyingData.push(newData1);
            //关于那一条斜线的数据，可以认为处理掉，无所谓的
            //console.log("ProgramDataMap", ProgramDataMap);
        
            //清除上一个的数据
            //gl.clearColor(0.0, 0.0, 1.0, 1.0);
            //gl.clear(gl.COLOR_BUFFER_BIT);
        
            var canvas_buffer = [-1.0, -1.0, 
              1.0, -1.0, 
              -1.0,  1.0, 
              -1.0,  1.0,
              1.0, -1.0, 
              1.0,  1.0]; 
            var new_vertex_buffer = gl.createBuffer();
            gl.my_bindBuffer(gl.ARRAY_BUFFER, new_vertex_buffer);
            gl.my_glbufferData(gl.ARRAY_BUFFER, new Float32Array(canvas_buffer), gl.STATIC_DRAW);
            __VertexPositionAttributeLocation1 = gl.my_getAttribLocation(activeProgram, 'coordinates');
            gl.my_vertexAttribPointer(__VertexPositionAttributeLocation1, 2 ,gl.FLOAT, gl.FALSE, 2 * Float32Array.BYTES_PER_ELEMENT , 0); 
            gl.enableVertexAttribArray(__VertexPositionAttributeLocation1); 
            gl.my_useProgram(activeProgram);
            var traingles_vex_loc = gl.my_getUniformLocation(activeProgram, "line_point");
            gl.my_uniform3iv(traingles_vex_loc, ProgramDataMap[activeProgramNum].varyingData[0].uniformData);
            // console.log("ProgramDataMap[activeProgramNum].varyingData[0].uniformData",ProgramDataMap[activeProgramNum].varyingData[0].uniformData);
            //console.log("开始draw");
        
            // console.log("测试1");
             gl.clearColor(0, 0, 0, 1.0);
             gl.enable(gl.DEPTH_TEST);
             gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        
            gl.my_drawArrays(gl.TRIANGLES, 0, 6);
            // console.log("画了");
              
        
          }//vetexID == 0
          
      
          //这是cube camera测试的
          if (ProgramDataMap[activeProgramNum].shaderJsID == 1){
            // console.log("begin work");
            var mWorld = new Float32Array(16);
            var mWorld_fs = new Float32Array(16);
            var mView_fs = new Float32Array(16);
            var mView = new Float32Array(16);
            var mProj = new Float32Array(16);
            var vertPosition = [];
            var vertColor = [];
            var varyingmap = [];
            var __VertexPositionAttributeLocation1;
            //attribute 读取阶段
            for (var i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == "vertPosition")
                vertPosition = ProgramDataMap[activeProgramNum].attriData[i].uniformData;         
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == "vertColor")
                vertColor = ProgramDataMap[activeProgramNum].attriData[i].uniformData;
            }
      
            // console.log("vertColor",vertColor);
            //uniform 读取阶段
            for (var i = 0; i < ProgramDataMap[activeProgramNum].uniformData.length; i++){
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == "mWorld")
                mWorld = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;         
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == "mView")
                mView = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == "mProj")
                mProj = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            }
        
            //进入vetex计算部分
            mat4.copy(mWorld_fs, mWorld);
            mat4.copy(mView_fs, mView);
            mat4.transpose(mWorld, mWorld);
            mat4.transpose(mView, mView);
            mat4.transpose(mProj, mProj);
            mat4.mul(mView, mView, mProj);
            mat4.mul(mWorld, mWorld, mView);
        
            //进入计算阶段
            //手工去完成自动化的那部分
            
            var newData1 = new Varying_data;
            newData1.shaderName = "tri_point";
            newData1.varyEleNum = 3;
            newData1.uniformData = my_m4.vec_max_mul(vertPosition, mWorld);
            for (var i =0; i < newData1.uniformData.length; i++)
              if (i % 3 != 2)
                newData1.uniformData[i] = Math.round(newData1.uniformData[i] * 1000);
              else
                newData1.uniformData[i] = -1 * Math.round(newData1.uniformData[i] * 1000);
            ProgramDataMap[activeProgramNum].varyingData.push(newData1);
        
            var newData2 = new Varying_data;
            newData2.shaderName = "tri_color";
            newData2.varyEleNum = 3;
            for (var i = 0; i < vertColor.length; i++){
              newData2.uniformData = newData2.uniformData.concat(vertColor[i]);
              newData2.uniformData[i] = Math.round(((newData2.uniformData[i] )) * 1000);
            } 
            ProgramDataMap[activeProgramNum].varyingData.push(newData2);
      
        
        
            var index_num = ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length / 3;
              var x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
              var tem_varying = []; //创建临时的varying二维数组去储存所有的数据
              var tem = [];
              for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++)
                tem_varying.push(tem);
              for (var i = 0; i < index_num; i+= 3){
                x1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3];
                y1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 1];
                z1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 2];
                x2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 3];
                y2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 4];
                z2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 5];
                x3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 6];
                y3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 7];
                z3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i * 3 + 8];
                if (((x2 - x1)*(y3 - y1) - (x3 - x1)*(y2 - y1)) > 0.0){
                  for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++){
                    for (k = 0; k < 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum; k++)
                      tem_varying[j] = tem_varying[j].concat(ProgramDataMap[activeProgramNum].varyingData[j].uniformData[i * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum + k]);  
                  }
                }
              }
              
              
              //把数值赋给了ProgramDataMap
              for (var i = 0; i < ProgramDataMap[activeProgramNum].varyingData.length; i++){
                ProgramDataMap[activeProgramNum].varyingData[i].uniformData = [];
                for(var j = 0; j < tem_varying[i].length; j++)
                  ProgramDataMap[activeProgramNum].varyingData[i].uniformData = ProgramDataMap[activeProgramNum].varyingData[i].uniformData.concat(tem_varying[i][j]);
              }
        
        
            var canvas_buffer = [-1.0, -1.0, 
              1.0, -1.0, 
              -1.0,  1.0, 
              -1.0,  1.0,
              1.0, -1.0, 
              1.0,  1.0]; 
            var new_vertex_buffer = gl.createBuffer();
            gl.my_bindBuffer(gl.ARRAY_BUFFER, new_vertex_buffer);
            gl.my_glbufferData(gl.ARRAY_BUFFER, new Float32Array(canvas_buffer), gl.STATIC_DRAW);
            __VertexPositionAttributeLocation1 = gl.my_getAttribLocation(activeProgram, 'vertPosition');
            gl.my_vertexAttribPointer(__VertexPositionAttributeLocation1, 2 ,gl.FLOAT, gl.FALSE, 2 * Float32Array.BYTES_PER_ELEMENT , 0); 
            gl.enableVertexAttribArray(__VertexPositionAttributeLocation1); 
            gl.my_useProgram(activeProgram);
            var traingles_vex_loc = gl.my_getUniformLocation(activeProgram, "tri_point");
            var traingles_fra_loc = gl.my_getUniformLocation(activeProgram, "tri_color");
            var traingles_num_loc = gl.my_getUniformLocation(activeProgram, "tri_number");
            // console.log(traingles_vex_loc);
            // console.log(traingles_fra_loc);
            // console.log(gl.my_getUniformLocation(activeProgram, "tri_numberdsds"));
            gl.my_uniform1i(traingles_num_loc, ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length/3);
            gl.my_uniform3iv(traingles_vex_loc, ProgramDataMap[activeProgramNum].varyingData[0].uniformData);
            gl.my_uniform3iv(traingles_fra_loc, ProgramDataMap[activeProgramNum].varyingData[1].uniformData);
            // console.log("开始画了");
            
            // console.log("ProgramDataMap",ProgramDataMap);
            gl.my_drawArrays(gl.TRIANGLES, 0, 6);  
          }
      
      
      
      
      
          if (ProgramDataMap[activeProgramNum].shaderJsID == 2){
            // console.log(ProgramDataMap);
      
            //读取数据
            //attribute 读取
            //vec3 vec2
            var vertPosition = [];
            var vertTexCoord = [];
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertPosition'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertPosition.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                  vertPosition.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertTexCoord'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertTexCoord.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                    vertTexCoord.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            //uniform 读取
            var mWorld = [];
            var mView = [];
            var mProj = [];
            for (var i in ProgramDataMap[activeProgramNum].uniformData){
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mWorld') 
                mWorld = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mView')
                mView = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mProj')
                mProj = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            }
      
            //vertex shader 运行
            var fragTexCoord = [];
            var gl_Position = [];
            ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3;
            var Mt = [];
            Mt = my_multiple( my_multiple( mProj, mView ), mWorld );
      
      
            eval(compiled);
            //执行eval 的 vertex shader部分
            eval_main();
            // for (var bigI = 0;bigI < ll;++ bigI) { 
            //   fragTexCoord[bigI] = vertTexCoord[bigI];
            //   gl_Position[bigI] = my_multiple( my_multiple( my_multiple( mProj, mView ), mWorld ), new Float32Array([vertPosition[bigI][0], vertPosition[bigI][1], vertPosition[bigI][2], 1] ));
            // }
      
      
      
            //放进varying数据
            var newData1 = new Varying_data;
            newData1.shaderName = "tri_point";
            newData1.varyEleNum = 3;
            newData1.uniformData = handle_gl_Position(gl_Position);
            ProgramDataMap[activeProgramNum].varyingData.push(newData1);
      
          
            var t0 = performance.now();
            var newData2 = new Varying_data;
            newData2.shaderName = "text_point";
            newData2.varyEleNum = 2;
            newData2.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
            ProgramDataMap[activeProgramNum].varyingData.push(newData2);
      
            //判断是否是正面
            var t0 = performance.now();
            var index_num = ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length;
            var x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
            var tem_varying = []; //创建临时的varying二维数组去储存所有的数据
            for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++)
              tem_varying.push([]);
            for (var i = 0; i < index_num; i += 3){
              x1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][0];
              y1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][1];
              z1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][2];
              x2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][0];
              y2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][1];
              z2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][2];
              x3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][0];
              y3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][1];
              z3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][2];
              if (((x2 - x1)*(y3 - y1) - (x3 - x1)*(y2 - y1)) > 0.0){
              for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++){
                for (k = 0; k < 3; k++)
                tem_varying[j].push(ProgramDataMap[activeProgramNum].varyingData[j].uniformData[i + k]);
              }
              }
            }
            for (var idx in tem_varying)
              tem_varying[idx] = math.flatten(tem_varying[idx]);
      
          
      
            devide_draw(0, 255, tem_varying, gl);
          }
      
      
      
      
      
      
      
      
      
      
          if (ProgramDataMap[activeProgramNum].shaderJsID == 3){
            // console.log(ProgramDataMap);
      
            //读取数据
            //attribute 读取
            //vec3 vec2
            var vertPosition = [];
            var vertTexCoord = [];
            var vertNormal = [];
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertPosition'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertPosition.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                  vertPosition.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertTexCoord'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertTexCoord.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                    vertTexCoord.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertNormal'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertNormal.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                    vertNormal.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            //uniform 读取
            var mWorld = [];
            var mView = [];
            var mProj = [];
            for (var i in ProgramDataMap[activeProgramNum].uniformData){
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mWorld') 
                mWorld = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mView')
                mView = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mProj')
                mProj = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            }
      
            //vertex shader 运行
            var fragTexCoord = [];
            var gl_Position = [];
            var fragNormal = [];
            var Mt = [];
            Mt = my_multiple( my_multiple( mProj, mView ), mWorld );
            var tt = [];
            ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3;
            // for (var bigI = 0,  ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3 ;bigI <  ll; ++bigI ) { 
            //   fragTexCoord[bigI] = vertTexCoord[bigI];
            //   tt = my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));
            //   fragNormal[bigI] = [tt[0],tt[1],tt[2]];
            //   gl_Position[bigI] = my_multiple( Mt, new Float32Array([vertPosition[bigI][0], vertPosition[bigI][1], vertPosition[bigI][2], 1] ));
            // }
      
            eval(compiled);
            //执行vertex shader
            eval_main();
            
      
            //放进varying数据
            var newData1 = new Varying_data;
            newData1.shaderName = "tri_point";
            newData1.varyEleNum = 3;
            newData1.uniformData = handle_gl_Position(gl_Position);
            ProgramDataMap[activeProgramNum].varyingData.push(newData1);
      
          
            var t0 = performance.now();
            var newData2 = new Varying_data;
            newData2.shaderName = "text_point";
            newData2.varyEleNum = 2;
            newData2.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
            ProgramDataMap[activeProgramNum].varyingData.push(newData2);
      
            var newData3 = new Varying_data;
            newData3.shaderName = "nor_point";
            newData3.varyEleNum = 3;
            // fragNormal = math.flatten(fragNormal);
            // console.log(fragNormal);
            newData3.uniformData = fragNormal.map(x => x.map(y => Math.floor(y * 1000)))
                ProgramDataMap[activeProgramNum].varyingData.push(newData3);
      
            //判断是否是正面
            var t0 = performance.now();
            var index_num = ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length;
            var x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
            var tem_varying = []; //创建临时的varying二维数组去储存所有的数据
            for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++)
              tem_varying.push([]);
            for (var i = 0; i < index_num; i += 3){
              x1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][0];
              y1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][1];
              z1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][2];
              x2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][0];
              y2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][1];
              z2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][2];
              x3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][0];
              y3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][1];
              z3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][2];
              if (((x2 - x1)*(y3 - y1) - (x3 - x1)*(y2 - y1)) > 0.0){
              for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++){
                for (k = 0; k < 3; k++)
                tem_varying[j].push(ProgramDataMap[activeProgramNum].varyingData[j].uniformData[i + k]);
              }
              }
            }
            for (var idx in tem_varying)
              tem_varying[idx] = math.flatten(tem_varying[idx]);
      
          
      
            devide_draw(0, 255, tem_varying, gl);
          }
      
      
      
      
          if (ProgramDataMap[activeProgramNum].shaderJsID == 4){
            // console.log(ProgramDataMap);
      
            //读取数据
            //attribute 读取
            //vec3 vec2
            var vertPosition = [];
            var vertTexCoord = [];
            var vertNormal = [];
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertPosition'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertPosition.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                  vertPosition.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertTexCoord'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertTexCoord.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                    vertTexCoord.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertNormal'){
                var number = ProgramDataMap[activeProgramNum].attriData[i].attriEleNum;
                var tem =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
                for (j = 0; j < tem.length / number; j++){
                  if (number == 3)
                    vertNormal.push( [tem[j*3], tem[j*3+1], tem[j*3+2]]);
                  else
                    vertNormal.push( [tem[j*2], tem[j*2+1]]);
                }
              }
            }
      
            //uniform 读取
            var mWorld = [];
            var mView = [];
            var mProj = [];
            for (var i in ProgramDataMap[activeProgramNum].uniformData){
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mWorld') 
                mWorld = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mView')
                mView = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mProj')
                mProj = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            }
      
            //vertex shader 运行
            var fragTexCoord = [];
            var gl_Position = [];
            var fragNormal = [];
            var vPosition = [];
            var Mt = [];
            Mt = my_multiple( my_multiple( mProj, mView ), mWorld );
            var tt = [];
            var ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3 ;
            // for (var bigI = 0,  ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3 ;bigI <  ll; ++bigI ) { 
            //   vPosition[bigI] = my_multiple( mView, new Float32Array([vertPosition[bigI][0], vertPosition[bigI][1], vertPosition[bigI][2], 1]) );
            //   fragTexCoord[bigI] = vertTexCoord[bigI];
            //   tt = my_multiple( mWorld, new Float32Array([vertNormal[bigI][0], vertNormal[bigI][1], vertNormal[bigI][2], 0]));
            //   fragNormal[bigI] = [tt[0],tt[1],tt[2]];
            //   gl_Position[bigI] = my_multiple( Mt, new Float32Array([vertPosition[bigI][0], vertPosition[bigI][1], vertPosition[bigI][2], 1] ));
            // }
            eval(compiled);
            //执行vertex shader部分
            eval_main();
      
            //放进varying数据
            var newData1 = new Varying_data;
            newData1.shaderName = "tri_point";
            newData1.varyEleNum = 3;
            newData1.uniformData = handle_gl_Position(gl_Position);
            ProgramDataMap[activeProgramNum].varyingData.push(newData1);
      
          
            var t0 = performance.now();
            var newData2 = new Varying_data;
            newData2.shaderName = "text_point";
            newData2.varyEleNum = 2;
            newData2.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
            ProgramDataMap[activeProgramNum].varyingData.push(newData2);
      
            var newData3 = new Varying_data;
            newData3.shaderName = "nor_point";
            newData3.varyEleNum = 3;
            // fragNormal = math.flatten(fragNormal);
            // console.log(fragNormal);
            newData3.uniformData = fragNormal.map(x => x.map(y => Math.floor(y * 1000)))
                ProgramDataMap[activeProgramNum].varyingData.push(newData3);
      
            var newData4 = new Varying_data;
            newData4.shaderName = "vPosition";
            newData4.varyEleNum = 4;
            newData4.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
            ProgramDataMap[activeProgramNum].varyingData.push(newData4);
      
            //判断是否是正面
            var t0 = performance.now();
            var index_num = ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length;
            var x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
            var tem_varying = []; //创建临时的varying二维数组去储存所有的数据
            for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++)
              tem_varying.push([]);
            for (var i = 0; i < index_num; i += 3){
              x1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][0];
              y1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][1];
              z1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i][2];
              x2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][0];
              y2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][1];
              z2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1][2];
              x3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][0];
              y3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][1];
              z3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2][2];
              if (((x2 - x1)*(y3 - y1) - (x3 - x1)*(y2 - y1)) > 0.0){
              for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++){
                for (k = 0; k < 3; k++)
                tem_varying[j].push(ProgramDataMap[activeProgramNum].varyingData[j].uniformData[i + k]);
              }
              }
            }
            for (var idx in tem_varying)
              tem_varying[idx] = math.flatten(tem_varying[idx]);
      
          
      
            devide_draw(0, 255, tem_varying, gl);
          }
      
      
      
      
      
          if (ProgramDataMap[activeProgramNum].shaderJsID == 5){
            // console.log(ProgramDataMap);
      
            //读取数据
            //attribute 读取
            //vec3 vec2
            var vertPosition = [];
            var vertTexCoord = [];
            for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertPosition')
                vertPosition =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertTexCoord'){
                vertTexCoord =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
            }
      
            //uniform 读取
            var mWorld = [];
            var mView = [];
            var mProj = [];
            for (var i in ProgramDataMap[activeProgramNum].uniformData){
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mWorld') 
                mWorld = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mView')
                mView = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
              if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mProj')
                mProj = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            }
      
            //vertex shader 运行
            var fragTexCoord = [];
            var gl_Position = [];
            ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3;
            var Mt = [];
            Mt = my_multiple( my_multiple( mProj, mView ), mWorld );
      
      
            eval(compiled);
            //执行eval 的 vertex shader部分
            eval_main();
            // wasm part
            // matrixCalculator.loadMatrix(0, vertPosition);
            // matrixCalculator.loadMatrix(1, vertTexCoord);
            // fragTexCoord = vertTexCoord;
            // var resLength = matrixCalculator.doMatMul (0,  ( my_multiple( my_multiple( mProj, mView ), mWorld );
            // var gl_Position =  matrixCalculator.res;
      
      
      
            //放进varying数据
            var newData1 = new Varying_data;
            newData1.shaderName = "tri_point";
            newData1.varyEleNum = 3;
            newData1.uniformData = handle_gl_Position(gl_Position);
            ProgramDataMap[activeProgramNum].varyingData.push(newData1);
      
          
            var t0 = performance.now();
            var newData2 = new Varying_data;
            newData2.shaderName = "text_point";
            newData2.varyEleNum = 2;
            newData2.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
            ProgramDataMap[activeProgramNum].varyingData.push(newData2);
      
            //判断是否是正面
            var t0 = performance.now();
            var index_num = ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length;
            var x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
            var tem_varying = []; //创建临时的varying二维数组去储存所有的数据
            for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++)
              tem_varying.push([]);
            for (var i = 0; i < index_num; i += 9){
              x1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i];
              y1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1];
              z1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2];
              x2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 3];
              y2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 4];
              z2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 5];
              x3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 6];
              y3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 7];
              z3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 8];
              if (((x2 - x1)*(y3 - y1) - (x3 - x1)*(y2 - y1)) > 0.0){
              for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++){
                for (k = 0; k < 3; k++)
                tem_varying[j].push(ProgramDataMap[activeProgramNum].varyingData[j].uniformData[i + k]);
              }
              }
            }
            for (var idx in tem_varying)
              tem_varying[idx] = math.flatten(tem_varying[idx]);
      
          
      
            devide_draw(0, 255, tem_varying, gl);
          }
      
      
      
      
          //数据清除
          ProgramDataMap[activeProgramNum].attriData = [];
          ProgramDataMap[activeProgramNum].uniformData = [];
          ProgramDataMap[activeProgramNum].varyingData = [];
      
      
      
        }
      
      
      
        if (ProgramDataMap[activeProgramNum].shaderJsID == 6){
          // console.log(ProgramDataMap);
      
          //读取数据
          //attribute 读取
          //vec3 vec2
          var vertPosition = [];
          var vertTexCoord = [];
          for (i = 0; i < ProgramDataMap[activeProgramNum].attriData.length; i++){
            if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertPosition')
              vertPosition =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
            if (ProgramDataMap[activeProgramNum].attriData[i].shaderName == 'vertTexCoord'){
              vertTexCoord =  ProgramDataMap[activeProgramNum].attriData[i].uniformData;
          }
      
          //uniform 读取
          var mWorld = [];
          var mView = [];
          var mProj = [];
          for (var i in ProgramDataMap[activeProgramNum].uniformData){
            if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mWorld') 
              mWorld = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mView')
              mView = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
            if (ProgramDataMap[activeProgramNum].uniformData[i].shaderName == 'mProj')
              mProj = ProgramDataMap[activeProgramNum].uniformData[i].uniformData;
          }
      
          //vertex shader 运行
          var fragTexCoord = [];
          var gl_Position = [];
          ll = ProgramDataMap[activeProgramNum].attriData[0].uniformData.length / 3;
          var Mt = [];
          Mt = my_multiple( my_multiple( mProj, mView ), mWorld );
      
      
          eval(compiled);
          //执行eval 的 vertex shader部分
          eval_main();
          // wasm part
          // matrixCalculator.loadMatrix(0, vertPosition);
          // matrixCalculator.loadMatrix(1, vertTexCoord);
          // matrixCalculator.loadMatrix(2, vertNormal);
          // fragTexCoord = vertTexCoord;
          // var resLength = matrixCalculator.doMatMul (2, mWorld);
          // fragNormal = matrixCalculator.res;
          // var resLength = matrixCalculator.doMatMul (0, my_multiple( my_multiple( my_multiple( mProj, mView ), mWorld ));
          // gl_Position = matrixCalculator.res;
      
      
          //放进varying数据
          var newData1 = new Varying_data;
          newData1.shaderName = "tri_point";
          newData1.varyEleNum = 3;
          newData1.uniformData = handle_gl_Position(gl_Position);
          ProgramDataMap[activeProgramNum].varyingData.push(newData1);
      
        
          var t0 = performance.now();
          var newData2 = new Varying_data;
          newData2.shaderName = "text_point";
          newData2.varyEleNum = 2;
          newData2.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
          ProgramDataMap[activeProgramNum].varyingData.push(newData2);
      
          var newData3 = new Varying_data;
          newData3.shaderName = "nor_point";
          newData3.varyEleNum = 3;
          // fragNormal = math.flatten(fragNormal);
          // console.log(fragNormal);
          newData3.uniformData = fragNormal.map(x => x.map(y => Math.floor(y * 1000)))
              ProgramDataMap[activeProgramNum].varyingData.push(newData3);
      
          var newData4 = new Varying_data;
          newData4.shaderName = "vPosition";
          newData4.varyEleNum = 4;
          newData4.uniformData = fragTexCoord.map(x => x.map(y => Math.floor(y * 1000)))
          ProgramDataMap[activeProgramNum].varyingData.push(newData4);
      
      
      
          //判断是否是正面
          var t0 = performance.now();
          var index_num = ProgramDataMap[activeProgramNum].varyingData[0].uniformData.length;
          var x0, y0, x1, y1, z1, x2, y2, z2, x3,  y3, z3;
          var tem_varying = []; //创建临时的varying二维数组去储存所有的数据
          for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++)
            tem_varying.push([]);
          for (var i = 0; i < index_num; i += 9){
            x1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i];
            y1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 1];
            z1 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 2];
            x2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 3];
            y2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 4];
            z2 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 5];
            x3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 6];
            y3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 7];
            z3 = ProgramDataMap[activeProgramNum].varyingData[0].uniformData[i + 8];
            if (((x2 - x1)*(y3 - y1) - (x3 - x1)*(y2 - y1)) > 0.0){
            for(j = 0; j < ProgramDataMap[activeProgramNum].varyingData.length; j++){
              for (k = 0; k < 3; k++)
              tem_varying[j].push(ProgramDataMap[activeProgramNum].varyingData[j].uniformData[i + k]);
            }
            }
          }
          for (var idx in tem_varying)
            tem_varying[idx] = math.flatten(tem_varying[idx]);
      
        
      
          devide_draw(0, 255, tem_varying, gl);
        }
      }
      
      
      
      
        //数据清除
        ProgramDataMap[activeProgramNum].attriData = [];
        ProgramDataMap[activeProgramNum].uniformData = [];
        ProgramDataMap[activeProgramNum].varyingData = [];
      
      
      
      }
      
      
          /*-------------------------draw array--------------------------------------*/
        
          var uniform_number  = 75;
        
          function devide_draw(left, right, tem_varying, gl){
          
            var tem = [];
            var left_varying = [];
            var right_varying = [];
            var tri_number = tem_varying[0].length / 9;
            var mid = Math.floor((left + right) / 2);
            var left_number = 0;
            var right_number = 0;
            var __Program;
            var activeProgramNum;
            var __VertexPositionAttributeLocation1;
            __Program = getactiveProgram();
            activeProgramNum = getactiveProgramNum();
            var canvas_left;
            var canvas_mid;
            var canvas_right;
          
          
            for (var i = 0; i < tem_varying.length; i++){
            left_varying.push([]);
            right_varying.push([]);
            }
            for (var i = 0; i < tri_number; i++){
            if (!((tem_varying[0][i * 9] >= mid) && (tem_varying[0][i * 9 + 3] >= mid) && (tem_varying[0][i * 9 + 6] >= mid))){
              left_number ++;
              //后加入同一化的代码
              for (var j = 0; j < tem_varying.length; j++){
              for (var k = 0; k < 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum; k++)
                left_varying[j].push(tem_varying[j][i * 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum + k]);
              }
          
            }   
            if (!((tem_varying[0][i * 9] <= mid) && (tem_varying[0][i * 9 + 3] <= mid) && (tem_varying[0][i * 9 + 6] <= mid))){
              right_number ++;
              //后加入的代码
              for (var j = 0; j < tem_varying.length; j++){
              for (var k = 0; k < 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum; k++)
                right_varying[j].push(tem_varying[j][i * 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum + k]);
              }     
            }
            }
          
            if (left_number <= uniform_number){
            if (left_number > 0){
          
              var right_canvas_buffer = [
              left * 2 / 255 - 1.0,     -1.0, 
              mid * 2 / 255 - 1.0,      -1.0, 
              left * 2 / 255 - 1.0,      1.0, 
              left * 2 / 255 - 1.0,      1.0,
              mid * 2 / 255 - 1.0,      -1.0, 
              mid * 2 / 255 - 1.0,       1.0]; 
              // console.log("left",left, "right", mid);
          
              var new_vertex_buffer = gl.createBuffer();
              gl.my_bindBuffer(gl.ARRAY_BUFFER, new_vertex_buffer);
              gl.my_glbufferData(gl.ARRAY_BUFFER, new Float32Array(right_canvas_buffer), gl.STATIC_DRAW);
              __VertexPositionAttributeLocation1 = gl.my_getAttribLocation(__Program, 'vertPosition');
          
              gl.my_vertexAttribPointer(__VertexPositionAttributeLocation1, 2 ,gl.FLOAT, gl.FALSE, 2 * Float32Array.BYTES_PER_ELEMENT , 0); 
              gl.enableVertexAttribArray(__VertexPositionAttributeLocation1); 
              gl.my_useProgram(__Program);
              var traingles_num_loc = gl.my_getUniformLocation(__Program, "tri_number");
              gl.my_uniform1i(traingles_num_loc, left_number);
              transUniform(__Program);
              //要实现自动化的代码
              var loc_array = [];
              for(var i = 0; i < ProgramDataMap[activeProgramNum].varyingData.length; i++){
              loc_array[i] = gl.my_getUniformLocation(__Program, ProgramDataMap[activeProgramNum].varyingData[i].shaderName);
              if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 2)
                gl.my_uniform2iv(loc_array[i], left_varying[i]);
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 3){
                gl.my_uniform3iv(loc_array[i], left_varying[i]);
              //   console.log("left_varying",i,left_varying[i]);
              }
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 4)
                gl.my_uniform4iv(loc_array[i], left_varying[i]);
              else
                console.log("暂时还没有写这种情况");
              }
              //console.log("left");
              //console.log("left_varying",left_varying);
              gl.my_drawArrays(gl.TRIANGLES, 0, 6);
            }
            }
            else{
            if (mid == right){
          
              devide_draw_height(left, right, 0, 255, tem_varying , gl);
              return;
            } 
            devide_draw(left, mid, left_varying, gl);
            }
          
            if (right_number <= uniform_number){
            if (right_number > 0){
              var right_canvas_buffer = [
              mid * 2 / 255 - 1.0, -1.0, 
              right * 2 / 255 - 1.0, -1.0, 
              mid * 2 / 255 - 1.0,  1.0, 
              mid * 2 / 255 - 1.0,  1.0,
              right * 2 / 255 - 1.0, -1.0, 
              right * 2 / 255 - 1.0,  1.0]; 
              // console.log("left",mid, "right", right);
              var new_vertex_buffer = gl.createBuffer();
              gl.my_bindBuffer(gl.ARRAY_BUFFER, new_vertex_buffer);
              gl.my_glbufferData(gl.ARRAY_BUFFER, new Float32Array(right_canvas_buffer), gl.STATIC_DRAW);
              __VertexPositionAttributeLocation1 = gl.my_getAttribLocation(__Program, 'vertPosition');
              gl.my_vertexAttribPointer(__VertexPositionAttributeLocation1, 2 ,gl.FLOAT, gl.FALSE, 2 * Float32Array.BYTES_PER_ELEMENT , 0); 
              gl.enableVertexAttribArray(__VertexPositionAttributeLocation1);   
              gl.my_useProgram(__Program);
              var traingles_num_loc = gl.my_getUniformLocation(__Program, "tri_number");
              gl.my_uniform1i(traingles_num_loc, right_number);
              transUniform(__Program);
              //要实现自动化的代码
              var loc_array = [];
              for(var i = 0; i < ProgramDataMap[activeProgramNum].varyingData.length; i++){
              loc_array[i] = gl.my_getUniformLocation(__Program, ProgramDataMap[activeProgramNum].varyingData[i].shaderName);
              if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 2)
                gl.my_uniform2iv(loc_array[i], right_varying[i]);
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 3){
                gl.my_uniform3iv(loc_array[i], right_varying[i]);
              //   console.log("right_varying",i,  right_varying[i]);
              }
          
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 4)
                gl.my_uniform4iv(loc_array[i], right_varying[i]);
              else 
                console.log("暂时还没有写这种情况");
              }
          
              gl.my_drawArrays(gl.TRIANGLES, 0, 6);
            }
            }
            else{
            if (mid == left){
          
              devide_draw_height(left, right, 0, 255, tem_varying, gl);
          
              return;
            } 
            devide_draw(mid, right, right_varying, gl);
            }
            return;
          }
          
          
          
          
          function devide_draw_height(left, right, bot, top, tem_varying, gl){
            var canvas_left;
            var canvas_mid;
            var canvas_right;
            var canvas_bot;
            var canvas_top;
            var tem = [];
            var bot_varying = [];
            var top_varying = [];
            var tri_number = tem_varying[0].length / 9;
            var mid = Math.floor((bot + top) / 2);
            var bot_number = 0;
            var top_number = 0;
            var __Program;
            var activeProgramNum;
            var __VertexPositionAttributeLocation1;
            __Program = getactiveProgram();
            activeProgramNum = getactiveProgramNum();
          
          
            //console.log("中间点", mid);
            for (var i = 0; i < tem_varying.length; i++){
            bot_varying.push(tem);
            top_varying.push(tem);
            }
            for (var i = 0; i < tri_number; i++){
            if (!((tem_varying[0][i * 9 + 1] >= mid) && (tem_varying[0][i * 9 + 4] >= mid) && (tem_varying[0][i * 9 + 7] >= mid))){
              bot_number ++;
              //后加入同一化的代码
              for (var j = 0; j < tem_varying.length; j++){
              for (var k = 0; k < 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum; k++)
                bot_varying[j] = bot_varying[j].concat(tem_varying[j][i * 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum + k]);
              } 
            }   
            if (!((tem_varying[0][i * 9 + 1] <= mid) && (tem_varying[0][i * 9 + 4] <= mid) && (tem_varying[0][i * 9 + 7] <= mid))){
          
              top_number ++;
              //后加入同一化的代码
              for (var j = 0; j < tem_varying.length; j++){
              for (var k = 0; k < 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum; k++)
                top_varying[j] = top_varying[j].concat(tem_varying[j][i * 3 * ProgramDataMap[activeProgramNum].varyingData[j].varyEleNum + k]);
              }
            }
            }
            if (bot_number <= uniform_number){
          
            if (bot_number > 0){
              var right_canvas_buffer = [
              left * 2 / 255 - 1.0,   bot * 2 / 255 -1.0, 
              right * 2 / 255 - 1.0,    bot * 2 / 255 -1.0, 
              left * 2 / 255 - 1.0,    mid * 2 / 255 -1.0, 
              left * 2 / 255 - 1.0,    mid * 2 / 255 -1.0,
              right * 2 / 255 - 1.0,    bot * 2 / 255 -1.0, 
              right * 2 / 255 - 1.0,    mid * 2 / 255 -1.0]; 
          
              var new_vertex_buffer = gl.createBuffer();
              gl.my_bindBuffer(gl.ARRAY_BUFFER, new_vertex_buffer);
              gl.my_glbufferData(gl.ARRAY_BUFFER, new Float32Array(right_canvas_buffer), gl.STATIC_DRAW);
              __VertexPositionAttributeLocation1 = gl.my_getAttribLocation(__Program, 'vertPosition');
              gl.my_vertexAttribPointer(__VertexPositionAttributeLocation1, 2 ,gl.FLOAT, gl.FALSE, 2 * Float32Array.BYTES_PER_ELEMENT , 0); 
              gl.enableVertexAttribArray(__VertexPositionAttributeLocation1);   
              gl.my_useProgram(__Program);
              var traingles_num_loc = gl.my_getUniformLocation(__Program, "tri_number");
              gl.my_uniform1i(traingles_num_loc, bot_number);
              transUniform(__Program);
              //要实现自动化的代码
              var loc_array = [];
              for(var i = 0; i < ProgramDataMap[activeProgramNum].varyingData.length; i++){
              loc_array[i] = gl.my_getUniformLocation(__Program, ProgramDataMap[activeProgramNum].varyingData[i].shaderName);
              if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 2)
                gl.my_uniform2iv(loc_array[i], bot_varying[i]);
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 3){
                gl.my_uniform3iv(loc_array[i], bot_varying[i]);
              //   console.log("bot_varying",i,bot_varying[i]);
              }
          
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 4)
                gl.my_uniform4iv(loc_array[i], bot_varying[i]);
              else 
                console.log("暂时还没有写这种情况");
              }
          
              gl.my_drawArrays(gl.TRIANGLES, 0, 6);
            }
            }
            else{
            if (mid == top){
          
              return;
            } 
            devide_draw_height(left, right, bot, mid, bot_varying, gl);
            } 
          
            if (top_number <= uniform_number){
          
            if (top_number > 0){
              var right_canvas_buffer = [
              left * 2 / 255 - 1.0, mid * 2 / 255 -1.0, 
              right * 2 / 255 - 1.0,  mid * 2 / 255 -1.0, 
              left * 2 / 255 - 1.0,  top * 2 / 255 -1.0, 
              left * 2 / 255 - 1.0,  top * 2 / 255 -1.0,
              right * 2 / 255 - 1.0,  mid * 2 / 255 -1.0, 
              right * 2 / 255 - 1.0,  top * 2 / 255 -1.0]; 
          
          
              var new_vertex_buffer = gl.createBuffer();
              gl.my_bindBuffer(gl.ARRAY_BUFFER, new_vertex_buffer);
              gl.my_glbufferData(gl.ARRAY_BUFFER, new Float32Array(right_canvas_buffer), gl.STATIC_DRAW);
              __VertexPositionAttributeLocation1 = gl.my_getAttribLocation(__Program, 'vertPosition');
              gl.my_vertexAttribPointer(__VertexPositionAttributeLocation1, 2 ,gl.FLOAT, gl.FALSE, 2 * Float32Array.BYTES_PER_ELEMENT , 0); 
              gl.enableVertexAttribArray(__VertexPositionAttributeLocation1);   
              gl.my_useProgram(__Program);
              var traingles_num_loc = gl.my_getUniformLocation(__Program, "tri_number");
              gl.my_uniform1i(traingles_num_loc, top_number);
              transUniform(__Program);
              //要实现自动化的代码
              var loc_array = [];
              for(var i = 0; i < ProgramDataMap[activeProgramNum].varyingData.length; i++){
              loc_array[i] = gl.my_getUniformLocation(__Program, ProgramDataMap[activeProgramNum].varyingData[i].shaderName);
              if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 2)
                gl.my_uniform2iv(loc_array[i], top_varying[i]);
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 3){
                gl.my_uniform3iv(loc_array[i], top_varying[i]);
              //   console.log("top_varying",i,top_varying[i]);
              }
          
              else if (ProgramDataMap[activeProgramNum].varyingData[i].varyEleNum == 4)
                gl.my_uniform4iv(loc_array[i], top_varying[i]);
              else 
                console.log("暂时还没有写这种情况");
              }
              gl.my_drawArrays(gl.TRIANGLES, 0, 6);
            }
            }
            else{
            if (mid == left){
              //console.log("left", left, "right", right, "bot", bot, "top", top, "number", top_number);
              return;
            } 
            devide_draw_height(left, right, mid, top, top_varying, gl);
            }
            return;
          }
          
          transUniform = function(__Program){
            for (var i = 0; i < ProgramDataMap.length; i++){
            if (ProgramDataMap[i].activeFlag == 1){
              for (var j = 0; j < ProgramDataMap[i].uniformData.length; j++){
              var loc = gl.my_getUniformLocation(__Program, ProgramDataMap[i].uniformData[j].shaderName);
              if (loc != null){ 
                var multiple = 1000;
                gl.my_uniform3i(loc, ProgramDataMap[i].uniformData[j].uniformData[0] * multiple, ProgramDataMap[i].uniformData[j].uniformData[1] * multiple, ProgramDataMap[i].uniformData[j].uniformData[2] * multiple);
              }
              }
            }
            }
          }
          
          
      
      
      
      
      
        return gl;
    }




    

} + ')();';
script.textContent = code;
document.documentElement.appendChild(script);