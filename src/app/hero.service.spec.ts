import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    const spy =  jasmine.createSpyObj('MessageService', ['add']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, {provide: MessageService, useValue: spy}],
    });
    service = TestBed.get(HeroService);
    messageServiceSpy = TestBed.get(MessageService);

});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create add spy method', ()=>{
    expect(messageServiceSpy.add).toBeDefined();
  });

});
