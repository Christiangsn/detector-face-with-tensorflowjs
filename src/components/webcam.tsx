import { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { FaceMash } from '../infra/tensorflow/facemash';
import { start } from 'repl';



export function WebCam() {
    const webCamRef = useRef<Webcam | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const { estimateFace, start  } = FaceMash()


    const detector = async () => {
        if (typeof webCamRef.current !== 'undefined' &&
            webCamRef.current !== null &&
            webCamRef.current.video?.readyState === 4
        ) {
            const videoDimensions = {
                current: webCamRef.current.video,
                width: webCamRef.current.video.videoWidth,
                height: webCamRef.current.video.videoHeight
            }

            webCamRef.current.video.width = videoDimensions.width
            webCamRef.current.video.height = videoDimensions.height

            canvasRef.current!.width = videoDimensions.width
            canvasRef.current!.height = videoDimensions.height


            const ctx = canvasRef.current!.getContext('2d')!
            void await estimateFace(videoDimensions.current, ctx)
        }
    }

    useEffect(() => {
        start()
            .then(() => {
                setInterval(() => {
                    detector()
                }, 10)
            })
    }, [])
    return (
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <Webcam
                ref={webCamRef}
                style={{
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zIndex: 9,
                    width: 640,
                    height: 480,
                }}
            />
            <canvas 
                ref={canvasRef}
                style={{
                    position: "absolute" ,
                    marginLeft: "auto",
                    marginRight: "auto",
                    left:0,
                    right:0,
                    textAlign: "center",
                    zIndex: 9,
                    width: 640,
                    height: 480
                }}  
            />
        </div>
    );
}