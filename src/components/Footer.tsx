import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-20 mt-40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Terminal-style contact info */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm ml-2">contact.sh</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400">$</span>
                  <Mail className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <span className="text-gray-400">email:</span>
                    <a href="mailto:diego-rbv.dev@proton.me" className="text-green-400 hover:text-green-300 transition-colors ml-2">
                      diego-rbv.dev@proton.me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400">$</span>
                  <Phone className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Telefone:</span>
                    <a href="tel:+5511999999999" className="text-green-400 hover:text-green-300 transition-colors ml-2">
                      +55 82 98849-4456
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400">$</span>
                  <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <span className="text-gray-400">Localização:</span>
                    <span className="text-green-400 ml-2">Alagoas, Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm ml-2">social.sh</span>
              </div>
              
              <div className="space-y-4">
                <p className="font-mono text-sm text-gray-400 mb-4">
                  <span className="text-green-400">$</span> ls -la socials/
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/diegovitall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-700 hover:border-green-500 transition-all group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-green-400 transition-colors">GitHub</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/diego-vital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-700 hover:border-green-500 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-green-400 transition-colors">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-700 hover:border-green-500 transition-all group"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-green-400 transition-colors">Twitter</span>
                  </a>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg border border-gray-700 hover:border-green-500 transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-green-400 transition-colors">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-gray-400">
              <span className="text-green-400">$</span> echo &quot;© 2025 Diego Vital. All rights reserved.&quot;
            </p>
            <p className="font-mono text-sm text-gray-500">
              <span className="text-green-400">~/</span>portfolio<span className="text-gray-600">/</span>v1.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
