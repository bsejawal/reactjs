import axios, { AxiosResponse } from "axios";
import React from "react";
import { useEffect, useState } from "react" 
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export function PdfRenderer() {


    const [numPages, setNumPages] = useState(0);
    const [file, setFile] = useState<string>()

    const PDFURL = "http://localhost:8080/api/pdfBytestreamWithContentType"
    useEffect(() => {
        axios
            .get(PDFURL, {
                responseType: "arraybuffer",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/pdf'
                }
            })
            .then((res: AxiosResponse) => {
                console.log(res.status);
                const blob = new Blob([res.data], { type: res.headers["content-type"] })
                const objectURL = URL.createObjectURL(blob)
                setFile(objectURL);
                console.log("####### " + objectURL)
            })

    }, []);
    type onDocumentLoadSuccessProps = {
        numPages: number
    }
    function onDocumentLoadSuccess({ numPages } : onDocumentLoadSuccessProps) {
        setNumPages(numPages);
      }
    
    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
        standardFontDataUrl: 'standard_fonts/',
    };
    return (
        <div className="pdf-container">
            <h1>PDF renderer</h1>
           <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
            </Document>

        </div>

    )
}