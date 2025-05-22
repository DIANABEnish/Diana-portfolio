import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* אייקוני רשתות חברתיות */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/DIANABEnish" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/dianabenish" target="_blank" rel="noopener" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        
          <a href="mailto:your@email.com" className="text-gray-400 hover:text-primary-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* טקסט עם לב */}
        <p className="text-gray-400 text-sm text-center flex items-center justify-center">
          <span>Made with</span>
          <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
          <span>by</span>
          <span className="ml-1 text-gray-300">Diana Benish</span>
          <span className="mx-2">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}
