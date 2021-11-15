<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $checkAdmin = User::whereEmail($request->email)->first();
        if ($checkAdmin && $checkAdmin->isAdmin == 1) {
            if (!auth()->guard('web')->attempt(['email' => $request->email, 'password' => $request->password])) {
                return response(['message' => 'These credentials do not match our records.'], 401);
            }
            $token = auth()->guard('web')->user()->createToken($request->email.'_Token', ['server:admin'])->plainTextToken;
            return response(['user' => auth()->user(), 'token' => $token, 'message' => 'Successfully logged in'], 201);
        }
        return response(['message' => 'These credentials do not match our records.'], 401);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response(['message' => 'Successfully logged out'], 200);
    }
}
