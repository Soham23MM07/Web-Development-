document.addEventListener("DOMContentLoaded", () => {
  let InputItem = document.getElementById("Add-item");
  let InputAmount = document.getElementById("Add-amount");
  let ExpenseBtn = document.getElementById("Add-expense");
  let ExpenseList = document.getElementById("Expense-List");
  let Total = document.getElementById("Total");
  let TotalAmount = document.getElementById("total-amount");
  let ExpenseForm = document.getElementById("inputbox");

  let expenses = JSON.parse(localStorage.getItem("expense")) || [];

  ExpenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = InputItem.value.trim();
    let amount = parseFloat(InputAmount.value.trim());

    if (input !== "" && amount > 0 && !isNaN(amount)) {
      const newexpense = {
        id: Date.now(),
        input,
        amount,
      };
      expenses.push(newexpense);
      savetolocal();
      render();
      TotalAmount.innerHTML = parseInt(totalvalue());

      InputItem.value = "";
      InputAmount.value = "";
    }
  });
  function totalvalue() {
    return expenses.reduce((acc, item) => acc + item.amount, 0);
  }
  function savetolocal() {
    localStorage.setItem("expense", JSON.stringify(expenses));
  }
  function render() {
    ExpenseList.innerHTML = "";
    expenses.forEach((item) => {
      let li = document.createElement("li");
      li.classList.add("listyle");
      li.innerHTML = `<span>${item.input} --- ${item.amount} </span>
             <button data-id="${item.id}">Delete</button>`;
      ExpenseList.appendChild(li);
      TotalAmount.innerHTML = parseInt(totalvalue());
    });
  }
  ExpenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let expenseid = parseInt(e.target.getAttribute("data-id"));

      expenses = expenses.filter((e) => e.id !== expenseid);
      savetolocal();
      render();
      TotalAmount.innerHTML = parseInt(totalvalue());
    }
  });
});
