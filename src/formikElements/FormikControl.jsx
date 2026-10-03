import Checkbox from "./Checkbox";
import InputElement from "./InputElement";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";


const FormikControl = (props) => {
    switch(props.control){
        case 'input':
            return <InputElement {...props}/>
        case 'textarea':
            return <TextArea {...props}/>
        case 'select':
            return <Select {...props}/>
        case 'radio':
            return <Radio {...props}/>
        case 'checkbox':
            return <Checkbox {...props}/>
        default:
            break;
    }
}

export default FormikControl;