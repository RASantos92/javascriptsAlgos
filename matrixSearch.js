

function matrixSearch(matrix, img) {
    const first = img[0][0];
    const imgHeight = img.length;
    const imgWidth = img[0].length;
    const relevantHeight = matrix.length - imgHeight + 1;
    const relevantWidth = matrix[0].length - imgWidth + 1;

    for (let i = 0; i < relevantHeight; i++) {
        for (let j = 0; j < relevantWidth; j++) {
            if (matrix[i][j] !== first) continue;

            // move in unison until broken
            for (var k = 0, matching = true; k < imgHeight && matching; k++) {
                for (let l = 0; l < imgWidth && matching; l++) {
                    if (img[k][l] !== matrix[i + k][j + l]) {
                        matching = false;
                    }
                }
            }

            if (matching) return [i, j];
        }
    }

    return [-1, -1];
}
