import React, { useState } from 'react'
import s from './googledocs.module.css'

const GoogleDocs = ({cb, close}) => {
    const [link, setLink] = useState('')

    const getId = () => {
        let newLink = link.split("/")
        cb(newLink[newLink.length - 2])
    }

    return (
        <div className={s.container_main}>
            <div className={s.form}>
                <div className={s.container_form}>
                    <h3>
                        Ingresa el url de tu archivo de Google Docs y nosotros nos
                        encargamos de invitar a los nuevos Henrys
                    </h3>
                    <div className={s.container_input}>
                        <input
                            value={link}
                            type="text"
                            onChange={e => setLink(e.target.value)}
                        />
                        <p className={s.subtitle}>
                            asegurate que el link sea del estilo "https://docs.google.com/spreadsheets/d/XXXX/edit"
                        </p>
                    </div>
                    <div className={s.container_btns}>
                        <button
                            className={s.btn}
                            onClick={() => close()}
                        >Back</button>
                        <button
                            className={s.btn}
                            onClick={() => getId()}
                        >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleDocs