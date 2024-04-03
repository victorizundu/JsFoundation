   //Read Form inputs
   const form = document.querySelector("#form");
   const first = document.querySelector("#first");
   const second = document.querySelector("#second");

   // calculator operations
   const add = document.querySelector("#add");
   const sub = document.querySelector("#sub");
   const mul = document.querySelector("#mul");
   const div = document.querySelector("#div");

   //result
   const result = document.querySelector("#result")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    result.textContent = " Result is:" + calculateExpression(result.textContent)  
})

   first.addEventListener("change", function(e){
     result.textContent += e.currentTarget.value
   })

   second.addEventListener("change", function(e){
    result.textContent += e.currentTarget.value
  })

   add.onclick = function () {
    operation("+")
   }
   sub.onclick = function () {
    operation("-")
   }
   mul.onclick = function() {
    operation("*")
   }
   div.onclick = function() {
    operation("/")
   }

   function operation(ope){
    result.textContent += ope
   }

   function calculateExpression(expression) {
    // Remove "Result:" from the beginning of the string
    expression = expression.substring(expression.indexOf(':') + 1).trim();

    // Evaluate the expression using eval
    return eval(expression);
}


function addition(a,b) {
  let c = 0
  c = a + b
  console.log(c)
  return c
}
addition(5,5)
