import React, { useState } from 'react';

const CreateKnowledgeBaseModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    llmEmbeddingModel: 'text-embedding-ada-002'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      name: '',
      description: '',
      vectorStore: 'Qdrant',
      llmEmbeddingModel: 'text-embedding-ada-002'
    });
  };

  return (
    <>
      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full max-w-lg h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Create New Knowledge Base</h2>
            <p className="text-sm text-gray-500 mt-1">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span> <span className="text-gray-400 font-normal">(Cannot be edited later)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                required
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] resize-none"
              />
            </div>

            {/* Vector Store Field */}
            <div>
              <label htmlFor="vectorStore" className="block text-sm font-medium text-gray-700 mb-2">
                Vector Store <span className="text-red-500">*</span>
              </label>
              <select
                id="vectorStore"
                name="vectorStore"
                value={formData.vectorStore}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] bg-white"
                required
              >
                <option value="Qdrant">Qdrant</option>
              </select>
            </div>

            {/* LLM Embedding Model Field */}
            <div>
              <label htmlFor="llmEmbeddingModel" className="block text-sm font-medium text-gray-700 mb-2">
                LLM Embedding Model <span className="text-red-500">*</span>
              </label>
              <select
                id="llmEmbeddingModel"
                name="llmEmbeddingModel"
                value={formData.llmEmbeddingModel}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] bg-white"
                required
              >
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
              </select>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-[#4F46E5] hover:bg-[#1E1B4B] text-white px-4 py-2 rounded-md text-xs font-medium transition-colors"
            >
              Create
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default CreateKnowledgeBaseModal;
