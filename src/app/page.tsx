'use client';

import { motion } from 'framer-motion';
import { Github, GitBranch, GitCommit, GitPullRequest, Play, Upload, Clock, BarChart2, FileCode2, Folder, FolderGit2 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Terminal-like grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.9)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <span className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/20 rounded-full py-2 px-4 text-indigo-300 text-sm">
                <FileCode2 className="w-4 h-4" />
                VS Code Extension
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              WorkSpaceTracker
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-xl text-slate-300 max-w-3xl mx-auto mb-12"
            >
              Track your workspace activity, manage logs, and seamlessly sync with GitHub. The perfect companion for developers who value productivity and organization.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
            >
              <motion.a
                variants={item}
           
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://marketplace.visualstudio.com/items?itemName=AdityaPande.codetracker"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/25"
              >
                <Play className="w-5 h-5" />
                Install Extension
              </motion.a>
{/* 
              <motion.a
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/adityaspande1/CodeTracker"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800/70 transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                <Github className="w-5 h-5" />
                View Source
              </motion.a> */}
            </motion.div>

            {/* Feature Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-slate-400">workspace-logs.md</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-5 h-5 text-indigo-400 mt-1" />
                  <div>
                    <span className="text-slate-400">Log Date: </span>
                    <span className="text-indigo-300">2025-01-10</span>
                  </div>
                </div>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-green-400" />
                    <span>Modified file: src/main.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-blue-400" />
                    <span>Created file: src/main.java</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-red-400" />
                    <span>Deleted file: src/main.ts</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Powerful Features
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to track, manage, and sync your workspace activity.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Folder className="w-8 h-8" />,
                title: 'Track Workspace Changes',
                description: 'Monitor file modifications, creations, and deletions in real-time with automatic logging.',
                gradient: 'from-blue-600 to-indigo-600'
              },
              {
                icon: <FolderGit2 className="w-8 h-8" />,
                title: 'GitHub Integration',
                description: 'Seamlessly push your logs to GitHub with automatic repository creation and management.',
                gradient: 'from-indigo-600 to-purple-600'
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: 'Smart Log Management',
                description: 'Intelligent log organization with daily files and automatic entry appending.',
                gradient: 'from-purple-600 to-pink-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400"
          >
            Crafted with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://github.com/adityaspande1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Aditya Pande
            </a>
          </motion.p>
        </div>
      </footer>
    </main>
  );
}