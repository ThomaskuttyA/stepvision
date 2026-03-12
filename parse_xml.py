
import xml.etree.ElementTree as ET
import sys
import io

# Ensure stdout is utf-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def extract_text(xml_path):
    try:
        tree = ET.parse(xml_path)
        root = tree.getroot()
        
        # Define namespaces
        namespaces = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
        }
        
        paragraphs = []
        for p in root.findall('.//w:p', namespaces):
            texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
            if texts:
                paragraphs.append("".join(texts))
        
        return "\n".join(paragraphs)
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    path = r'additionalinfo/extracted_webimage/word/document.xml'
    text = extract_text(path)
    # Filter non-printable characters except newline
    clean_text = "".join(c for c in text if c.isprintable() or c == '\n')
    print(clean_text)
