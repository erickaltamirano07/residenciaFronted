import { useState} from "react";
import axios from "axios";

const useNotificacion = () => {

    
    const uri = 'http://localhost:8762/ms-notificacion/';


    const enviar = async (payload, adjunto) => {
        if (adjunto == true) {
            console.log(payload)
            
            await axios.post(uri + "notificacionWithAttachment", {
                 targetMethod: "POST",
                body: {
                    recipient: payload.recipient.toString(),
                    msgBody: payload.msgBody.toString(),
                    subject: payload.subject.toString(),
                    attachment: payload.attachment.toString()
                }

                
                
            })
                .then(res => { 
                    alert(res.data)
                })
            
        } else {
            await axios.post(uri + "notificacion", {
                targetMethod: "POST",
                body: {
                    recipient: payload.recipient,
                    msgBody: payload.msgBody,
                    subject: payload.subject                
                }
                               
                
            }).then(res => { 
                    alert(res.data)
                })
            
        }
    }

    return {
        enviar
    }

    
}

export {useNotificacion}