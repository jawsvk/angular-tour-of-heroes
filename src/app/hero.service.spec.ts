import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { of } from 'rxjs';

const expectedHeroes =  [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

describe('HeroService', () => {
  let service: HeroService
  let httpClientSpy: { get: jasmine.Spy }
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    const spy =  jasmine.createSpyObj('MessageService', ['add']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, {provide: MessageService, useValue: spy}],
    });
    messageServiceSpy = TestBed.get(MessageService);
    service = new HeroService(<any> httpClientSpy, messageServiceSpy);

});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create add spy method', () => {
    expect(messageServiceSpy.add).toBeDefined();
  });

  it('should return array of all heroes (HttpClient called once)', () => {

    httpClientSpy.get.and.returnValue(of(expectedHeroes));
    service.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'), fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return the first hero', () => {
    const expectedHero = expectedHeroes[0];
    httpClientSpy.get.and.returnValue(of(expectedHeroes[0]));
    service.getHero(11).subscribe(
      hero => expect(hero).toEqual(expectedHero, 'expected hero'), fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });



});
