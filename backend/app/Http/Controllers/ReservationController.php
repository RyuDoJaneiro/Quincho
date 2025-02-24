<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{

    public function index()
    {
        return response()->json(Reservation::all(), 200);
    }

    public function getOne(Request $request)
    {
        $reservation = Reservation::findWhere('reservationDate', $request->reservationDate);

        if ($date == -1)
        return;

        if (!$reservation)
        {
            return response()->json(['reservationFound' => false], 200);
        }
        else
        {
            return response()->json(['reservationFound' => true], 200);
        }
    }

    public function create(Request $request)
    {
        $validated = $request->validate
        ([
            'reservationDate' => 'required|date',
            'isOccupied' => 'required|boolean'
        ]);

        $reservation = Reservation::create($validated);

        return response()->json($reservation, 201);
    }
}
