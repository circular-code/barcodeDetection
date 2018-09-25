// jshint -W119
window.onload = () => {
    document.getElementById('images').addEventListener('click', function(e) {

        if (e.target.nodeName === 'IMG') {

            var barcodeDetector = new BarcodeDetector();
            barcodeDetector.detect(e.target)
                .then(barcodes => {
                barcodes.forEach(barcode => document.getElementById('result').textContent += (barcode.rawValue));
                })
                .catch((e) => {
                console.error("BarcodeDetection failed: " + e);
                });
        }
    });
};

