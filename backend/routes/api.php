<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;

Route::update('/reservation/{date}', [ReservationController::class, 'getOne']);
