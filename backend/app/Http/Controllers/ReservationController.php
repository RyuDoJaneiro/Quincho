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
        $reservation = Reservation::firstWhere('reservationDate', $request->reservationDate);

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

    public function update(Request $request, $id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation)
        {
            return response()->json(['reservationFound' => false], 404);
        }

        $validated = $request->validate
        ([
            'reservationDate' => 'required|date',
            'isOccupied' => 'required|boolean'
        ]);

        $reservation->update($validated);

        return response()->json($reservation, 200);
    }
}
