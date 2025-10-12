document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const errorMessage = document.getElementById('errorMessage');
    const loading = document.getElementById('loading');
    const analysisResults = document.getElementById('analysisResults');
    const overallScore = document.getElementById('overallScore');
    const scoreDescription = document.getElementById('scoreDescription');
    const keywordsMatch = document.getElementById('keywordsMatch');
    const skillsAnalysis = document.getElementById('skillsAnalysis');
    const experienceLevel = document.getElementById('experienceLevel');
    const suggestionsList = document.getElementById('suggestionsList');
    
    // Event Listeners
    browseBtn.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', handleFileSelect);
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('active');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('active');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('active');
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelect();
        }
    });
    
    analyzeBtn.addEventListener('click', analyzeResume);
    
    // Functions
    function handleFileSelect() {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const validTypes = ['application/pdf', 'application/msword', 
                               'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                               'text/plain'];
            
            if (!validTypes.includes(file.type)) {
                showError('Please upload a PDF, DOC, DOCX, or TXT file.');
                return;
            }
            
            // Show file info
            fileName.textContent = file.name;
            fileSize.textContent = formatFileSize(file.size);
            fileInfo.style.display = 'block';
            
            // Enable analyze button
            analyzeBtn.disabled = false;
            
            // Hide any previous errors
            hideError();
        }
    }
    
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    
    function hideError() {
        errorMessage.style.display = 'none';
    }
    
    function analyzeResume() {
        // Reset UI
        hideError();
        progressBar.style.display = 'block';
        progress.style.width = '0%';
        
        // Simulate upload progress
        simulateProgress(() => {
            // Show loading state
            progressBar.style.display = 'none';
            loading.style.display = 'block';
            analysisResults.style.display = 'none';
            
            // Simulate analysis (in a real app, this would be an API call)
            setTimeout(() => {
                // Hide loading, show results
                loading.style.display = 'none';
                analysisResults.style.display = 'block';
                
                // Generate mock analysis results
                generateMockResults();
            }, 2000);
        });
    }
    
    function simulateProgress(callback) {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                callback();
            } else {
                width += 5;
                progress.style.width = width + '%';
            }
        }, 50);
    }
    
    function generateMockResults() {
        // Generate random but realistic results
        const score = Math.floor(Math.random() * 30) + 70; // Score between 70-100
        overallScore.textContent = score;
        
        // Score description
        if (score >= 90) {
            scoreDescription.textContent = 'Excellent resume! Minor improvements suggested.';
        } else if (score >= 80) {
            scoreDescription.textContent = 'Good resume with some areas for improvement.';
        } else if (score >= 70) {
            scoreDescription.textContent = 'Average resume. Several improvements needed.';
        } else {
            scoreDescription.textContent = 'Needs significant improvements.';
        }
        
        // Keywords match
        const keywordMatchPercent = Math.floor(Math.random() * 20) + 75; // 75-95%
        const missingKeywords = ['project management', 'JavaScript', 'problem-solving'];
        keywordsMatch.innerHTML = `<span class="highlight">${keywordMatchPercent}% match</span> with common job keywords. Consider adding: ${missingKeywords.join(', ')}.`;
        
        // Skills analysis
        const skills = ['JavaScript', 'HTML/CSS', 'React', 'Node.js', 'Git'];
        const skillLevels = ['Advanced', 'Intermediate', 'Beginner'];
        const analyzedSkills = skills.map(skill => {
            const level = skillLevels[Math.floor(Math.random() * skillLevels.length)];
            return `${skill} (${level})`;
        });
        skillsAnalysis.innerHTML = `Detected skills: <span class="highlight">${analyzedSkills.join(', ')}</span>.`;
        
        // Experience level
        const years = Math.floor(Math.random() * 10) + 1;
        experienceLevel.textContent = `Estimated ${years} years of professional experience based on content.`;
        
        // Suggestions
        const suggestions = [
            'Add more quantifiable achievements (e.g., "Increased sales by 20%")',
            'Include relevant certifications or courses',
            'Tailor your resume to specific job descriptions',
            'Use more action verbs to describe your experience',
            'Ensure consistent formatting throughout the document',
            'Add a professional summary at the top'
        ];
        
        // Clear previous suggestions
        suggestionsList.innerHTML = '';
        
        // Add new suggestions
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionsList.appendChild(li);
        });
    }
});