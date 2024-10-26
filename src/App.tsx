import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FileDown } from 'lucide-react';
import Editor from './components/Editor';
import { htmldata } from './pdfdata';

function App() {
  const [content, setContent] = useState(htmldata);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const element = document.createElement('div');
    element.innerHTML = content;
    element.style.padding = '10px';
    element.style.height = '1050px';
    element.style.width = '200mm';
   

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'; // Update to the desired Tailwind version
  document.head.appendChild(link);

  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  document.head.appendChild(link2);


    const opt = {
      margin: 5,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm',format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      document.head.removeChild(link);
      document.head.removeChild(link2);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">HTML to PDF Converter</h1>
          <p className="text-gray-600">Create beautiful documents and download them as PDF</p>
        </div>

        <div className="space-y-4">
          <Editor content={content} onChange={setContent} />
          
          <div className="flex justify-end">
            <button
              onClick={handleDownload}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown className="w-5 h-5" />
              {loading ? 'Generating PDF...' : 'Download as PDF'}
            </button>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-8">
          <p>Use the editor above to create your content. Click the download button to save as PDF.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;