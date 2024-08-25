import { Face, FaceLandmarksDetector, MediaPipeFaceMeshMediaPipeModelConfig, SupportedModels, createDetector } from "@tensorflow-models/face-landmarks-detection";
import '@tensorflow/tfjs-backend-webgl';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TriangulationMetrics } from "../metrics/triangulation";

export function FaceMash() {
    const faceMash = useRef<FaceLandmarksDetector>()

    /**
     * Initializes the face landmarks detector using the MediaPipe FaceMesh model.
     * This function is called once to set up the detector.
     */
    const start = useCallback(async () => {
        try {
            const model = SupportedModels.MediaPipeFaceMesh
            const detectorConfig: MediaPipeFaceMeshMediaPipeModelConfig = {
                runtime: 'tfjs' as any,
                refineLandmarks: true
            }

            const detector = await createDetector(model, detectorConfig)
            faceMash.current = detector
            console.log('faceMash loaded with success')
        } catch (error) {
            console.error('Failed to load faceMash model:', error)
        }
    }, [])

    /**
     * Estimates the face landmarks from a video frame and draws them on a canvas.
     * @param video - The HTMLVideoElement containing the video frame.
     * @param ctx - The CanvasRenderingContext2D to draw the landmarks on.
     */
    const estimateFace = async (video: HTMLVideoElement, ctx: CanvasRenderingContext2D): Promise<void> => {
        if (faceMash.current) {
            const faces = await faceMash.current.estimateFaces(video)
            drawMesh(faces, ctx)
        } else {
            await start()
            estimateFace(video, ctx)
        }
    }


    /**
     * Draws the face landmarks on the canvas.
     * @param predicationsVetor - An array of Face objects containing the landmarks.
     * @param ctx - The CanvasRenderingContext2D to draw the landmarks on.
     */
    const drawMesh = (predicationsVetor: Face[], ctx: CanvasRenderingContext2D): void => {
        if (predicationsVetor.length === 0) return

        const triangulation = TriangulationMetrics.length / 3

        predicationsVetor.forEach((predication) => {
            const keyPoints = predication.keypoints 

            for (let i = 0; i < triangulation; i++) {
                const points = [
                    TriangulationMetrics[i * 3],
                    TriangulationMetrics[i * 3 + 1],
                    TriangulationMetrics[i * 3 + 2],
                ].map((index) => [keyPoints[index].x, keyPoints[index].y])
                drawPath(ctx, points, true);
            }


            for (const point of keyPoints) {
                const x = point.x
                const y = point.y

                ctx.beginPath()
                ctx.arc(x, y, 1, 0, 3 * Math.PI)
                ctx.fillStyle = "aqua"
                ctx.fill()
            }
        })
    }


    /**
     * Draws a path connecting a series of points on the canvas.
     * @param ctx - The CanvasRenderingContext2D to draw the path on.
     * @param points - An array of points (each point is an array of two numbers [x, y]) to be connected.
     * @param closePath - A boolean indicating whether to close the path (connect the last point to the first).
    */
    const drawPath = (ctx: CanvasRenderingContext2D, points: number[][], closePath: boolean) => {
        const region = new Path2D()
        void region.moveTo(points[0][0], points[0][1])

        for (const point of points) {
            region.lineTo(point[0], point[1])
        }

        if (closePath) region.closePath()

        ctx.strokeStyle = 'gray'
        ctx.stroke(region)
    }

    return {
        estimateFace,
        start
    }
}
