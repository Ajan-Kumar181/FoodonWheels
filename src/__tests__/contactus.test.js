import { render,screen} from '@testing-library/react'
import Contact from '../Components/Contact'
import "@testing-library/jest-dom"

describe('testing Contactus page' ,()=>{
    test("test contact page" ,()=>{
        render(<Contact/>)
    
        const val = screen.getAllByRole("heading");
        expect(val.length).toBe(3);
    });
    it('should render properly on screen' ,()=>{
        render(<Contact/>)
    
        const par = screen.getByRole('paragraph');
        expect(par).toBeInTheDocument();
    });
});