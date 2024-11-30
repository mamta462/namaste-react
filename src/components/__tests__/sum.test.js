import { sum } from "../sum"

test("it should calculate sum of two number",()=>{
    const result =sum(2,3);
    //Assertion
    expect(result).toBe(5);
})