<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Dosya türü kontrolü
    $allowedTypes = array("jpg", "png", "pdf", "docx");
    if (!in_array($fileType, $allowedTypes)) {
        echo "Üzgünüz, yalnızca JPG, PNG, PDF ve DOCX dosyalarına izin verilmektedir.";
        $uploadOk = 0;
    }

    // Dosya boyutu kontrolü (5MB limit)
    if ($_FILES["file"]["size"] > 5000000) {
        echo "Üzgünüz, dosyanız çok büyük.";
        $uploadOk = 0;
    }

    // Yükleme işlemi
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo "Dosya ". htmlspecialchars(basename($_FILES["file"]["name"])). " yüklendi.";
        } else {
            echo "Üzgünüz, dosya yüklenirken bir hata oluştu.";
        }
    }
} else {
    echo "Dosya yüklenmedi veya geçersiz istek.";
}
?>
