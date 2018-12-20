var products = [
{
FS000 : {
        name: "feathersoft",
        parent: ["null"],
        children:['FSA00','FSB00','FSC00'],
        siblings:["null"],
        level:0
        }
},
{
FSA00 : {
        name: "FS A Dept",
        parent: ["FS000"],
        children:["FSA01","FSA02"],
        siblings:["FSB00","FSC00"],
        level:1
        }
},
{
FSA01 : {
        name: "A Dept Emp1",
        parent: ["FSA00"],
        children:["null"],
        siblings:["FSA02","FSB01","FSB02","FSC01","FSC02"],
        level:2
        }
},
{
FSA02 : {
        name: "A Dept Emp2",
        parent: ["FSA00"],
        children:["null"],
        siblings:["FSA01","FSB01","FSB02","FSC01","FSC02"],
        level:2
        }
},
{
FSB00 : {
        name: "FS B Dept",
        parent: ["FS000"],
        children:['FSB01','FSB02'],
        siblings:['FSA00','FSC00'],
        level:1
        }
},
{
FSB01 : {
        name: "A Dept Emp1",
        parent: "FSB00",
        children:["null"],
        siblings:["FSA01","FSA02","FSB02","FSC01","FSC02"],
        level:2
        }
},
{
FSB02 : {
        name: "A Dept Emp2",
        parent: "FSB00",
        children:["null"],
        siblings:["FSA01","FSA02","FSB01","FSC01","FSC02"],
        level:2
        }
},
{
FSC00 : {
        name: "FS C Dept",
        parent: "FS000",
        children:['FSC01','FSC02'],
        siblings:['FSA00','FSB00'],
        level:1
        }
},
{
FSC01 : {
        name: "C Dept Emp1",
        parent: "FSC00",
        children:["null"],
        siblings:["FSA01","FSA02","FSB01","FSB02","FSC02"],
        level:2
        }
},
{
FSC02 : {
        name: "C Dept Emp2",
        parent: "FSC00",
        children:["null"],
        siblings:["FSA01","FSA02","FSB01","FSB02","FSC01"],
        level:2
        }
}];
