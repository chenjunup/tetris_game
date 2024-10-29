import { IViewer, Point } from "./types"

export default class Square {
  private _point: Point = {
    x: 0,
    y: 0
  }

  private _color: string = ''

  private _viewer?: IViewer

  public get point () {
    return this._point;
  }
  public set point (value: Point) {
    this._point = value;
  }
  public get color () {
    return this._color;
  }
  public set color (value: string) {
    this._color = value;
  }
}
