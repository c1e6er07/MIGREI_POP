import React from 'react';
import { FileText } from 'lucide-react';

const TermosUso: React.FC = () => (
  <div className="min-h-screen bg-slate-950 font-sans text-slate-300 py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
       <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-orange-500/10 rounded-full mb-4">
             <FileText className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-3xl font-bold text-white">Termos de Uso</h1>
          <p className="text-slate-400 mt-2">Última atualização: Março de 2024</p>
       </div>

       <div className="space-y-8 bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800">
          <section>
             <h2 className="text-xl font-bold text-white mb-3">1. Aceitação dos Termos</h2>
             <p className="leading-relaxed">
                Ao acessar e utilizar a plataforma MIGREI MLE CONSULT (&quot;Plataforma&quot;), você concorda em cumprir estes Termos de Uso e todas as leis aplicáveis. Se você não concordar, não utilize nossos serviços.
             </p>
          </section>

          <section>
             <h2 className="text-xl font-bold text-white mb-3">2. Descrição do Serviço</h2>
             <p className="leading-relaxed">
                A MIGREI fornece uma plataforma SaaS para gestão de energia, telemetria e processamento de pagamentos via PIX e Cartão. A Plataforma atua como facilitadora e consultora, não sendo uma distribuidora de energia.
             </p>
          </section>

          <section>
             <h2 className="text-xl font-bold text-white mb-3">3. Responsabilidades do Usuário</h2>
             <p className="leading-relaxed">
                Você é responsável por manter a confidencialidade de suas credenciais de acesso e pela veracidade das informações fornecidas, incluindo faturas e dados bancários para o Open Finance.
             </p>
          </section>

          <section>
             <h2 className="text-xl font-bold text-white mb-3">4. Propriedade Intelectual</h2>
             <p className="leading-relaxed">
                Todo o conteúdo, software, marcas e tecnologias (incluindo &quot;Smart Split&quot; e &quot;Migrei IA&quot;) são propriedade exclusiva da MIGREI MLE CONSULT ou de seus licenciadores.
             </p>
          </section>

          <section>
             <h2 className="text-xl font-bold text-white mb-3">5. Limitação de Responsabilidade</h2>
             <p className="leading-relaxed">
                A MIGREI não se responsabiliza por falhas de fornecimento de energia por parte das distribuidoras, nem por oscilações no PLD (Preço de Liquidação das Diferenças) que fujam ao nosso controle consultivo.
             </p>
          </section>

          <section>
             <h2 className="text-xl font-bold text-white mb-3">6. Alterações</h2>
             <p className="leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso contínuo da plataforma constitui aceitação dos novos termos.
             </p>
          </section>
       </div>
    </div>
  </div>
);
export default TermosUso;