import fetchJsonp from 'fetch-jsonp'
import * as mosicaCore from 'mosica-core'
import { HttpClient } from './HttpClient'

export const gigService = new mosicaCore.GigService(HttpClient(fetchJsonp), new mosicaCore.Matcher())
