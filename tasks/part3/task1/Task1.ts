function checkAccess(user: User, resource: Resource): void {
  if (isAccessAllowed(user, resource)) {
    grantAccess();
  } else {
    denyAccess();
  }
}

function isAccessAllowed(user: User, resource: Resource): boolean {
  return user && resource && user.isLoggedIn() && user.hasPermission(resource);
}

function grantAccess(): void {
  console.log(`Access granted`);
}

function denyAccess(): void {
  console.log(`Access denied`);
}

class User {
  private _loggedIn: boolean = false;
  private _resource: Resource;

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public hasPermission(resource: Resource): boolean {
    return resource.id === this._resource.id;
  }

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  public set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  public get resource(): Resource {
    return this._resource;
  }
  public set resource(value: Resource) {
    this._resource = value;
  }
}

class Resource {
  private _id: string;

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}
