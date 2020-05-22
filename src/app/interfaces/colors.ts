
export interface Color {
    color: string,
    id: number,
    name: string,
    pantone_value: string,
    year: number,
}


export interface Colors {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: [{
        color: string,
        id: number,
        name: string,
        pantone_value: string,
        year: number,
    }],
    ad: {
        company: string,
        url: string,
        text: string
    }
    
}
