import React, { Component } from "react";
import pdf from "../images/pdf/Gregg-Van-Orden-Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = { scale: 1.775 };

    this.setScale = this.setScale.bind(this);
  }

  setScale() {
    if (window.innerWidth <= 500) {
      this.setState({ scale: 0.4 });
    }
    else if (window.innerWidth <= 700) {
      this.setState({ scale: 0.5 });
    }
    else if (window.innerWidth <= 900) {
      this.setState({ scale: 0.75 });
    }
    else if (window.innerWidth <= 1224) {
      this.setState({ scale: 1 });
    }
    else if (window.innerWidth <= 1500) {
      this.setState({ scale: 1.25 });
    }
    else if (window.innerWidth <= 2000) {
      this.setState({ scale: 1.8 });
    }
    else {
      this.setState({ scale: 2 });
    }
  }

  componentDidMount() {
    this.setScale();

    window.addEventListener("resize", this.setScale);
  }

  render() {
    return (
      <div className="resume-container">
        <div className="resume">
          {/* <div className="download-resume-button-container">
            <a
              href="/images/pdf/Gregg-Van-Orden-Resume.pdf"
              download
              className="download-resume-button"
            >
              Download Resume (PDF)
            </a>
          </div> */}
          <Document
            className="resume-document"
            file={pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page
              className="resume-page"
              pageNumber={1}
              scale={this.state.scale}
            />
            <Page
              className="resume-page"
              pageNumber={2}
              scale={this.state.scale}
            />
          </Document>
        </div>
      </div >
    );
  }
}

export default Resume;
