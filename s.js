function causeForConcern()
{
  console.log(document.cookie);
  console.log("Still running.");
  setTimeout(causeForConcern, 5000);
}
causeForConcern();
