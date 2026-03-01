import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Video, Loader2, Play, Download, AlertCircle } from 'lucide-react';

const VideoGenerator: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState("");
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [prompt, setPrompt] = useState("Cinematic movement, high quality, realistic animation");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setGeneratedVideoUrl(null);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data url prefix (e.g., "data:image/png;base64,")
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleGenerate = async () => {
    if (!file) return;

    setIsGenerating(true);
    setStatus("Verificando acesso...");
    setGeneratedVideoUrl(null);

    try {
      // 1. Check API Key
      const aiStudio = (window as any).aistudio;
      if (aiStudio && !await aiStudio.hasSelectedApiKey()) {
        await aiStudio.openSelectKey();
        // Wait a moment for state to settle or verify again
      }

      // 2. Initialize AI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = await fileToBase64(file);

      setStatus("Iniciando geração com Veo (isso leva alguns minutos)...");

      // 3. Start Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
          imageBytes: base64Data,
          mimeType: file.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      // 4. Poll for completion
      setStatus("Renderizando vídeo com IA...");
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      // 5. Fetch Result
      setStatus("Finalizando...");
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      
      if (downloadLink) {
        // Must append API key to fetch the actual bytes
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        if (!response.ok) throw new Error("Falha ao baixar o vídeo gerado");
        
        const videoBlob = await response.blob();
        const videoObjectUrl = URL.createObjectURL(videoBlob);
        setGeneratedVideoUrl(videoObjectUrl);
        setStatus("Concluído!");
      } else {
        throw new Error("Nenhum vídeo retornado pela API.");
      }

    } catch (error: any) {
      console.error("Erro na geração:", error);
      setStatus(`Erro: ${error.message || "Falha desconhecida"}`);
      // If unauthorized/not found, prompt for key again
      if (error.message?.includes("Requested entity was not found") || error.message?.includes("403") || error.message?.includes("401")) {
         try { await (window as any).aistudio.openSelectKey(); } catch(e) {}
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-20 bg-black border-t border-gray-900" id="demo-veo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-purple-600/20 text-purple-400 border border-purple-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            Beta - Tecnologia Veo
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Teste a <span className="text-purple-500">Inteligência Artificial</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experimente o poder da IA. Envie uma imagem (ex: um personagem dos Simpsons) e veja o Veo animá-la.
            <br/><span className="text-xs text-gray-500 mt-2 block">(Requer sua API Key do Google AI Studio)</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Input Section */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Upload size={20} className="text-purple-500" />
                1. Upload da Imagem
              </h3>

              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer transition-all ${
                  file ? 'border-purple-500/50 bg-purple-500/5' : 'border-gray-700 hover:border-gray-500 hover:bg-gray-800'
                }`}
              >
                {previewUrl ? (
                  <div className="relative w-full h-64 md:h-full min-h-[200px]">
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                      <p className="text-white font-bold text-sm">Trocar Imagem</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                       <Upload className="text-gray-400" />
                    </div>
                    <p className="text-gray-300 font-medium">Clique para selecionar</p>
                    <p className="text-gray-500 text-sm mt-2">JPG ou PNG</p>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange} 
                  accept="image/png, image/jpeg" 
                  className="hidden" 
                />
              </div>

              {/* Controls */}
              <div className="mt-6 space-y-4">
                 <div>
                    <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Formato</label>
                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={() => setAspectRatio('9:16')}
                            className={`py-2 px-3 rounded-lg text-sm font-bold border transition-all ${aspectRatio === '9:16' ? 'bg-purple-600 text-white border-purple-600' : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600'}`}
                        >
                            TikTok (9:16)
                        </button>
                        <button 
                            onClick={() => setAspectRatio('16:9')}
                            className={`py-2 px-3 rounded-lg text-sm font-bold border transition-all ${aspectRatio === '16:9' ? 'bg-purple-600 text-white border-purple-600' : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600'}`}
                        >
                            Youtube (16:9)
                        </button>
                    </div>
                 </div>
                 
                 <div>
                     <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Prompt (Opcional)</label>
                     <input 
                        type="text" 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-600"
                        placeholder="Ex: Cinematic movement..."
                     />
                 </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-8 bg-black/20 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Video size={20} className="text-purple-500" />
                2. Resultado
              </h3>

              <div className="flex-1 bg-gray-950 rounded-xl border border-gray-800 flex flex-col items-center justify-center p-2 min-h-[300px] relative overflow-hidden">
                {generatedVideoUrl ? (
                   <video 
                      src={generatedVideoUrl} 
                      controls 
                      autoPlay 
                      loop 
                      className="w-full h-full object-contain rounded-lg max-h-[400px]"
                   />
                ) : (
                    <div className="text-center p-6">
                        {isGenerating ? (
                            <div className="flex flex-col items-center animate-pulse">
                                <Loader2 size={48} className="text-purple-500 animate-spin mb-4" />
                                <p className="text-white font-bold mb-1">Gerando Vídeo...</p>
                                <p className="text-gray-500 text-sm max-w-xs">{status}</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center opacity-40">
                                <Play size={48} className="text-gray-500 mb-4" />
                                <p className="text-gray-400">O vídeo gerado aparecerá aqui</p>
                            </div>
                        )}
                    </div>
                )}
              </div>

              <button
                onClick={handleGenerate}
                disabled={!file || isGenerating}
                className={`w-full mt-6 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                    !file || isGenerating 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transform hover:-translate-y-1'
                }`}
              >
                {isGenerating ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Processando...
                    </>
                ) : (
                    <>
                        <Video size={20} />
                        Gerar Vídeo com Veo
                    </>
                )}
              </button>
              
              {!(window as any).aistudio?.hasSelectedApiKey && (
                  <div className="mt-3 flex items-start gap-2 text-xs text-yellow-500 bg-yellow-900/10 p-2 rounded border border-yellow-900/30">
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                      <p>Você precisará selecionar uma chave de API paga do Google Cloud para usar este recurso.</p>
                  </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGenerator;