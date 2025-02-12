document.addEventListener("DOMContentLoaded", () => {
  const InputExpense = document.getElementById("Add-item");
  const InputAmount = document.getElementById("Add-amount");
  const ExpenseBtn = document.getElementById("Add-expense");
  const ExpenseList = document.getElementById("Expense-List");
  const ExpenseTotal = document.getElementById("Expense-Total");
  const TotalAmount = document.getElementById("total-amount");

  let totalprice = 0;
  ExpenseBtn.addEventListener("click", () => {
    let input = InputExpense.value.trim();
    let amount = parseFloat(InputAmount.value.trim());

    if (input === "" || amount === "" || isNaN(amount)) {
      return;
    }

    let li = document.createElement("li");
    li.classList.add("listyle");
    li.innerHTML = `<span>${input}          :${amount}</span>
    <button class='delete-btn'>Delete</button>`;
    InputExpense.value = "";
    InputAmount.value = "";
    ExpenseList.appendChild(li);

    totalprice += Number(amount);

    TotalAmount.innerHTML = totalprice;
    console.log(li);

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
      let spanElement = li.querySelector("span");
      let spantext = spanElement.textContent;
      let spanamount = spantext.split(":")[1].trim();

      totalprice -= Number(spanamount);

      TotalAmount.innerHTML = totalprice;
    });
  });
});
