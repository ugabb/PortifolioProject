import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import data from '../assets/data/myData'

const InforCard = () => {

    console.log(data[0].title);

    return (
        <div>
            <section id='information'>
                {
                    data.map((dados) => (
                        <div className="info-card">
                            {dados.icon}
                            <div key={dados.id}>
                                <h3>{dados.title}</h3>
                                <p>{dados.info}</p>
                            </div>
                        </div>
                    ))
                }
               
            </section>

            {/* <section id='information'>
                <div className="info-card">
                    <AiOutlineMail id='email-icon' />
                    <div>
                        <h3>E-mail</h3>
                        <p>gabrielsilvabarros2009@gmail.com</p>
                    </div>
                </div>
            </section>

            <section id='information'>
                <div className="info-card">
                    <AiFillEnvironment id='pin-icon' />
                    <div>
                        <h3>Location</h3>
                        <p>Brasília-DF</p>
                    </div>
                </div>
            </section> */}
        </div>



    )
}

export default InforCard