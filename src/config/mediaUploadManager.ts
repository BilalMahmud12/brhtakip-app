export const dictionary = {
    tr: {
        getFilesUploadedText(count: number) {
            return `${count} ${count === 1 ? 'dosya yüklendi' : 'dosya yüklendi'}`;
        },
        getFileSizeErrorText(sizeText: string) {
            return `Dosya boyutu ${sizeText} daha küçük olmalıdır`;
        },
        getRemainingFilesText(count: number) {
            return `${count} ${count === 1 ? 'dosya' : 'dosya'} yükleniyor`;
        },
        getUploadingText(percentage: number) {
            return `Yükleniyor${percentage > 0 ? `: ${percentage}%` : ''}`;
        },
        getUploadButtonText(count: number) {
            return `${count} ${count === 1 ? 'dosya' : 'dosya'} yükle`;
        },
        getMaxFilesErrorText(count: number) {
            return `${count} ${count === 1 ? 'dosya' : 'dosya'
                } seçilemez. Güncellemeden önce dosyaları silin.`;
        },
        getErrorText(message: string) {
            return message;
        },
        doneButtonText: 'Tamam',
        clearAllButtonText: 'Hepsini Temizle',
        extensionNotAllowedText: 'Uzantıya izin verilmiyor',
        browseFilesText: 'Dosyalara Göz At',
        dropFilesText: 'Dosyaları buraya sürükleyin veya',
        pauseButtonText: 'Duraklat',
        resumeButtonText: 'Devam Et',
        uploadSuccessfulText: 'Yükleme Başarılı',
        getPausedText(percentage: number) {
            return `Duraklatıldı: ${percentage}%`;
        },
    },
};