import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import { Download, Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Load the mouse image on component mount
  useState(() => {
    setOriginalImage("/uploads/mouse-image.png");
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    try {
      // Create a blob from the image source
      let blob: Blob;
      if (originalImage.startsWith('data:')) {
        // Convert data URL to blob
        const response = await fetch(originalImage);
        blob = await response.blob();
      } else {
        // Fetch image from URL
        const response = await fetch(originalImage);
        blob = await response.blob();
      }

      const imageElement = await loadImage(blob);
      const resultBlob = await removeBackground(imageElement);
      
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(resultUrl);
      
      toast({
        title: "Sucesso!",
        description: "Fundo removido com sucesso!",
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Erro",
        description: "Erro ao processar a imagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'image-without-background.png';
    link.click();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Removedor de Fundo
          </h1>
          <p className="text-xl text-muted-foreground">
            Remove o fundo de qualquer imagem automaticamente
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Selecionar Imagem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Escolher Imagem
              </Button>
              {originalImage && (
                <Button
                  onClick={processImage}
                  disabled={isProcessing}
                  className="flex items-center gap-2"
                >
                  {isProcessing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Remover Fundo"
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {originalImage && (
            <Card>
              <CardHeader>
                <CardTitle>Imagem Original</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={originalImage}
                  alt="Original"
                  className="w-full h-auto rounded-lg border"
                />
              </CardContent>
            </Card>
          )}

          {processedImage && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Fundo Removido</CardTitle>
                <Button
                  onClick={downloadImage}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <img
                    src={processedImage}
                    alt="Processed"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {isProcessing && (
          <Card className="mt-6">
            <CardContent className="py-8">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Processando imagem... Isso pode levar alguns segundos.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemover;