function Parent() {
  const property = "forall";

  function child1() {
    let childoneproperty = "childone";
    console.log(property);
  }

  function child2() {
    let childtwoproperty = "childtwo";
    console.log(property);
    // console.log(childoneproperty); sibling cannnot share their properties
  }
  // console.log(childoneproperty);  sibling cannnot share their properties with parent also but parents can
  child1();
  child2();
}
Parent();
