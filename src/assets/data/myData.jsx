import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'


const myData = [
    {
        id:1,
        title:'Phone',
        info:'(61)986087431',
        icon:<AiFillPhone id='phone-icon' />
    },
    {
        id:2,
        title:'E-mail',
        info:'gabrielsilvabarros2009@gmail.com',
        icon: <AiOutlineMail id='email-icon' />
    },
    {
        id:3,
        title:'Location',
        info:'Brasilia-DF',
        icon:<AiFillEnvironment id='pin-icon' />
    }

]

export default myData;