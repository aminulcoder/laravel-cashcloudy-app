<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateRoleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::latest()->paginate(10);
        // return  $roles;
        return Inertia::render('Admin/Role/Index', ['roles' => $roles]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        // return $roles;
        $permissions = Permission::all()->groupBy('module_name');
        // return gettype($permissions);
        return Inertia::render('Admin/Role/Create', ['roles' => $roles, 'permissions' => $permissions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|unique:' . Role::class,
                'permissionIds' => 'required|array'
            ],
            [
                'permissionIds.required' => 'Please select minimum 1 permission.'
            ]
        );
        $createdRole = Role::create(['name' => $request->name]);
        $permissions = array_map('intval', $request->permissionIds);
        $createdRole->syncPermissions($permissions);

        Session::flash('create');
        return redirect()->route('role.index')->with('create', ' Role  Successfully Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $role = Role::findById($id);
        $rolePermissions = $role->permissions()->pluck('id')->toArray();
        $permissions = Permission::all();
        return Inertia::render('Admin/Role/Edit', ['role' => $role, 'rolePermissions' => $rolePermissions, 'permissions' => $permissions]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->update(['name' => $request->validated('name')]);
        $role->syncPermissions( array_map('intval', $request->validated('permissionIds')));
        return redirect()->route('role.index')->with('warning',' Role Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
