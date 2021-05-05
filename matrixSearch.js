

function matrixSearch(matrix, image) {
    const first = image[0][0];
    const imageHeight = image.length;
    const imageWidth = image[0].length;
    const relevantHeight = matrix.length - imageHeight + 1;
    const relevantWidth = matrix[0].length - imageWidth + 1;

    for (let i = 0; i < relevantHeight; i++) {
        for (let j = 0; j < relevantWidth; j++) {
            if (matrix[i][j] !== first) continue;

            // move in unison until broken
            for (var k = 0, matching = true; k < imageHeight && matching; k++) {
                for (let l = 0; l < imageWidth && matching; l++) {
                    if (image[k][l] !== matrix[i + k][j + l]) {
                        matching = false;
                    }
                }
            }

            if (matching) return [i, j];
        }
    }

    return [-1, -1];
}