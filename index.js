<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1E3A8A">
    <title>Admin Panel - Seafood Manager</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .login-container {
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 400px;
            width: 100%;
            animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .logo {
            text-align: center;
            margin-bottom: 2rem;
            color: #1E3A8A;
        }

        .logo h2 {
            font-size: 1.8rem;
            font-weight: 700;
        }

        .input-group {
            margin-bottom: 1.5rem;
        }

        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #4B5563;
            font-weight: 500;
            font-size: 0.9rem;
        }

        .input-group input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #D1D5DB;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .input-group input:focus {
            outline: none;
            border-color: #6366F1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .btn-primary {
            width: 100%;
            padding: 0.75rem;
            background-color: #4F46E5;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn-primary:hover {
            background-color: #4338CA;
        }

        .alert-message {
            margin-top: 1rem;
            padding: 0.75rem;
            border-radius: 10px;
            font-size: 0.9rem;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .alert-error {
            background-color: #FEE2E2;
            color: #EF4444;
            border: 1px solid #FCA5A5;
        }

        .alert-success {
            background-color: #D1FAE5;
            color: #059669;
            border: 1px solid #6EE7B7;
        }

        .dashboard {
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 800px;
            width: 100%;
            display: none; /* Initially hidden */
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            border-bottom: 1px solid #E5E7EB;
            padding-bottom: 1rem;
        }

        .header h3 {
            color: #1F2937;
        }

        .logout-btn {
            background-color: #DC2626;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
        }

        .logout-btn:hover {
            background-color: #B91C1C;
        }

        .card {
            background: #F9FAFB;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .card-header {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 1rem;
            border-bottom: 1px solid #E5E7EB;
            padding-bottom: 0.5rem;
        }

        .form-row {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .form-row > div {
            flex: 1;
        }

        .btn-success {
            background-color: #10B981;
            color: white;
            padding: 0.6rem 1rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.3s;
        }

        .btn-success:hover {
            background-color: #059669;
        }

        .loading {
            text-align: center;
            padding: 2rem;
            color: #4B5563;
        }

        .attendance-list {
            margin-top: 1rem;
        }

        .attendance-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .attendance-info strong {
            display: block;
            font-weight: 600;
            color: #1F2937;
        }

        .attendance-info small {
            color: #6B7280;
            font-size: 0.8rem;
        }

        .btn-danger {
            background-color: #EF4444;
            color: white;
            padding: 0.5rem 0.75rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
        }

        .btn-danger:hover {
            background-color: #DC2626;
        }
    </style>
</head>
<body>

    <div class="login-container" id="loginContainer">
        <div class="logo">
            <h2>Seafood Manager Admin</h2>
            <small>Login to Management Panel</small>
        </div>
        <div class="input-group">
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" value="admin@seafood.com" required>
        </div>
        <div class="input-group">
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" required>
        </div>
        <button class="btn-primary" onclick="adminLogin()">Login as Admin</button>
        <div id="loginAlert" class="alert-message"></div>
    </div>

    <div class="dashboard" id="dashboard">
        <div class="header">
            <h3>Welcome, <span id="adminEmail">Admin</span></h3>
            <button class="logout-btn" onclick="adminLogout()">Logout</button>
        </div>

        <div class="card">
            <div class="card-header">Target Management</div>
            <div id="targetStatus" class="loading">Loading Target...</div>
            <div class="form-row">
                <div>
                    <label for="newTargetValue">New Target Value (e.g., 50)</label>
                    <input type="number" id="newTargetValue" placeholder="Enter new target">
                </div>
                <div>
                    <label for="newTargetDate">Effective Date</label>
                    <input type="date" id="newTargetDate">
                </div>
            </div>
            <button class="btn-success" onclick="updateTarget()">Update Target</button>
        </div>

        <div class="card">
            <div class="card-header">Schedule Management</div>
            <div id="scheduleStatus" class="loading">Loading Schedule...</div>
            <div class="form-row">
                <div>
                    <label for="newCheckIn">New Check-In Time (HH:MM)</label>
                    <input type="time" id="newCheckIn">
                </div>
                <div>
                    <label for="newCheckOut">New Check-Out Time (HH:MM)</label>
                    <input type="time" id="newCheckOut">
                </div>
            </div>
            <button class="btn-success" onclick="updateSchedule()">Update Schedule</button>
        </div>
        
        <div class="card">
            <div class="card-header">Latest 50 Attendance Records</div>
            <div id="attendanceRecords" class="attendance-list">
                <div class="loading">Loading Attendance...</div>
            </div>
        </div>

    </div>

    <script>
        // =============================================================
        //              ⭐ CONFIGURATION & GLOBAL VARIABLES ⭐
        // =============================================================

        // API Configuration
        const API_URL = 'https://seafood-api-production.up.railway.app/api'; 
        let authToken = null;
        
        // --- End of Config ---

        // =============================================================
        //                        API CALLS
        // =============================================================

        // Utility function for making API calls
        async function apiCall(endpoint, method = 'GET', data = null) {
            const url = API_URL + endpoint;
            
            const headers = {
                'Content-Type': 'application/json',
            };
            
            // Add Authorization header if token exists (for secured endpoints)
            if (authToken) {
                headers['Authorization'] = `Bearer ${authToken}`;
            }

            const config = {
                method: method,
                headers: headers,
            };

            if (data && (method === 'POST' || method === 'PUT')) {
                config.body = JSON.stringify(data);
            }

            try {
                const response = await fetch(url, config);

                if (response.status === 401) {
                    throw new Error('Unauthorized or Token Expired. Please login again.');
                }
                
                const result = await response.json();
                
                if (!response.ok) {
                    // Throw server-side error message if available
                    throw new Error(result.message || `API Error: ${response.status}`);
                }

                return result;
            } catch (error) {
                console.error("API Call Error:", error);
                throw error;
            }
        }

        // =============================================================
        //                        LOGIN/LOGOUT
        // =============================================================

        // Login Handler
        async function adminLogin() {
            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');
            const alertBox = document.getElementById('loginAlert');
            
            const email = emailInput.value;
            const password = passwordInput.value;
            
            // Display alert utility
            const displayAlert = (message, type = 'error') => {
                alertBox.textContent = message;
                alertBox.className = `alert-message alert-${type}`;
                alertBox.style.opacity = 1;
                setTimeout(() => alertBox.style.opacity = 0, 5000);
            };

            // Basic frontend validation for known admin email
            if (email.toLowerCase() !== 'admin@seafood.com') {
                displayAlert('Invalid Admin Email.');
                return;
            }

            displayAlert('Logging in...', 'success');

            try {
                // 1. Attempt to login via API
                const result = await apiCall('/auth/admin_login', 'POST', { email, password });

                // 2. Successful login
                authToken = result.token;
                
                // 3. Save token to local storage
                localStorage.setItem('adminToken', authToken);
                localStorage.setItem('adminEmail', email);

                // 4. Update UI
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('dashboard').style.display = 'block';
                document.getElementById('adminEmail').textContent = email;

                // 5. Load data immediately
                loadTarget();
                loadSchedule();
                loadAttendance();

            } catch (error) {
                // If the error is 'Failed to fetch', it's a network/CORS issue
                const errorMessage = error.message.includes('Failed to fetch') 
                    ? 'Cannot connect to server. Check CORS/Server Status.'
                    : error.message;

                displayAlert('❌ Login Failed: ' + errorMessage);
                console.error("Login Error:", error);
            }
        }

        // Logout Handler
        function adminLogout() {
            if (!confirm('Are you sure you want to log out?')) return;
            
            // Clear credentials
            authToken = null;
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminEmail');
            
            // Update UI
            document.getElementById('loginContainer').style.display = 'flex';
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('loginPassword').value = '';
            document.getElementById('loginAlert').style.opacity = 0;
            
            alert('Logged out successfully.');
        }


        // =============================================================
        //                      DATA FETCH & UPDATE
        // =============================================================

        // Load Target (READ)
        async function loadTarget() {
            const container = document.getElementById('targetStatus');
            container.innerHTML = '<div class="loading">Loading Target...</div>';

            try {
                const result = await apiCall('/target');
                const target = result.target || {};
                
                let html = `
                    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                        Current Target: <strong>${target.value || 'N/A'}</strong> (Effective Date: ${target.date || 'N/A'})
                    </p>
                `;
                container.innerHTML = html;
                
                // Set input values for easy update
                document.getElementById('newTargetValue').value = target.value || '';
                document.getElementById('newTargetDate').value = target.date || '';

            } catch (error) {
                container.innerHTML = `<div class="loading alert-error" style="opacity: 1;">Error loading target: ${error.message}</div>`;
            }
        }

        // Update Target (WRITE)
        async function updateTarget() {
            const value = document.getElementById('newTargetValue').value;
            const date = document.getElementById('newTargetDate').value;
            
            if (!value || !date) {
                alert('Target value and date are required.');
                return;
            }

            try {
                const data = { value: parseInt(value), date: date };
                await apiCall('/target', 'POST', data);
                alert('✅ Target updated successfully!');
                loadTarget(); 
            } catch (error) {
                alert('❌ Error updating target: ' + error.message);
            }
        }

        // Load Schedule (READ)
        async function loadSchedule() {
            const container = document.getElementById('scheduleStatus');
            container.innerHTML = '<div class="loading">Loading Schedule...</div>';

            try {
                const result = await apiCall('/schedule');
                const schedule = result.schedule || {};

                let html = `
                    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                        Current Check-In: <strong>${schedule.checkIn || 'N/A'}</strong> 
                        | Check-Out: <strong>${schedule.checkOut || 'N/A'}</strong>
                    </p>
                `;
                container.innerHTML = html;

                // Set input values for easy update
                document.getElementById('newCheckIn').value = schedule.checkIn || '';
                document.getElementById('newCheckOut').value = schedule.checkOut || '';

            } catch (error) {
                container.innerHTML = `<div class="loading alert-error" style="opacity: 1;">Error loading schedule: ${error.message}</div>`;
            }
        }

        // Update Schedule (WRITE)
        async function updateSchedule() {
            const checkIn = document.getElementById('newCheckIn').value;
            const checkOut = document.getElementById('newCheckOut').value;
            
            if (!checkIn || !checkOut) {
                alert('Check-In and Check-Out times are required.');
                return;
            }

            try {
                const data = { checkIn: checkIn, checkOut: checkOut };
                await apiCall('/schedule', 'POST', data);
                alert('✅ Schedule updated successfully!');
                loadSchedule();
            } catch (error) {
                alert('❌ Error updating schedule: ' + error.message);
            }
        }

        // Load Attendance (READ)
        async function loadAttendance() {
            const container = document.getElementById('attendanceRecords');
            container.innerHTML = '<div class="loading">Loading Attendance...</div>';

            try {
                const result = await apiCall('/attendance?limit=50'); // Fetch latest 50 records
                const records = result.records || [];

                if (records.length === 0) {
                    container.innerHTML = '<div class="loading">No attendance records found.</div>';
                    return;
                }

                let html = '';
                records.forEach(att => {
                    const date = new Date(att.timestamp).toLocaleDateString();
                    const checkIn = att.checkIn ? new Date(att.checkIn).toLocaleTimeString() : 'N/A';
                    const checkOut = att.checkOut ? new Date(att.checkOut).toLocaleTimeString() : 'N/A';

                    html += `
                        <div class="attendance-item">
                            <div class="attendance-info">
                                <strong>User ID: ${att.userId}</strong>
                                <small>Date: ${date}</small>
                                <div style="margin-top: 4px;">
                                    <small style="color: #4F46E5;">In: ${checkIn} | Out: ${checkOut}</small>
                                </div>
                            </div>
                            <button class="btn-danger" onclick="deleteAttendance('${att.id}')">🗑️</button>
                        </div>
                    `;
                });

                container.innerHTML = html;
            } catch (error) {
                container.innerHTML = `<div class="loading alert-error" style="opacity: 1;">Error loading attendance: ${error.message}</div>`;
            }
        }

        // Delete Attendance (WRITE)
        async function deleteAttendance(id) {
            if (!confirm('Delete this attendance record?')) return;

            try {
                await apiCall(`/attendance/${id}`, 'DELETE');
                alert('✅ Record deleted!');
                loadAttendance();
            } catch (error) {
                alert('❌ Error: ' + error.message);
            }
        }

        // =============================================================
        //                     INITIALIZATION
        // =============================================================

        // Check for saved token on load
        window.addEventListener('DOMContentLoaded', () => {
            const savedToken = localStorage.getItem('adminToken');
            const savedEmail = localStorage.getItem('adminEmail');

            if (savedToken && savedEmail) {
                authToken = savedToken;
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('dashboard').style.display = 'block';
                document.getElementById('adminEmail').textContent = savedEmail;
                
                // If already logged in, load data
                loadTarget();
                loadSchedule();
                loadAttendance();
            }
        });
        
        // Final sanity check for API connection status when page loads
        async function testAPIConnection() {
            try {
                // Call a simple, unsecured endpoint (if available) or just check basic fetch
                await fetch(API_URL + '/health', { method: 'GET' }); 
                // If this works, the server is running and accessible (but CORS may still fail login)
            } catch (error) {
                const alertBox = document.getElementById('loginAlert');
                alertBox.textContent = '⚠️ API Server is currently UNREACHABLE. Check Backend status.';
                alertBox.className = `alert-message alert-error`;
                alertBox.style.opacity = 1;
            }
        }
        
        // Run test after DOM is loaded
        window.addEventListener('DOMContentLoaded', testAPIConnection);

    </script>
</body>
</html>

