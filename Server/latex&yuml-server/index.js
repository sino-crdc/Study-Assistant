const http = require("http"),
    url = require('url'),
    qs = require('querystring'),
    mathjax = require("mathjax-node"),
    yuml2svg = require('yuml2svg');

mathjax.start();

const app = http.createServer((req,res)=>{
    let queryObj = qs.parse(url.parse(req.url).query),
        tex = queryObj.tex,
        yuml = queryObj.yuml,
        theme = queryObj.theme,
        errFn = (msg)=>{
            res.writeHead(404,{'Content-type':'text/html;charset=utf-8'});
            res.write(msg);
            res.end();
        },
        successFn = (result)=>{
            res.writeHead(200,{'Content-type':'image/svg+xml;charset=utf-8'});
            res.write(result);
            res.end();
        };
    
    if(yuml){
        yuml2svg(yuml,{isDark:theme === 'dark'}).then(v => {
            successFn(v);
        }).catch(e => {
            errFn('Yuml formula is wrong!');
        });
    }else if(tex){
        mathjax.typeset({
            math:tex,
            format:'TeX',
            svg:true
        },data => {
            if(theme === 'dark'){
                data.svg = data.svg.replace(/fill="currentColor"/g,'fill="#c0c0b7"');
            }else{
                data.svg = data.svg.replace(/fill="currentColor"/g,'fill="#878787"');
	    };
            successFn(data.svg);
        })
    }else{
        errFn('Please pass LaTeX formula via `tex` parameter or `Yuml` expression using `yuml` parameter.');
    };
});
app.listen(8001);
